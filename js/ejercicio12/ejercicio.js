/*  ejercicio.js
    Ejercicios Arrays JS 1 | Ejercicio 12
    Autor: Rubén Torres Gutiérrez <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
    Licencia: GPL v3 o superior
    Año: 2021
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