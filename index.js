const exercises = [
    { 
        id: 1, 
        title: "Sumar números pares", 
        hint: "Recuerda que puedes usar numero % 2 === 0 para verificar si un número es par", 
        check: () => {
            try {
                return typeof sumarPares === 'function' && 
                       sumarPares() === 2550; // suma de pares del 2 al 100
            } catch(e) {
                return false;
            }
        }
    },
    { 
        id: 2, 
        title: "Contar vocales", 
        hint: "Puedes usar un bucle for y comparar cada carácter con 'aeiou'", 
        check: () => {
            try {
                return typeof contarVocales === 'function' && 
                       contarVocales('murcielago') === 5 &&
                       contarVocales('casa') === 2;
            } catch(e) {
                return false;
            }
        }
    },
    { 
        id: 3, 
        title: "Números impares en rango", 
        hint: "Usa un bucle for y verifica si cada número es impar con numero % 2 !== 0", 
        check: () => {
            try {
                return typeof numerosImpares === 'function' && 
                       JSON.stringify(numerosImpares(1, 5)) === JSON.stringify([1,3,5]);
            } catch(e) {
                return false;
            }
        }
    },
    { 
        id: 4, 
        title: "Tabla de multiplicar", 
        hint: "Usa un bucle for del 1 al 10 y multiplica cada número por el número base", 
        check: () => {
            try {
                return typeof tablaMultiplicar === 'function' && 
                       JSON.stringify(tablaMultiplicar(5)) === JSON.stringify([5,10,15,20,25,30,35,40,45,50]);
            } catch(e) {
                return false;
            }
        }
    },
    { 
        id: 5, 
        title: "Frases con forEach", 
        hint: "Crea un array vacío y usa push dentro del forEach para agregar las nuevas frases", 
        check: () => {
            try {
                const frutas = ['manzana', 'pera', 'uva'];
                return typeof generarFrases === 'function' && 
                       JSON.stringify(generarFrases(frutas)) === JSON.stringify([
                           'Fruta encontrada: manzana',
                           'Fruta encontrada: pera',
                           'Fruta encontrada: uva'
                       ]);
            } catch(e) {
                return false;
            }
        }
    },
    { 
        id: 6, 
        title: "Array de pares", 
        hint: "Usa push() dentro del bucle for para agregar cada número par al array", 
        check: () => {
            try {
                return typeof crearArrayPares === 'function' && 
                       JSON.stringify(crearArrayPares()) === JSON.stringify([2,4,6,8,10,12,14,16,18,20]);
            } catch(e) {
                return false;
            }
        }
    },
    { 
        id: 7, 
        title: "Filtrar mayores", 
        hint: "Crea un nuevo array y usa push para agregar solo los números que cumplan la condición", 
        check: () => {
            try {
                return typeof filtrarMayores === 'function' && 
                       JSON.stringify(filtrarMayores([1,5,10,15], 7)) === JSON.stringify([10,15]);
            } catch(e) {
                return false;
            }
        }
    },
    { 
        id: 8, 
        title: "Suma con forEach", 
        hint: "Declara una variable suma = 0 antes del forEach y súmale cada número dentro del callback", 
        check: () => {
            try {
                return typeof sumarConForEach === 'function' && 
                       sumarConForEach([1,2,3,4,5]) === 15;
            } catch(e) {
                return false;
            }
        }
    },
    { 
        id: 9, 
        title: "Buscar palabras", 
        hint: "Usa un bucle for y el método includes() para verificar si cada palabra contiene la letra", 
        check: () => {
            try {
                return typeof buscarPalabras === 'function' && 
                       JSON.stringify(buscarPalabras(['casa', 'perro', 'gato'], 'a')) === JSON.stringify(['casa', 'gato']);
            } catch(e) {
                return false;
            }
        }
    },
    { 
        id: 10, 
        title: "Callback matemático", 
        hint: "El callback es una función que recibe dos números y retorna el resultado de la operación", 
        check: () => {
            try {
                const suma = (a, b) => a + b;
                return typeof ejecutarOperacion === 'function' && 
                       ejecutarOperacion(5, 3, suma) === 8;
            } catch(e) {
                return false;
            }
        }
    }
];


