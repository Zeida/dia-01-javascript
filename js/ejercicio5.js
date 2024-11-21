// Ejercicio 5: Modificar Objeto
// Instrucciones:
// 1. Crea una función llamada `cambiarNombre` que reciba dos parámetros:
//    - objeto (un objeto que tiene una propiedad 'nombre')
//    - nuevoNombre (string)
// 2. La función debe modificar la propiedad 'nombre' del objeto con el nuevoNombre
// 3. Retorna el objeto modificado
//
// Ejemplo: cambiarNombre({nombre: "Juan"}, "Pedro") debe retornar {nombre: "Pedro"}

// Escribe tu código aquí debajo:
function cambiarNombre(anteriorNombre, nuevoNombre){
    anteriorNombre.nombre=nuevoNombre;
    return anteriorNombre;
}
