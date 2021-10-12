/*  ejercicio.js
    Ejercicios Arrays JS 1 | Ejercicio 7
    Autor: Rubén Torres Gutiérrez <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
    Licencia: GPL v3 o superior
    Año: 2021
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