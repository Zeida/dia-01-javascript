// Ejercicio 10: Callback matemático
// 
// Descripción:
// Crea una función que reciba dos números y una función matemática simple
// (como sumar o restar) y aplique esa operación a los números.
//
// Instrucciones:
// 1. Crea una función llamada ejecutarOperacion que reciba tres parámetros:
//    - numero1: el primer número
//    - numero2: el segundo número
//    - operacion: una función que hace el cálculo (será suma, resta, etc.)
// 2. Dentro de ejecutarOperacion, simplemente llama a la función operacion 
//    pasándole los dos números como argumentos
// 3. Retorna el resultado
//
// Ejemplos:
// function sumar(a, b) { return a + b; }
// function restar(a, b) { return a - b; }
// 
// ejecutarOperacion(5, 3, sumar)   // debe retornar 8
// ejecutarOperacion(5, 3, restar)  // debe retornar 2
//
// Pista: Un callback es simplemente una función que pasamos como argumento
//        y que será ejecutada dentro de nuestra función principal

function ejecutarOperacion(numero1, numero2, operacion){
    return operacion(numero1, numero2);
}