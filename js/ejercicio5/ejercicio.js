/*  ejercicio.js
    Ejercicios Arrays JS 1 | Ejercicio 5
    Autor: Rubén Torres Gutiérrez <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
    Licencia: GPL v3 o superior
    Año: 2021
*/
'use strict'

let vector = rellenarVector(10);
console.log(`El total del valor acumulado es ${valorAcumuladoTodos(vector)}`);
console.log(`El total del valor acumulado de los elementos mayores de 36 es ${valorAcumuladoMayor(vector, 36)}`);
console.log(`El total de elementos mayores a 50 es ${valorCantidadMayor(vector, 50)}`);

//Funciones
function rellenarVector(longitud){

    //Variables
    let vector = [];

    for(let i=0; i<longitud; i++)
        do{
            vector[i] = parseInt(prompt(`Introduce el número ${i+1}:`));
        }while(isNaN(vector[i]) || vector[i] == '' || vector[i] == null);
    return vector;

}

function valorAcumuladoTodos(vector){

    //Variables
    let total = 0;

    for(let i=0; i<vector.length; i++)
        total += vector[i];
    return total;

}

function valorAcumuladoMayor(vector, mayor){

    //Variables
    let total = 0;

    for(let i=0; i<vector.length; i++)
        if(vector[i] > mayor)
            total += vector[i];
    return total;

}

function valorCantidadMayor(vector, mayor){

    //Variables
    let total = 0;

    for(let i=0; i<vector.length; i++)
        if(vector[i] > mayor)
            total++;
    return total;

}