function initializeExercises() {
    const list = document.getElementById("exercise-list");
    exercises.forEach(exercise => {
        const card = document.createElement("div");
        card.className = "exercise-card bg-white rounded-lg shadow-md p-6 flex flex-col";
        
        // Header (mantiene el código existente)
        const header = document.createElement("div");
        header.className = "flex items-center justify-between mb-4";
        
        const title = document.createElement("h3");
        title.className = "text-lg font-semibold text-gray-800";
        title.innerText = exercise.title;
        
        const checkmark = document.createElement("span");
        checkmark.className = "text-2xl";
        checkmark.innerHTML = "❌";
        
        header.appendChild(title);
        header.appendChild(checkmark);
        
        // Área de pruebas
        const testArea = document.createElement("div");
        testArea.className = "mt-4 p-4 bg-gray-50 rounded-lg";
        
        // Crear campos de entrada según el ejercicio
        const inputs = createInputsForExercise(exercise);
        const testButton = document.createElement("button");
        testButton.className = "w-full mt-3 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors";
        testButton.innerHTML = '<i class="fas fa-play mr-2"></i>Probar función';
        
        const resultArea = document.createElement("div");
        resultArea.className = "mt-3 p-3 bg-gray-100 rounded-md hidden";
        
        testButton.onclick = () => {
            resultArea.classList.remove('hidden');
            try {
                const result = runExerciseTest(exercise, inputs);
                resultArea.innerHTML = `
                    <div class="text-sm">
                        <div class="font-semibold mb-2">Resultado:</div>
                        <div class="font-mono bg-white p-2 rounded">
                            ${formatTestResult(result)}
                        </div>
                    </div>
                `;
            } catch (error) {
                resultArea.innerHTML = `
                    <div class="text-red-600 text-sm">
                        <div class="font-semibold mb-2">Error:</div>
                        <div class="font-mono">${error.message}</div>
                    </div>
                `;
            }
        };
        
        testArea.append(...inputs, testButton, resultArea);
        
        // Botón de pista (mantiene el código existente)
        const hintButton = document.createElement("button");
        hintButton.className = "mt-4 inline-flex items-center justify-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors";
        hintButton.innerHTML = `
            <i class="fas fa-lightbulb mr-2"></i>
            Ver pista
        `;
        hintButton.onclick = () => {
            Swal.fire({
                title: 'Pista',
                text: exercise.hint,
                icon: 'info',
                confirmButtonColor: '#4f46e5'
            });
        };
        
        // Ensamblaje final
        card.appendChild(header);
        card.appendChild(testArea);
        card.appendChild(hintButton);
        list.appendChild(card);
        
        // Validación automática
        validateExercise(exercise, checkmark);
    });
}

// Función de validación actualizada
function validateExercise(exercise, checkmark) {
    setInterval(() => {
        try {
            const isValid = exercise.check();
            checkmark.innerHTML = isValid ? 
                '<i class="fas fa-check-circle text-green-500"></i>' : 
                '<i class="fas fa-times-circle text-red-500"></i>';
        } catch (e) {
            checkmark.innerHTML = '<i class="fas fa-times-circle text-red-500"></i>';
        }
    }, 1000);
}

function createInputsForExercise(exercise) {
    const inputConfigs = {
        1: [], // No necesita inputs
        2: [{ name: 'texto', type: 'text', placeholder: 'Palabra a analizar' }],
        3: [
            { name: 'inicio', type: 'number', placeholder: 'Número inicial' },
            { name: 'fin', type: 'number', placeholder: 'Número final' }
        ],
        4: [{ name: 'numero', type: 'number', placeholder: 'Número para la tabla' }],
        5: [{ name: 'frutas', type: 'text', placeholder: 'Frutas separadas por coma' }],
        6: [], // No necesita inputs
        7: [
            { name: 'numeros', type: 'text', placeholder: 'Números separados por coma' },
            { name: 'limite', type: 'number', placeholder: 'Número límite' }
        ],
        8: [{ name: 'numeros', type: 'text', placeholder: 'Números separados por coma' }],
        9: [
            { name: 'palabras', type: 'text', placeholder: 'Palabras separadas por coma' },
            { name: 'letra', type: 'text', placeholder: 'Letra a buscar' }
        ],
        10: [
            { name: 'num1', type: 'number', placeholder: 'Primer número' },
            { name: 'num2', type: 'number', placeholder: 'Segundo número' },
            { name: 'operacion', type: 'text', placeholder: 'Operación (suma, resta, mult, div)' }
        ]
    };

    const configs = inputConfigs[exercise.id] || [];
    return configs.map(config => {
        const inputDiv = document.createElement('div');
        inputDiv.className = 'mb-2';
        
        const input = document.createElement('input');
        input.type = config.type;
        input.placeholder = config.placeholder;
        input.className = 'w-full px-3 py-2 border rounded-md focus:outline-none focus:border-green-500';
        input.dataset.param = config.name;
        
        return inputDiv.appendChild(input) && inputDiv;
    });
}
function runExerciseTest(exercise, inputElements) {
    const params = Array.from(inputElements)
        .map(div => div.firstChild)
        .map(input => {
            if (input.type === 'number') return Number(input.value);
            // Convertir strings de arrays y objetos
            if (input.value.includes(',')) return input.value.split(',').map(Number);
            if (input.value.startsWith('{')) return JSON.parse(input.value);
            return input.value;
        });
    
    switch (exercise.id) {
        case 1: return sumarPares();
        case 2: return contarVocales(...params);
        case 3: return numerosImpares(...params);
        case 4: return tablaMultiplicar(...params);
        case 5: return generarFrases(...params);
        case 6: return crearArrayPares();
        case 7: return filtrarMayores(...params);
        case 8: return sumarConForEach(...params);
        case 9: return buscarPalabras(...params);
        case 10: 
            const operaciones = {
                'suma': (a,b) => a + b,
                'resta': (a,b) => a - b,
                'mult': (a,b) => a * b,
                'div': (a,b) => a / b
            };
            return ejecutarOperacion(params[0], params[1], operaciones[params[2]]);
        default: throw new Error('Ejercicio no encontrado');
    }
}

function formatTestResult(result) {
    if (typeof result === 'boolean') {
        return result ? 'true' : 'false';
    }
    if (result === undefined) {
        return 'undefined';
    }
    if (result === null) {
        return 'null';
    }
    return result.toString();
}

// Inicialización de ejercicios en la página
initializeExercises();
