/**
*   @file turno | ejercicio12
*   @description Clase Turno
*   @version 1.0.0
*   @author Rubén Torres <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
*   @license GPL-3.0-or-later
*   Ref: https://spdx.org/licenses/
*
*   Ref JSDoc: https://jsdoc.app/
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