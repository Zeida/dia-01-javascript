class AIAssistant {
    constructor() {

        if (!localStorage.getItem('openai_api_key')){
            var apikey= prompt('¿Puedes introducir la clave de openai que te dio yunior?');
            localStorage.setItem('openai_api_key', apikey)
        }
        this.API_KEY = localStorage.getItem('openai_api_key');
        this.ENDPOINT = 'https://api.openai.com/v1/chat/completions';
        this.context = this.initializeContext();
        this.setupUI();
        this.setupCodeWatcher();
    }

    setupCodeWatcher() {
        // Observar cambios en el código cada 5 segundos
        setInterval(async () => {
            await this.updateContext();
        }, 5000);
    }

    async updateContext() {
        const exerciseFiles = {};
        const fetchPromises = [];

        for (let i = 1; i <= 10; i++) {
            // Usamos la ruta actual de los ejercicios
            const fetchPromise = fetch(`./js/ejercicio${i}.js`)
                .then(response => response.text())
                .then(code => {
                    exerciseFiles[`ejercicio${i}`] = code;
                })
                .catch(error => console.error(`Error al cargar el ejercicio ${i}:`, error));

            fetchPromises.push(fetchPromise);
        }

        try {
            await Promise.all(fetchPromises);
            this.context.currentCode = exerciseFiles;
        } catch (error) {
            console.error('Error actualizando el contexto:', error);
        }
    }

    getFunctionNameForExercise(exerciseId) {
        const functionNames = {
            1: 'sumarPares',
            2: 'contarVocales',
            3: 'numerosImpares',
            4: 'tablaMultiplicar',
            5: 'generarFrases',
            6: 'crearArrayPares',
            7: 'filtrarMayores',
            8: 'sumarConForEach',
            9: 'buscarPalabras',
            10: 'ejecutarOperacion'
        };
        return functionNames[exerciseId];
    }

    initializeContext() {
        // Recopilamos el código de todos los ejercicios
        const exerciseFiles = {};
        const fetchPromises = []; // Array para almacenar las promesas de fetch

        for (let i = 1; i <= 10; i++) {
            const scriptElement = document.querySelector(`script[src*="/originales_no_abrir/ejercicio${i}.js"]`);
            if (scriptElement) {
                // Usamos fetch para cargar el contenido del archivo y obtener los comentarios
                const fetchPromise = fetch(scriptElement.src)
                    .then(response => response.text())
                    .then(code => {
                        exerciseFiles[`ejercicio${i}`] = code;
                    })
                    .catch(error => console.error(`Error al cargar el ejercicio ${i}:`, error));

                fetchPromises.push(fetchPromise); // Agregar la promesa al array
            }
        }

        // Esperamos a que todas las promesas de fetch terminen
        Promise.all(fetchPromises).then(() => {
            this.context.exercises = exerciseFiles;
        });

        return {
            systemPrompt: `
                Eres un asistente especializado en ayudar a estudiantes que están aprendiendo JavaScript por primera vez.
                Contexto actual:
                - Los estudiantes están en su tercera clase de JavaScript
                - Están aprendiendo sobre arrays y objetos básicos
                - Ya conocen funciones y bucles for
                - NO han visto: forEach, map, filter, Object.keys, métodos de array avanzados
                
                Reglas importantes:
                1. NUNCA des la solución completa
                2. Guía usando solo bucles for y while y acceso básico a arrays/objetos
                3. Si ves indexOf, forEach u otros métodos avanzados, sugiere usar for
                4. Recuerda que están aprendiendo sobre referencias vs valores
                5. Usa analogías simples:
                   - Arrays como lista de la compra numerada
                   - Objetos como ficha de datos de una persona
                6. Guía al estudiante con preguntas y pistas
                7. Si detectas errores básicos de sintaxis, explícalos de manera didáctica
                8. Usa analogías y ejemplos simples
            `
        };
    }

    setupUI() {
        // Crear botón flotante de ayuda
        const helpButton = document.createElement('button');
        helpButton.innerHTML = '<i class="fas fa-robot"></i> Asistente IA';
        helpButton.className = 'fixed bottom-4 right-4 bg-indigo-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-indigo-700 transition-colors flex items-center gap-2 text-lg';
        
        // Crear modal del chat con mejor diseño
        const chatModal = document.createElement('div');
        chatModal.className = 'fixed bottom-20 right-4 w-[400px] h-[700px] bg-white rounded-lg shadow-2xl hidden flex flex-col border border-gray-200'; // Aumentar ancho y alto
        chatModal.innerHTML = `
            <div class="p-4 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white rounded-t-lg flex justify-between items-center">
                <div class="flex items-center gap-3">
                    <i class="fas fa-robot text-xl"></i>
                    <div>
                        <h3 class="font-semibold">Asistente JavaScript</h3>
                        <p class="text-xs text-indigo-200">Powered by AI</p>
                    </div>
                </div>
                <button class="text-white hover:text-indigo-200 transition-colors text-xl" id="close-chat">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="flex-1 p-4 overflow-auto bg-gray-50" id="chat-messages">
                <div class="chat-message assistant">
                    <div class="message-content">
                        ¡Hola! Soy tu asistente de JavaScript. ¿En qué puedo ayudarte?
                    </div>
                </div>
            </div>
            <div class="p-4 border-t bg-white">
                <form id="chat-form" class="flex gap-2">
                    <input type="text" 
                           placeholder="Escribe tu pregunta..." 
                           class="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600">
                    <button type="submit" 
                            class="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2">
                        <span>Enviar</span>
                        <i class="fas fa-paper-plane"></i>
                    </button>
                </form>
            </div>
        `;

    }

    async handleQuestion(e) {
        e.preventDefault();
        const input = e.target.querySelector('input');
        const question = input.value;
        input.value = '';

        const messagesDiv = document.getElementById('chat-messages');
        
        // Agregar mensaje del usuario
        this.addMessage(messagesDiv, question, 'user');

        try {
            const response = await this.getAIResponse(question);
            this.addMessage(messagesDiv, response, 'assistant');
        } catch (error) {
            this.addMessage(messagesDiv, 'Lo siento, hubo un error. Por favor, intenta de nuevo.', 'error');
        }
    }

    async getAIResponse(question) {
        // Actualizar el contexto antes de enviar la pregunta
        this.updateContext();

        const systemPromptWithContext = `
            ${this.context.systemPrompt}
            
            Enunciados de los ejercicios:
            ${JSON.stringify(this.context.exercises, null, 2)}
            
            Código actual del estudiante:
            ${JSON.stringify(this.context.currentCode, null, 2)}
        `;

        const response = await fetch(this.ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.API_KEY}`
            },
            body: JSON.stringify({
                model: "gpt-4o-mini",
                messages: [
                    { 
                        role: "system", 
                        content: systemPromptWithContext
                    },
                    { role: "user", content: question }
                ],
                temperature: 0.7,
                max_tokens: 500
            })
        });

        const data = await response.json();
        return data.choices[0].message.content;
    }

    addMessage(container, message, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${type}`;
        
        const bubble = document.createElement('div');
        bubble.className = 'message-content';
        
        // Usar marked para renderizar Markdown
        bubble.innerHTML = marked.parse(message, {
            breaks: true,
            gfm: true,
            highlight: function(code, lang) {
                if (lang && hljs.getLanguage(lang)) {
                    return hljs.highlight(code, { language: lang }).value;
                }
                return code;
            }
        });
        
        messageDiv.appendChild(bubble);
        container.appendChild(messageDiv);
        container.scrollTop = container.scrollHeight;
    }

    // Método para analizar código y detectar errores comunes
    analyzeCode() {
        const commonErrors = {
            missingBraces: /\b(if|for|while|function)\s*\([^{]*$/m,
            missingSemicolons: /[^;{}\s]\s*$/m,
            undefinedVariables: /\b(var|let|const)\s+([a-zA-Z_$][0-9a-zA-Z_$]*)\s*(?!=)/g
        };

        Object.entries(this.context.exercises).forEach(([file, code]) => {
            // Análisis básico de errores
            const errors = [];
            
            if (commonErrors.missingBraces.test(code)) {
                errors.push(`Posible falta de llaves {} en ${file}`);
            }
            
            // Más análisis según necesidades...
            
            if (errors.length > 0) {
                console.warn(`Errores detectados en ${file}:`, errors);
                // Podríamos usar esta información para dar consejos proactivos
            }
        });
    }
}

// Inicializar el asistente
const aiAssistant = new AIAssistant();