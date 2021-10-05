//Rubén Torres

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