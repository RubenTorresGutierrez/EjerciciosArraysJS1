/**
*   @file ejercicio11
*   @description Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
*       a) La cantidad de valores negativos ingresados.
*       b) La cantidad de valores positivos ingresados.
*       c) La cantidad de múltiplos de 15.
*       d) El valor acumulado de los números ingresados que son pares.
*   @version 1.0.0
*   @author Rubén Torres <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
*   @license GPL-3.0-or-later
*   Ref: https://spdx.org/licenses/
*
*   Ref JSDoc: https://jsdoc.app/
*/
'use strict'

let numeros = [];
let negativos = 0;
let positivos = 0;
let multiplos = 0;
let pares = 0;

for(let i = 0; i < 10; i++)
    numeros.push(prompt(`Introduce el número ${i+1}:`));

console.log('~~~~~~~ Cantidad Números Negativos ~~~~~~~');
for(let i=0;i<numeros.length;i++)
    if(numeros[i]<0)
        negativos++;
console.log(negativos);

console.log('~~~~~~~ Cantidad Números Positivos ~~~~~~~');
for(let i=0;i<numeros.length;i++)
    if(numeros[i]>=0)
        positivomayor++;
console.log(positivomayor);

console.log('~~~~~~~ Cantidad Múltiplos de 15 ~~~~~~~');
for(let i=0;i<numeros.length;i++)
    if(numeros[i]%15==0)
        multiplos++;
console.log(multiplos);

console.log('~~~~~~~ Valor Números Pares ~~~~~~~');
for(let i=0;i<numeros.length;i++)
    if(numeros[i]%2==0)
        pares += numeros[i];
console.log(pares);