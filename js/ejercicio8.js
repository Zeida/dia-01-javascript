// Ejercicio 8: Array de Números
// Instrucciones:
// 1. Crea una función llamada `crearArrayHasta` que reciba un número como parámetro
// 2. La función debe crear un array con todos los números desde 1 hasta ese número
// 3. Usa un bucle for para ir agregando los números al array
// 4. Retorna el array
//
// Ejemplo: crearArrayHasta(3) debe retornar [1,2,3]

// Escribe tu código aquí debajo:

function crearArrayHasta(hasta) {
    var nuevoArray = [];
    for (let index = 1; index <= hasta; index++) {
        nuevoArray.push(index);

    }
    return nuevoArray;
}