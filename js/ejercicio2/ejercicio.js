/*  ejercicio.js
    Ejercicios Arrays JS 1 | Ejercicio 2
    Autor: Rubén Torres Gutiérrez <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
    Licencia: GPL v3 o superior
    Año: 2021
*/

//Importaciones
import {Alumno} from './alumno.js';

class App{
    constructor(){
        this.alumnos = [];
        this.crearAlumnos(10);
        window.onload = this.iniciar.bind(this);
    }
    iniciar(){
        this.introducirNotas();
        this.visualizarMayorMenor(7);
    }
    crearAlumnos(numalumnos){
        for(let i=0;i<numalumnos;i++)
            this.alumnos.push(new Alumno());
    }
    introducirNotas(){
        for(let i=0;i<this.alumnos.length;i++)
            do{    
                this.alumnos[i].nota = parseInt(prompt('Introduce la nota del alumno ' + (i+1) + ':'));
            }while(isNaN(this.alumnos[i].nota));
    }
    visualizarMayorMenor(nota){

        //Variables
        let menor = 0;
        let mayor = 0;

        for(let i=0;i<this.alumnos.length;i++)
            if(this.alumnos[i].nota<7)
                menor++;
            else mayor++;
        
        console.log(`Hay ${mayor} alumnos que tienen un 7 o más.`);
        console.log(`Hay ${menor} alumnos que tienen menos de un 7.`);

    }
}

new App();