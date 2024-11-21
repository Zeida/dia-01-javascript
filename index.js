const exercises = [
    { 
        id: 1, 
        title: "Crear Array", 
        hint: "Recuerda que los arrays se crean con corchetes [] y los elementos se separan con comas", 
        check: () => {
            try {
                return typeof crearArrayNumeros === 'function' && 
                       JSON.stringify(crearArrayNumeros()) === JSON.stringify([1,2,3,4,5]);
            } catch(e) {
                return false;
            }
        }
    },
    { 
        id: 2, 
        title: "Acceder a Array", 
        hint: "Los arrays empiezan en la posición 0. Para el último elemento, piensa cuántos elementos tiene el array", 
        check: () => {
            try {
                return typeof obtenerPrimeroYUltimo === 'function' && 
                       JSON.stringify(obtenerPrimeroYUltimo([1,2,3])) === JSON.stringify([1,3]);
            } catch(e) {
                return false;
            }
        }
    },
    { 
        id: 3, 
        title: "Sumar Array", 
        hint: "Usa un bucle for normal y una variable para ir sumando cada número del array", 
        check: () => {
            try {
                return typeof sumarArray === 'function' && 
                       sumarArray([1,2,3]) === 6 && 
                       sumarArray([10,20]) === 30;
            } catch(e) {
                return false;
            }
        }
    },
    { 
        id: 4, 
        title: "Crear Objeto", 
        hint: "Los objetos usan llaves {} y pares de clave: valor separados por comas", 
        check: () => {
            try {
                const persona = crearPersona("Juan", 25);
                return typeof crearPersona === 'function' && 
                       persona.nombre === "Juan" && 
                       persona.edad === 25;
            } catch(e) {
                return false;
            }
        }
    },
    { 
        id: 5, 
        title: "Modificar Objeto", 
        hint: "Para cambiar un valor en un objeto, usa la notación punto: objeto.propiedad = nuevoValor", 
        check: () => {
            try {
                const obj = {nombre: "Juan"};
                const modificado = cambiarNombre(obj, "Pedro");
                return typeof cambiarNombre === 'function' && 
                       modificado.nombre === "Pedro";
            } catch(e) {
                return false;
            }
        }
    },
    { 
        id: 6, 
        title: "Contar Elementos Array", 
        hint: "Recorre el array con un bucle for y usa una variable contador para los elementos que cumplan la condición", 
        check: () => {
            try {
                return typeof contarMayoresA5 === 'function' && 
                       contarMayoresA5([2,5,8,1,9]) === 2;
            } catch(e) {
                return false;
            }
        }
    },
    { 
        id: 7, 
        title: "Copiar Objeto", 
        hint: "Crea un nuevo objeto y copia cada propiedad una por una", 
        check: () => {
            try {
                const original = {a: 1, b: 2};
                const copia = copiarObjeto(original);
                return typeof copiarObjeto === 'function' && 
                       copia.a === 1 && copia.b === 2 && original !== copia;
            } catch(e) {
                return false;
            }
        }
    },
    { 
        id: 8, 
        title: "Array de Números", 
        hint: "Usa un bucle for para crear un nuevo array con los números que necesites", 
        check: () => {
            try {
                return typeof crearArrayHasta === 'function' && 
                       JSON.stringify(crearArrayHasta(3)) === JSON.stringify([1,2,3]);
            } catch(e) {
                return false;
            }
        }
    },
    { 
        id: 9, 
        title: "Objeto con Arrays", 
        hint: "Un objeto puede tener arrays como valores. Accede a ellos con objeto.propiedad[indice]", 
        check: () => {
            try {
                return typeof crearAlumno === 'function' && 
                       JSON.stringify(crearAlumno("Juan", [8,9,7]).notas) === JSON.stringify([8,9,7]);
            } catch(e) {
                return false;
            }
        }
    },
    { 
        id: 10, 
        title: "Array de Objetos Simple", 
        hint: "Crea un array donde cada elemento sea un objeto. Usa un bucle for para procesarlos", 
        check: () => {
            try {
                const productos = [{precio: 10}, {precio: 20}];
                return typeof sumarPrecios === 'function' && 
                       sumarPrecios(productos) === 30;
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
        1: [], // No necesita inputs, solo crea el array
        2: [{ name: 'array', type: 'text', placeholder: 'Array (ej: 1,2,3,4)' }],
        3: [{ name: 'array', type: 'text', placeholder: 'Array de números (ej: 1,2,3)' }],
        4: [
            { name: 'nombre', type: 'text', placeholder: 'Nombre' },
            { name: 'edad', type: 'number', placeholder: 'Edad' }
        ],
        5: [
            { name: 'objeto', type: 'text', placeholder: 'Objeto actual (ej: Juan)' },
            { name: 'nuevoNombre', type: 'text', placeholder: 'Nuevo nombre' }
        ],
        6: [{ name: 'array', type: 'text', placeholder: 'Array de números (ej: 2,5,8,1,9)' }],
        7: [{ name: 'objeto', type: 'text', placeholder: 'Objeto (ej: {"a":1,"b":2})' }],
        8: [{ name: 'numero', type: 'number', placeholder: 'Número límite' }],
        9: [
            { name: 'nombre', type: 'text', placeholder: 'Nombre del alumno' },
            { name: 'notas', type: 'text', placeholder: 'Notas (ej: 8,9,7)' }
        ],
        10: [{ name: 'productos', type: 'text', placeholder: 'Array de precios (ej: 10,20,30)' }]
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
        case 1: return crearArrayNumeros();
        case 2: return obtenerPrimeroYUltimo(...params);
        case 3: return sumarArray(...params);
        case 4: return crearPersona(...params);
        case 5: return cambiarNombre(...params);
        case 6: return contarMayoresA5(...params);
        case 7: return copiarObjeto(...params);
        case 8: return crearArrayHasta(...params);
        case 9: return crearAlumno(...params);
        case 10: return sumarPrecios(params[0].map(precio => ({precio})));
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
