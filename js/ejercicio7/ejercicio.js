/**
*   @file ejercicio7
*   @description Realizar un programa que permita cargar dos listas de 3 valores cada una.
*   Informar con un mensaje cual de las dos listas tiene un valor acumulado mayor
*   (mensajes 'Lista 1 mayor', 'Lista 2 mayor', 'Listas iguales')
*   Tener en cuenta que puede haber dos o más estructuras repetitivas en un
*   algoritmo.
*   @version 1.0.0
*   @author Rubén Torres <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
*   @license GPL-3.0-or-later
*   Ref: https://spdx.org/licenses/
*
*   Ref JSDoc: https://jsdoc.app/
*/
'use strict'

let lista1 = [20, 40, 5];
let lista2 = [36, 34, -5];
let resultado = comprobarMayor(lista1, lista2);

if(!resultado)
    console.log('Listas iguales');
else
    console.log(`Lista ${resultado} mayor.`);

//Funciones
function comprobarMayor(lista1, lista2){

    //Variables
    let suma1 = valorAcumulado(lista1);
    let suma2 = valorAcumulado(lista2);

    if(suma1 > suma2)
        return 1;
    else 
        if (suma2 > suma1)
            return 2;
        return false;

}

function valorAcumulado(lista){

    //Variables
    let suma = 0;

    for(let i=0; i<lista.length; i++)
        suma += lista[i];
    return suma;

}