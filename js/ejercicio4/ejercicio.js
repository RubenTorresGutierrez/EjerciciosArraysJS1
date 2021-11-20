/**
*   @file ejercicio4
*   @description Realizar un programa que pida la carga de dos vectores numéricos. Obtener la suma de los dos vectores, dicho resultado guardarlo en un tercer vector del mismo tamaño. Sumar componente a componente.
*   @version 1.0.0
*   @author Rubén Torres <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
*   @license GPL-3.0-or-later
*   Ref: https://spdx.org/licenses/
*
*   Ref JSDoc: https://jsdoc.app/
*/
'use strict'

let vector1 = rellenarVector(5);
let vector2 = rellenarVector(5);
let vector3 = sumarVectores(vector1, vector2);
visualizarVector(vector3);

//Funciones
function rellenarVector(longitud){

    //Variables
    let vector = [];

    for(let i=0; i<longitud; i++)
        do{
            vector[i] = parseInt(prompt(`Introduce el número ${i+1}:`));
        }while(vector[i] == '' || vector[i] == null || isNaN(vector[i]));
    return vector;

}

function sumarVectores(vector1, vector2){

    //Variables
    let vector3 = [];

    for(let i=0; i<vector1.length; i++)
        vector3.push(vector1[i] + vector2[i]);
    return vector3;

}

function visualizarVector(vector){

    for(let i=0; i<vector.length; i++)
        console.log(vector[i]);

}