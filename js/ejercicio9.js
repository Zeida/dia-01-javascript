// Ejercicio 9: Buscar palabras
// 
// Descripción:
// Crea una función que busque todas las palabras de un array que contienen
// una letra específica.
//
// Instrucciones:
// 1. Crea una función llamada buscarPalabras que reciba:
//    - Un array de palabras
//    - Una letra a buscar
// 2. Crea un array vacío para las palabras encontradas
// 3. Recorre el array de palabras con un bucle for
// 4. Si la palabra actual contiene la letra (usa includes), agrégala al nuevo array
// 5. Retorna el array con las palabras encontradas
//
// Ejemplo:
// buscarPalabras(['casa', 'perro', 'gato'], 'a') // debe retornar ['casa', 'gato']
//
// Pista: palabra.includes(letra) te dice si la palabra contiene la letra

// Escribe tu código aquí:

function buscarPalabras(palabras, letra){
    var encontradas = [];
    for(var i=0; i<palabras.length;i++){
        if(palabras[i].includes(letra)){
            encontradas.push(palabras[i]);
        }
    }
    return encontradas;
}