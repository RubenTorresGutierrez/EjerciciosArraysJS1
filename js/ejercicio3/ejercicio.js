/**
*   @file ejercicio3
*   @description Se ingresan un conjunto de 5 alturas de personas por teclado. Mostrar la altura promedio de las personas.
*   @version 1.0.0
*   @author Rubén Torres <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
*   @license GPL-3.0-or-later
*   Ref: https://spdx.org/licenses/
*
*   Ref JSDoc: https://jsdoc.app/
*/

//Importaciones
import { Persona } from "./persona.js";

class App{

    constructor(){
        this.personas = [];
        this.anadirPersonas(5);
        window.onload = this.iniciar.bind(this);
    }
    iniciar(){
        this.anadirAlturas();
        this.alturaPromedio();
    }
    anadirPersonas(numpersonas){
        for(let i=0;i<numpersonas;i++)
            this.personas.push(new Persona());
    }
    anadirAlturas(){
        for(let i=0;i<this.personas.length;i++)
            do{
                this.personas[i].altura = parseFloat(prompt(`Introduce la altura de la persona ${i+1} (en metros)`));
            }while(isNaN(this.personas[i].altura) || this.personas[i].altura > 3 || this.personas[i].altura < 0);
    }
    alturaPromedio(){
        
        //Variables
        let alturas = 0;

        for(let i=0;i<this.personas.length;i++)
            alturas += this.personas[i].altura;
        console.log(alturas /= this.personas.length);


    }

}

new App();