// Ejercicio 2: Contar vocales
// 
// Descripción:
// Escribe una función que cuente cuántas vocales (a, e, i, o, u) hay en una palabra.
//
// Instrucciones:
// 1. Crea una función llamada contarVocales que reciba un string como parámetro
// 2. Usa un bucle for para recorrer cada letra del string
// 3. Para cada letra, verifica si es una vocal
// 4. Cuenta el total de vocales encontradas
// 5. Retorna el número total de vocales
//
// Ejemplos:
// contarVocales('murcielago') // debe retornar 5
// contarVocales('casa') // debe retornar 2
//
// Pista: Puedes usar string.toLowerCase() para convertir a minúsculas y comparar más fácilmente

// Escribe tu código aquí:

function contarVocales(palabra){
    palabra=palabra.toLowerCase();
    var contador=0;
    for(var i=0; i<=palabra.length; i++){
        if( palabra.charAt(i)==='a' || palabra.charAt(i)==='e' || palabra.charAt(i)==='i' || palabra.charAt(i)==='o' || palabra.charAt(i)==='u'){
            contador++;
        }
    }
    return contador;
}