// Ejercicio 7: Formatear emails
// 
// Descripción:
// Dado un array de emails, usa map para formatearlos todos en minúsculas
// y verificar que contengan '@'.
//
// Instrucciones:
// 1. Crea una función llamada formatearEmails que reciba un array de emails
// 2. Usa map para transformar cada email:
//    - Convertir a minúsculas
//    - Agregar '@gmail.com' si no contiene '@'
// 3. Retorna el nuevo array con los emails formateados
//
// Ejemplo:
// formatearEmails(['JUAN', 'ana@mail.com']) 
// Debe retornar: ['juan@gmail.com', 'ana@mail.com']

// Escribe tu código aquí:

function formatearEmails (emails){
    const transformados = emails.map(email => {
        if(!email.includes("@")){
            return email.concat("@gmail.com").toLowerCase();
        }else{
            return email.toLowerCase();  
        }
    });
    return transformados;
}