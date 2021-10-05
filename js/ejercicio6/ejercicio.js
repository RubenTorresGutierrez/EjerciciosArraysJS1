//Rubén Torres

import {Empleado} from './empleado.js';

class Empresa {

  constructor() {
    this.gasto = 0;
    this.empleados = [];
    this.crearEmpleados(5);
    window.onload = this.iniciar.bind(this);
  }

  iniciar(){
    this.leerSueldos();
    this.dividirEntre(300);
    this.getGasto();
  }

  crearEmpleados(num){
    for (let i = 0; i < num; i++)
      this.empleados.push(new Empleado());
  }

  leerSueldos(){ 
    for(let i=0;i<this.empleados.length;i++){
      this.empleados[i].sueldo = parseInt(prompt(`Sueldo empleado ${i+1}: (Entre 100 y 500)`));
      if(isNaN(this.empleados[i].sueldo) || this.empleados[i].sueldo > 500 || this.empleados[i].sueldo < 100){
        alert('No se ha introducido un valor válido.');
        i--;
      }
    } 
  }

  dividirEntre(max){
    let mayor = 0;
    let menor = 0;

    for (let empleado of this.empleados)
      if (empleado.sueldo>max)
        mayor++;
      else menor++;
    console.log(`Hay ${mayor} empleados que cobran más de $300`);
    console.log(`Hay ${menor} empleados que cobran hasta $300`);
  }

  getGasto(){
    for (let empleado of this.empleados)
      this.gasto += empleado.sueldo;
    console.log(`El gasto total es de $${this.gasto}.`);
  }

}

new Empresa();
