/*  ejercicio.js
    Ejercicios Arrays JS 1 | Ejercicio 9
    Autor: Rubén Torres Gutiérrez <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
    Licencia: GPL v3 o superior
    Año: 2021
*/

//Importaciones
import { Cuenta } from "./cuenta.js";

class Banco{

    constructor(){
        this.cuentas = [];
        window.onload = this.iniciar.bind(this);
    }
    iniciar(){
        this.agregarCuenta();
        this.mostrarCuentas();
    }
    agregarCuenta(){

        //Variables
        let numcuenta;
        let nombre;
        let saldo;
        let i=1;

        do{
            do{
                numcuenta = parseInt(prompt('Introduce el número de cuenta de la cuenta corriente número ' + i + ':'));
            }while(isNaN(numcuenta) || numcuenta == '' || numcuenta == null);
            if(numcuenta >= 0){
                do{
                    nombre = prompt('Introduce el nombre del cliente de la cuenta corriente número ' + i + ':');
                }while(!isNaN(nombre) || nombre == '' || nombre == null);
                do{
                    saldo = parseInt(prompt('Introduce el saldo de la cuenta corriente número ' + i + ':'));
                }while(isNaN(saldo) || saldo == null);
                this.cuentas.push(new Cuenta(numcuenta, nombre, saldo));
                i++;
            }
        }while(numcuenta >= 0 || this.cuentas.length < 1);

    }
    mostrarCuentas(){

        //Variables
        let estado;

        for(let i=0; i<this.cuentas.length; i++){
            console.log(`----- CUENTA CORRIENTE ${i+1} -----`);
            console.log(`Número de Cuenta: ${this.cuentas[i].datos['numcuenta']}`);
            console.log(`Nombre del cliente: ${this.cuentas[i].datos['nombre']}`);
            console.log(`Estado de la cuenta: ${this.cuentas[i].datos['estado']}`);
            console.log();
        }
    }

}

new Banco();
