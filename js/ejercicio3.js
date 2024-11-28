// Ejercicio 3: Números impares en rango
// 
// Descripción:
// Crea una función que devuelva un array con todos los números impares 
// que hay entre dos números dados (inclusive).
//
// Instrucciones:
// 1. Crea una función llamada numerosImpares que reciba dos parámetros: inicio y fin
// 2. Crea un array vacío para almacenar los números impares
// 3. Usa un bucle for desde inicio hasta fin (inclusive)
// 4. Si un número es impar (numero % 2 !== 0), agrégalo al array
// 5. Retorna el array con todos los números impares encontrados
//
// Ejemplo:
// numerosImpares(1, 5) // debe retornar [1,3,5]
//
// Pista: Usa array.push() para agregar elementos al array

// Escribe tu código aquí:

function numerosImpares(inicio, fin){
    var arrayNumeros=[];
    for(var i=inicio; i<=fin; i++){
        if(i%2!==0){
            arrayNumeros.push(i);
        }
    }
    return arrayNumeros

}