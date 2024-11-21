// Ejercicio 9: Objeto con Arrays
// Instrucciones:
// 1. Crea una función llamada `crearAlumno` que reciba dos parámetros:
//    - nombre (string)
//    - notas (array de números)
// 2. La función debe retornar un objeto con dos propiedades:
//    - nombre: el nombre recibido
//    - notas: el array de notas recibido
//
// Ejemplo: crearAlumno("Juan", [8,9,7]) debe retornar {nombre: "Juan", notas: [8,9,7]}

// Escribe tu código aquí debajo:

function crearAlumno(nombre, notas) {
    var listadoAlumnos = {};
    listadoAlumnos.nombre = nombre;
    listadoAlumnos.notas = notas;
    return listadoAlumnos;
}
