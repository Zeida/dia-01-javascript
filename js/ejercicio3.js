// Ejercicio 3: Encontrar usuario por email
// 
// Descripción:
// Dado un array de usuarios y un email, usa find para encontrar
// el primer usuario que coincida con ese email.
//
// Instrucciones:
// 1. Crea una función llamada buscarPorEmail que reciba:
//    - Un array de usuarios (objetos con nombre y email)
//    - Un email a buscar
// 2. Usa find para encontrar el usuario con el email especificado
// 3. Retorna el usuario encontrado o undefined si no existe
//
// Ejemplo:
// const usuarios = [
//   {nombre: 'Ana', email: 'ana@mail.com'},
//   {nombre: 'Juan', email: 'juan@mail.com'}
// ];
// buscarPorEmail(usuarios, 'ana@mail.com')
// Debe retornar: {nombre: 'Ana', email: 'ana@mail.com'}

// Escribe tu código aquí:

function buscarPorEmail(usuarios, email){
    const emailEncontrado = usuarios.find(usuario => usuario.email === email);
    return emailEncontrado;
}