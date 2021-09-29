//Rubén Torres

import {Empleado} from './empleado.js';

class Empleado {
  constructor() {
    this.empleados = [];
    this.crearEMpleados(5);
    window.onload = this.iniciar.bind(this);
  }
  iniciar(){
    this.leerSueldos();
    console.log(this.contarEntre(100, 300));
    console.log(this.contarMasDe(300));
    console.log(this.getGastoTotal());
  }
}

new Empleado();
