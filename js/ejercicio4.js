// Ejercicio 4: Función Día de la Semana
// Instrucciones:
// 1. Crea una función llamada `diaDeLaSemana` que tome un número del 1 al 7.
// 2. Usa un switch para retornar el nombre del día correspondiente en minúsculas.
// 3. Por ejemplo: 
//    - diaDeLaSemana(1) debe retornar "lunes"
//    - diaDeLaSemana(7) debe retornar "domingo"
// 4. Si el número no está entre 1 y 7, retorna "día inválido"

// Escribe tu código aquí debajo:

function diaDeLaSemana(dia) {
    switch (dia) {
        case 1:
            return "lunes";
        case 2:
            return "martes";
        case 3:
            return "miércoles";
        case 4:
            return "jueves";
        case 5:
            return "viernes";
        case 6:
            return "sábado";
        case 7:
            return "domingo";
        default:
            return "día inválido";
    }
}