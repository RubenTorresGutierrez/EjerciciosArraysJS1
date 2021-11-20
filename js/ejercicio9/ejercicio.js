/**
*   @file ejercicio9
*   @description Realizar el siguiente ejercicio utilizando Arrays asociativo.
*   En un banco se procesan datos de las cuentas corrientes de sus clientes. De cada cuenta
*   corriente se conoce: número de cuenta, nombre del cliente y saldo actual. El ingreso de
*   datos debe finalizar al ingresar un valor negativo en el número de cuenta.
*   Se pide confeccionar un programa que lea los datos de las cuentas corrientes e informe:
*       a) De cada cuenta: número de cuenta, nombre del cliente y estado de la cuenta según su saldo, sabiendo que:
*           Estado de la cuenta         'Acreedor' si el saldo es >0.
*                                       'Deudor' si el saldo es <0.
*                                       'Nulo' si el saldo es =0.
*       b) La suma total de los saldos acreedores.
*   @version 1.0.0
*   @author Rubén Torres <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
*   @license GPL-3.0-or-later
*   Ref: https://spdx.org/licenses/
*
*   Ref JSDoc: https://jsdoc.app/
*/
'use strict'

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
