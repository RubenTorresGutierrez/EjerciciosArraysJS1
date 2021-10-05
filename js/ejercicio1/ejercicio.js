//Rubén Torres
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