// Ejercicio 8: Función Nota a Texto
// Instrucciones:
// 1. Crea una función llamada `notaTexto` que tome un número del 0 al 10
// 2. Usa switch para retornar:
//    - "Sobresaliente" si la nota es 10
//    - "Excelente" si la nota es 9
//    - "Notable" si la nota es 7 u 8
//    - "Aprobado" si la nota es 5 o 6
//    - "Suspendido" si la nota es menor que 5
// 3. Por ejemplo: notaTexto(7) debe retornar "Notable"

// Escribe tu código aquí debajo:


function notaTexto(nota) {
    if (nota <= 10 && nota > 0) {
        switch (nota) {
            case 10: return "Sobresaliente";
            case 9: return "Excelente";
            case 8: return "Notable";
            case 7: return "Notable";
            case 6: return "Aprobado";
            default: return "Suspendido";
        }
    }
}