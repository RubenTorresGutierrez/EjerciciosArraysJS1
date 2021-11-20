/**
*   @file ejercicio1
*   @description Desarrollar un programa que solicite la carga de 10 números e imprima la suma de los últimos 5 valores ingresados.
*   @version 1.0.0
*   @author Rubén Torres <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
*   @license GPL-3.0-or-later
*   Ref: https://spdx.org/licenses/
*
*   Ref JSDoc: https://jsdoc.app/
*/
'use strict'

//Variables
let veces = 10;
let numeros = [];

for(let i=0;i<veces;i++)
    do{
        numeros[i] = prompt('Introduce el número ' + (i+1) + ':');
    }while(isNaN(numeros[i]));

for(let i=numeros.length/2;i<veces;i++)
    console.log(numeros[i]);