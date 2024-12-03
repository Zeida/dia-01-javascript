// Ejercicio 6: Verificar permisos de usuarios
// 
// Descripción:
// Dado un array de usuarios, usa every para verificar si todos
// tienen el rol de 'admin'.
//
// Instrucciones:
// 1. Crea una función llamada todosAdmin que reciba un array de usuarios
//    (cada usuario tiene nombre y rol)
// 2. Usa every para verificar si todos los usuarios son admin
// 3. Retorna true si todos son admin, false si alguno no lo es
//
// Ejemplo:
// const usuarios = [
//   {nombre: 'Ana', rol: 'admin'},
//   {nombre: 'Juan', rol: 'admin'}
// ];
// todosAdmin(usuarios) // debe retornar true

// Escribe tu código aquí:

function todosAdmin (usuarios){
    const sonAdmin = usuarios.every(usuario => usuario.rol === 'admin');
    return sonAdmin;
}