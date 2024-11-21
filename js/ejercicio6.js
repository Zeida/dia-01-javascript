// Ejercicio 6: Contar Elementos Array
// Instrucciones:
// 1. Crea una función llamada `contarMayoresA5` que reciba un array de números
// 2. Usa un bucle for para recorrer el array
// 3. Cuenta cuántos números son mayores que 5
// 4. Retorna ese contador
//
// Ejemplo: contarMayoresA5([2,5,8,1,9]) debe retornar 2 (porque 8 y 9 son mayores que 5)

// Escribe tu código aquí debajo:

function contarMayoresA5(numeros) {
    var contador = 0;
    for (let index = 0; index < numeros.length; index++) {
        if (numeros[index] > 5) {
            contador++;
        }

    }
    return contador;
}