/*  ejercicio.js
    Ejercicios Arrays JS 1 | Ejercicio 8
    Autor: Rubén Torres Gutiérrez <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
    Licencia: GPL v3 o superior
    Año: 2021
*/
'use strict'

let vector = [5, 12, 3, 7, 8];

console.log(`Hay ${comporbarImpares(vector)} números impares`);
console.log(`Hay ${comporbarPares(vector)} números pares`);

//Funciones
function comporbarImpares(vector){

    //Variables
    let impares = 0;

    for(let i=0; i<vector.length; i++)
        if(vector[i] % 2 != 0)
            impares++;
    return impares;

}

function comporbarPares(vector){

    //Variables
    let pares = 0;

    for(let i=0; i<vector.length; i++)
        if(vector[i] % 2 == 0)
            pares++;
    return pares;

}