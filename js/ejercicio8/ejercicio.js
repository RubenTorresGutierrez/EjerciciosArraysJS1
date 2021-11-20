/**
*   @file ejercicio8
*   @description Desarrollar un programa que permita cargar 5 números enteros y luego nos
*   informe cuántos valores fueron pares y cuántos impares.
*   Emplear el operador "%" en la condición de la estructura condicional.
*   if (valor%2==0)
*   El operador "%" retorna el resto de la división valor / 2. Por ejemplo: 12 % 2, retorna 0;
*   13 % 2, retorna 1, porque el resto de dividir 13 en 2 es 1.
*   @version 1.0.0
*   @author Rubén Torres <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
*   @license GPL-3.0-or-later
*   Ref: https://spdx.org/licenses/
*
*   Ref JSDoc: https://jsdoc.app/
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