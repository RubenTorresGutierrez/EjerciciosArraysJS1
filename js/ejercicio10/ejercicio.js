/**
*   @file ejercicio10
*   @description Se realizó un censo provincial y se desea procesar la información obtenida en
*   dicho censo. De cada una de las personas censadas se tiene la siguiente
*   información: número de documento, edad y sexo ('femenino' o 'masculino').
*   Se pide confeccionar un programa que lea los datos de cada persona censada (para
*   finalizar ingresar el valor cero en el número de documento) e informar:
*       a) Cantidad total de personas censadas.
*       b) Cantidad de varones.
*       c) Cantidad de mujeres.
*       d) Cantidad de varones cuya edad varía entre 16 y 65 años.
*   @version 1.0.0
*   @author Rubén Torres <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
*   @license GPL-3.0-or-later
*   Ref: https://spdx.org/licenses/
*
*   Ref JSDoc: https://jsdoc.app/
*/
'use strict'

// IMPORTACIONES
import { Persona } from "./persona.js";

let personas = [];
let varones = 0;
let varonEdad = 0;
let mujeres = 0;

do{

    let numDocumento = prompt('Ingrese el número de documento:');
    let edad = prompt('Ingrese la edad:');
    let sexo = toUpperCase(prompt('Ingrese el sexo (f, m):'));
    personas.push(new Persona(numDocumento, edad, sexo));
    var seguir = prompt('¿Desea seguir? (1: Si  |  0: No)');

}while(seguir != 0);

for(let i = 0; i < personas.length; i++)
    if(personas[i].sexo == 'M'){
        varones++;
        if(personas[i].edad >= 16 && personas[i].edad <= 65)
            varonEdad++;
    }

mujeres = personas.length - varones;

alert(`Hay ${personas.length} personas censadas.`);
alert(`Hay ${varones} varones.`);
alert(`Hay ${mujeres} mujeres.`);
alert(`Hay ${varonEdad} varones cuya edad varía entre 16 y 65 años.`);
