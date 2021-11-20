/**
*   @file cuenta | ejercicio9
*   @description Clase Cuenta
*   @version 1.0.0
*   @author Rubén Torres <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
*   @license GPL-3.0-or-later
*   Ref: https://spdx.org/licenses/
*
*   Ref JSDoc: https://jsdoc.app/
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