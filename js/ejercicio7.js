// Ejercicio 7: Filtrar mayores
// 
// Descripción:
// Crea una función que reciba un array de números y un límite, y devuelva
// un nuevo array solo con los números mayores al límite.
//
// Instrucciones:
// 1. Crea una función llamada filtrarMayores que reciba dos parámetros:
//    - Un array de números
//    - Un número límite
// 2. Crea un array vacío para los números filtrados
// 3. Recorre el array original con un bucle for
// 4. Si el número actual es mayor al límite, agrégalo al nuevo array
// 5. Retorna el array con los números filtrados
//
// Ejemplo:
// filtrarMayores([1,5,10,15], 7) // debe retornar [10,15]
//
// Pista: Compara cada número con el límite usando el operador >

// Escribe tu código aquí:

function filtrarMayores(numeros, limite){
    var filtrados=[];
    for(var i=0;i<numeros.length; i++){
        if(numeros[i]>limite){
            filtrados.push(numeros[i]);
        }
    }
    return filtrados;
}