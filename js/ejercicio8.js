// Ejercicio 8: Sumar números
// 
// Descripción:
// Crea una función que sume todos los números de un array usando un bucle for normal.
//
// Instrucciones:
// 1. Crea una función llamada sumarNumeros que reciba un array de números
// 2. Crea una variable suma inicializada en 0
// 3. Usa un bucle for para recorrer el array
// 4. En cada iteración, suma el número actual a la variable suma
// 5. Retorna el total
//
// Ejemplo:
// sumarNumeros([1,2,3,4,5]) // debe retornar 15
//
// Pista: Usa array[i] para acceder a cada número dentro del bucle for

function sumarNumeros(numeros){
    var suma=0;
    for(var i=0; i<numeros.length;i++){
        suma+=numeros[i];
    }
    return suma;
}