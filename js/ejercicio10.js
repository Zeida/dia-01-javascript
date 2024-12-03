// Ejercicio 10: Gestión de biblioteca
// 
// Descripción:
// Implementa un sistema simple de biblioteca que permita:
// - Filtrar libros por disponibilidad
// - Buscar un libro por título
// - Verificar si todos los libros tienen autor
// - Calcular el total de libros prestados
//
// Instrucciones:
// 1. Crea una función llamada gestionarBiblioteca que reciba:
//    - Un array de libros (cada libro tiene título, autor, disponible y prestados)
//    - Una operación a realizar ('disponibles', 'buscar', 'verificarAutores', 'totalPrestados')
//    - Un valor adicional para la búsqueda (opcional)
// 2. Implementa cada operación usando los métodos de array correspondientes
// 3. Retorna el resultado según la operación
//
// Ejemplo:
// const libros = [
//   {titulo: 'JS', autor: 'Juan', disponible: true, prestados: 5},
//   {titulo: 'HTML', autor: 'Ana', disponible: false, prestados: 8}
// ];
// gestionarBiblioteca(libros, 'disponibles') // retorna libros disponibles
// gestionarBiblioteca(libros, 'buscar', 'JS') // retorna el libro 'JS'
// gestionarBiblioteca(libros, 'verificarAutores') // retorna true
// gestionarBiblioteca(libros, 'totalPrestados') // retorna 13

// Escribe tu código aquí:

function gestionarBiblioteca(libros, operacion, filtro){
    switch (operacion){
        case 'buscar':
            return buscar(libros, filtro);
        case 'disponibles':
            return disponibles(libros);
        case 'verificarAutores':
            return verificarAutores(libros);   
        case 'totalPrestados':
            return totalPrestados(libros);
        default:
            return "No se ha especificado correctamente la función";
    }
}

function buscar (libros, filtro){
    return libros.filter(libro => libro.titulo.includes(filtro));
}

function disponibles (libros){
    return  libros.filter(libro => libro.disponible===true); 
}

function verificarAutores(libros){
    return libros.every(libro => libro.autor !== "");
}

function totalPrestados(libros){
    let total=0;
    libros.forEach(libro => total+=libro.prestados);
    return total;
}