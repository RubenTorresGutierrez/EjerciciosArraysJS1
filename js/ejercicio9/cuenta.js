/*  cuenta.js
    Ejercicios Arrays JS 1 | Ejercicio 9
    Autor: Rubén Torres Gutiérrez <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
    Licencia: GPL v3 o superior
    Año: 2021
*/

export class Cuenta{
    
    constructor(numcuenta, nombre, saldo){
        this.datos = [];
        this.datos['numcuenta'] = numcuenta;
        this.datos['nombre'] = nombre;
        this.datos['saldo'] = saldo;
        this.datos['estado'];
        this.definirEstadoCuenta();
    }
    definirEstadoCuenta(){
        if(this.datos['saldo'] > 0)
            this.datos['estado'] = 'Acreedor';
            else if(this.datos['saldo'] < 0)
                this.datos['estado'] = 'Deudor';
                else this.datos['estado'] = 'Nulo';
    }

}