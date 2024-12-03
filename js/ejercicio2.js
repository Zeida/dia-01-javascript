// Ejercicio 2: Filtrar productos por precio
// 
// Descripción:
// Dado un array de productos y un precio máximo, usa filter para obtener
// los productos que cuestan menos que el precio dado.
//
// Instrucciones:
// 1. Crea una función llamada filtrarPorPrecio que reciba:
//    - Un array de productos (objetos con nombre y precio)
//    - Un precio máximo (número)
// 2. Usa filter para obtener solo los productos con precio menor al máximo
// 3. Retorna el nuevo array con los productos filtrados
//
// Ejemplo:
// const productos = [
//   {nombre: 'Camisa', precio: 20},
//   {nombre: 'Pantalón', precio: 50},
//   {nombre: 'Zapatos', precio: 80}
// ];
// filtrarPorPrecio(productos, 60) 
// Debe retornar: [{nombre: 'Camisa', precio: 20}, {nombre: 'Pantalón', precio: 50}]

// Escribe tu código aquí:

function filtrarPorPrecio(productos, precioMaximo){
    return productos.filter(producto => producto.precio<precioMaximo);
}