// Ejercicio 9: Pide al usuario que ingrese una palabra y verifica si es "JavaScript".
// Instrucciones:
// 1. Usa `prompt()` para pedir al usuario que ingrese una palabra y guarda el resultado en una variable llamada `palabra`.
// 2. Usa un `if` para comprobar si el valor de `palabra` es exactamente igual a "JavaScript".
// 3. Si la palabra es "JavaScript", muestra un mensaje con alert() que diga "¡Correcto!".
// 4. Si la palabra no es "JavaScript", muestra un mensaje que diga "Intenta de nuevo".
// 5. No necesitas hacer nada adicional; el sistema validará si `palabra` fue comparada correctamente y el mensaje mostrado es adecuado.

// Escribe tu código aquí debajo:


var palabra = prompt ('Adivina que estoy pensando😏');

if (palabra === 'Javascript') {
    alert('Correctoooo 🟢');
} else {
    alert('Fallaste, te toca intentar de nuevo 💪🏼');
    palabra = prompt ('Adivina que estoy pensando😏');
}