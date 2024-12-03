// Ejercicio 9: Procesar pedidos
// 
// Descripción:
// Dado un array de pedidos, usa filter y map para obtener los pedidos entregados
// y formatearlos para su visualización.
//
// Instrucciones:
// 1. Crea una función llamada formatearPedidosEntregados que reciba un array de pedidos
//    (cada pedido tiene id, monto y entregado)
// 2. Usa filter para quedarte solo con los pedidos entregados
// 3. Usa map para formatear cada pedido como "Pedido #ID: $monto"
// 4. Retorna el array de pedidos formateados
//
// Ejemplo:
// const pedidos = [
//   {id: 1, monto: 100, entregado: true},
//   {id: 2, monto: 50, entregado: false}
// ];
// formatearPedidosEntregados(pedidos) // debe retornar ['Pedido #1: $100']

// Escribe tu código aquí:

function formatearPedidosEntregados(pedidos){
    const entregados = pedidos.filter(pedido => pedido.entregado === true);
    const entregadosFormateados = entregados.map(entregado => `Pedido #${entregado.id}: $${entregado.monto}`);
    return entregadosFormateados;
}