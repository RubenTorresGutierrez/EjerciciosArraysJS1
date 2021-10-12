/*  ejercicio.js
    Ejercicios Arrays JS 1 | Ejercicio 4
    Autor: Rubén Torres Gutiérrez <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
    Licencia: GPL v3 o superior
    Año: 2021
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