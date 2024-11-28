// Ejercicio 1: Sumar números pares
// 
// Descripción:
// Escribe una función llamada sumarPares() que sume todos los números pares 
// desde 2 hasta 100 (inclusive).
//
// Instrucciones:
// 1. Crea una función llamada sumarPares
// 2. Usa un bucle for que vaya desde 2 hasta 100
// 3. Dentro del bucle, verifica si cada número es par usando numero % 2 === 0
// 4. Si el número es par, súmalo a un acumulador
// 5. Al final, retorna la suma total
//
// Ejemplo del resultado esperado:
// sumarPares() // debe retornar 2550 (que es la suma de 2+4+6+...+98+100)
//
// Pista: Necesitarás una variable para ir acumulando la suma

// Escribe tu código aquí:

function sumarPares(){
    var acumulador=0;
    for(var i=2; i<=100; i++){
        if(i % 2 === 0){
            acumulador+=i;
        }
    }
    return acumulador;
}