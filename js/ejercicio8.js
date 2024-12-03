// Ejercicio 8: Filtrar tareas completadas
// 
// Descripción:
// Dado un array de tareas, usa filter para obtener las tareas completadas
// y map para formatear su visualización.
//
// Instrucciones:
// 1. Crea una función llamada obtenerTareasCompletadas que reciba un array de tareas
//    (cada tarea tiene título y completada)
// 2. Usa filter para obtener solo las tareas completadas
// 3. Usa map para formatear cada tarea como "Tarea: {título}"
// 4. Retorna el array final
//
// Ejemplo:
// const tareas = [
//   {titulo: 'Estudiar JS', completada: true},
//   {titulo: 'Hacer ejercicio', completada: false}
// ];
// Escribe tu código aquí:

function obtenerTareasCompletadas (tareas){
    const completadas = tareas.filter(tarea => tarea.completada === true);
    const completadasFormateadas = completadas.map(completa=> 'Tarea: ' + completa.titulo);
    return completadasFormateadas; 
}