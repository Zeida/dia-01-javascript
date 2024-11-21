// Ejercicio 3: Sumar Array
// Instrucciones:
// 1. Crea una función llamada `sumarArray` que reciba un array de números
// 2. Usa un bucle for para recorrer el array
// 3. Suma todos los números del array
// 4. Retorna el total
//
// Ejemplo: sumarArray([1,2,3]) debe retornar 6

// Escribe tu código aquí debajo:
function sumarArray(numeros) {
    var suma = 0 ;
    for (let index = 0; index < numeros.length; index++) {
        suma += numeros[index];

    }
    return suma;
}
