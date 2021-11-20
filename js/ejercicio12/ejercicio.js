/**
*   @file ejercicio12
*   @description Se cuenta con la siguiente información:
*   Las edades de 5 estudiantes del turno mañana.
*   Las edades de 6 estudiantes del turno tarde.
*   Las edades de 11 estudiantes del turno noche.
*   
*   Las edades de cada estudiante deben ingresarse por teclado.
*       a) Obtener el promedio de las edades de cada turno (tres promedios).
*       b) Imprimir dichos promedios (promedio de cada turno).
*       c) Mostrar por pantalla un mensaje que indique cual de los tres turnos tiene un promedio de edades mayor.
*   @version 1.0.0
*   @author Rubén Torres <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
*   @license GPL-3.0-or-later
*   Ref: https://spdx.org/licenses/
*
*   Ref JSDoc: https://jsdoc.app/
*/

import { Turno } from "./turno.js";

class App{
    constructor(){
        this.turnos = [];
        this.turnos.push(new Turno('mañana', 5));
        this.turnos.push(new Turno('tarde', 6));
        this.turnos.push(new Turno('noche', 11));
        window.onload = this.iniciar.bind(this);
    }
    iniciar(){
        this.edadEstudiantes();
        this.promedioEdades();
        this.mostrarPromedios();
        this.mayorPromedio();
    }
    edadEstudiantes(){
        for(let i=0;i<this.turnos.length;i++)
            for(let j=0;j<this.turnos[i].estudiantes.length;j++)
                do{
                    this.turnos[i].estudiantes[j].edad = parseInt(prompt(`Introduce la edad del alumno ${j+1} del turno de ${this.turnos[i].nombre}:`));
                }while(isNaN(this.turnos[i].estudiantes[j].edad) || this.turnos[i].estudiantes[j].edad > 100 || this.turnos[i].estudiantes[j].edad < 2);
    }
    promedioEdades(){
        for(let i=0;i<this.turnos.length;i++){
            let promedio=0;
            for(let j=0;j<this.turnos[i].estudiantes.length;j++)
                promedio += this.turnos[i].estudiantes[i].edad;
            promedio /= this.turnos[i].estudiantes.length;
            this.turnos[i].promedio = promedio;
        }
    }
    mostrarPromedios(){
        console.log('Promedios:');
        for(let i=0;i<this.turnos.length;i++)
            console.log('Turno ' + this.turnos[i].nombre + ': ' + this.turnos[i].promedio);
    }
    mayorPromedio(){
        let mayor = 0;
        for(let i=0;i<this.turnos.length;i++)
            if(this.turnos[i].promedio > mayor)
                mayor = i;
        console.log(`El turno de ${this.turnos[mayor].nombre} tiene el promedio de edades mayor.`);
    }
}

new App();