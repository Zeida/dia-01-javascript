const exercises = [
    { 
        id: 1, 
        title: "Nombres en mayúsculas con map", 
        hint: "Usa el método map y toUpperCase() para transformar cada nombre", 
        check: () => {
            try {
                return typeof transformarMayusculas === 'function' && 
                       JSON.stringify(transformarMayusculas(['ana', 'juan'])) === JSON.stringify(['ANA', 'JUAN']) &&
                       JSON.stringify(transformarMayusculas(['pedro'])) === JSON.stringify(['PEDRO']);
            } catch(e) {
                return false;
            }
        }
    },
    { 
        id: 2, 
        title: "Filtrar productos por precio", 
        hint: "Usa filter para crear un nuevo array solo con los productos que cumplan la condición", 
        check: () => {
            try {
                const productos = [
                    {nombre: 'Camisa', precio: 20},
                    {nombre: 'Pantalón', precio: 50},
                    {nombre: 'Zapatos', precio: 80}
                ];
                return typeof filtrarPorPrecio === 'function' && 
                       JSON.stringify(filtrarPorPrecio(productos, 60)) === 
                       JSON.stringify([{nombre: 'Camisa', precio: 20}, {nombre: 'Pantalón', precio: 50}]);
            } catch(e) {
                return false;
            }
        }
    },
    { 
        id: 3, 
        title: "Encontrar usuario por email", 
        hint: "Usa el método find para encontrar el primer usuario que coincida", 
        check: () => {
            try {
                const usuarios = [
                    {nombre: 'Ana', email: 'ana@mail.com'},
                    {nombre: 'Juan', email: 'juan@mail.com'}
                ];
                return typeof buscarPorEmail === 'function' && 
                       JSON.stringify(buscarPorEmail(usuarios, 'ana@mail.com')) === 
                       JSON.stringify({nombre: 'Ana', email: 'ana@mail.com'});
            } catch(e) {
                return false;
            }
        }
    },
    { 
        id: 4, 
        title: "Calcular total del carrito", 
        hint: "Usa forEach para recorrer los productos y sumar precio * cantidad", 
        check: () => {
            try {
                const carrito = [
                    {nombre: 'Camisa', precio: 20, cantidad: 2},
                    {nombre: 'Pantalón', precio: 50, cantidad: 1}
                ];
                return typeof calcularTotal === 'function' && 
                       calcularTotal(carrito) === 90 &&
                       calcularTotal([{nombre: 'Zapatos', precio: 60, cantidad: 2}]) === 120;
            } catch(e) {
                return false;
            }
        }
    },
    { 
        id: 5, 
        title: "Verificar stock disponible", 
        hint: "Usa some para comprobar si algún producto tiene stock mayor a 0", 
        check: () => {
            try {
                const productos1 = [
                    {nombre: 'Camisa', stock: 0},
                    {nombre: 'Pantalón', stock: 5}
                ];
                const productos2 = [
                    {nombre: 'Camisa', stock: 0},
                    {nombre: 'Pantalón', stock: 0}
                ];
                return typeof hayStock === 'function' && 
                       hayStock(productos1) === true &&
                       hayStock(productos2) === false;
            } catch(e) {
                return false;
            }
        }
    },
    { 
        id: 6, 
        title: "Verificar permisos de usuarios", 
        hint: "Usa every para verificar si todos los usuarios son admin", 
        check: () => {
            try {
                const usuarios1 = [
                    {nombre: 'Ana', rol: 'admin'},
                    {nombre: 'Juan', rol: 'admin'}
                ];
                const usuarios2 = [
                    {nombre: 'Ana', rol: 'admin'},
                    {nombre: 'Juan', rol: 'user'}
                ];
                return typeof todosAdmin === 'function' && 
                       todosAdmin(usuarios1) === true &&
                       todosAdmin(usuarios2) === false;
            } catch(e) {
                return false;
            }
        }
    },
    { 
        id: 7, 
        title: "Formatear emails", 
        hint: "Usa map para transformar cada email según las reglas especificadas", 
        check: () => {
            try {
                return typeof formatearEmails === 'function' && 
                       JSON.stringify(formatearEmails(['JUAN', 'ana@mail.com'])) === 
                       JSON.stringify(['juan@gmail.com', 'ana@mail.com']) &&
                       JSON.stringify(formatearEmails(['MARIA', 'PEDRO'])) === 
                       JSON.stringify(['maria@gmail.com', 'pedro@gmail.com']);
            } catch(e) {
                return false;
            }
        }
    },
    { 
        id: 8, 
        title: "Filtrar tareas completadas", 
        hint: "Usa filter para obtener las completadas y map para formatearlas", 
        check: () => {
            try {
                const tareas = [
                    {titulo: 'Estudiar JS', completada: true},
                    {titulo: 'Hacer ejercicio', completada: false},
                    {titulo: 'Leer', completada: true}
                ];
                return typeof obtenerTareasCompletadas === 'function' && 
                       JSON.stringify(obtenerTareasCompletadas(tareas)) === 
                       JSON.stringify(['Tarea: Estudiar JS', 'Tarea: Leer']);
            } catch(e) {
                return false;
            }
        }
    },
    { 
        id: 9, 
        title: "Procesar pedidos", 
        hint: "Usa filter para los entregados y map para el formato", 
        check: () => {
            try {
                const pedidos = [
                    {id: 1, monto: 100, entregado: true},
                    {id: 2, monto: 50, entregado: false},
                    {id: 3, monto: 75, entregado: true}
                ];
                return typeof formatearPedidosEntregados === 'function' && 
                       JSON.stringify(formatearPedidosEntregados(pedidos)) === 
                       JSON.stringify(['Pedido #1: $100', 'Pedido #3: $75']);
            } catch(e) {
                return false;
            }
        }
    },
    { 
        id: 10, 
        title: "Gestión de biblioteca", 
        hint: "Usa el método adecuado para cada operación (filter, find, every)", 
        check: () => {
            try {
                const libros = [
                    {titulo: 'JS', autor: 'Juan', disponible: true, prestados: 5},
                    {titulo: 'HTML', autor: 'Ana', disponible: false, prestados: 8},
                    {titulo: 'CSS', autor: 'Pedro', disponible: true, prestados: 2}
                ];
                return typeof gestionarBiblioteca === 'function' && 
                       JSON.stringify(gestionarBiblioteca(libros, 'disponibles')) === 
                       JSON.stringify([{titulo: 'JS', autor: 'Juan', disponible: true, prestados: 5},
                                    {titulo: 'CSS', autor: 'Pedro', disponible: true, prestados: 2}]) &&
                       JSON.stringify(gestionarBiblioteca(libros, 'buscar', 'HTML')) === 
                       JSON.stringify({titulo: 'HTML', autor: 'Ana', disponible: false, prestados: 8}) &&
                       gestionarBiblioteca(libros, 'verificarAutores') === true &&
                       gestionarBiblioteca(libros, 'totalPrestados') === 15;
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
        1: [{ name: 'nombres', type: 'text', placeholder: 'Nombres separados por coma' }],
        2: [
            { name: 'productos', type: 'text', placeholder: 'Array de productos en formato JSON' },
            { name: 'precioMaximo', type: 'number', placeholder: 'Precio máximo' }
        ],
        3: [
            { name: 'usuarios', type: 'text', placeholder: 'Array de usuarios en formato JSON' },
            { name: 'email', type: 'text', placeholder: 'Email a buscar' }
        ],
        4: [{ 
            name: 'carrito', 
            type: 'text', 
            placeholder: 'Array de productos en formato JSON [{nombre, precio, cantidad}]' 
        }],
        5: [{ 
            name: 'productos', 
            type: 'text', 
            placeholder: 'Array de productos en formato JSON [{nombre, stock}]' 
        }],
        6: [{ 
            name: 'usuarios', 
            type: 'text', 
            placeholder: 'Array de usuarios en formato JSON [{nombre, rol}]' 
        }],
        7: [{ 
            name: 'emails', 
            type: 'text', 
            placeholder: 'Emails separados por coma' 
        }],
        8: [{ 
            name: 'tareas', 
            type: 'text', 
            placeholder: 'Array de tareas en formato JSON [{titulo, completada}]' 
        }],
        9: [{ 
            name: 'pedidos', 
            type: 'text', 
            placeholder: 'Array de pedidos en formato JSON [{id, monto, entregado}]' 
        }],
        10: [
            { 
                name: 'libros', 
                type: 'text', 
                placeholder: 'Array de libros en formato JSON' 
            },
            {
                name: 'operacion',
                type: 'text',
                placeholder: 'disponibles, buscar, verificarAutores, totalPrestados'
            },
            {
                name: 'valor',
                type: 'text',
                placeholder: 'Valor adicional (opcional)'
            }
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
            if (input.value.includes(',') && !input.value.includes('{')) 
                return input.value.split(',').map(s => s.trim());
            if (input.value.startsWith('[')) return JSON.parse(input.value);
            return input.value;
        });
    
    switch (exercise.id) {
        case 1: return transformarMayusculas(params[0]);
        case 2: return filtrarPorPrecio(params[0], params[1]);
        case 3: return buscarPorEmail(params[0], params[1]);
        case 4: return calcularTotal(params[0]);
        case 5: return hayStock(params[0]);
        case 6: return todosAdmin(params[0]);
        case 7: return formatearEmails(params[0]);
        case 8: return obtenerTareasCompletadas(params[0]);
        case 9: return formatearPedidosEntregados(params[0]);
        case 10: return gestionarBiblioteca(params[0], params[1], params[2]);
        // ... continuar con el resto de casos
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
    if (typeof result === 'object') {
        return JSON.stringify(result);
    }
    if (Array.isArray(result)) {
        return result.map(formatTestResult).join(', ');
    }
    return result.toString();
}

// Inicialización de ejercicios en la página
initializeExercises();
