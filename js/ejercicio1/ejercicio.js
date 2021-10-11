/*  ejercicio.js
    Ejercicios Arrays JS 1 | Ejercicio 1
    Autor: Rubén Torres Gutiérrez <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
    Licencia: GPL v3 o superior
    Año: 2021
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