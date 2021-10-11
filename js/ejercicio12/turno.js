/*  turno.js
    Ejercicios Arrays JS 1 | Ejercicio 12
    Autor: Rubén Torres Gutiérrez <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
    Licencia: GPL v3 o superior
    Año: 2021
*/

import { Estudiante } from "./estudiante.js";

export class Turno{
    constructor(nombre, numestudiantes){
        this.nombre = nombre;
        this.promedio;
        this.estudiantes = [];
        this.crearEstudiantes(numestudiantes);
    }
    crearEstudiantes(numestudiantes){
        for(let i=0;i<numestudiantes;i++)
            this.estudiantes.push(new Estudiante());
    }
}