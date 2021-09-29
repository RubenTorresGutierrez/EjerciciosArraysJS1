//Rubén Torres

export class Empleado {
  constructor() {

  }
  crearEmpleados(num){
    for (let i = 0; i < num; i++) {
      this.empleado.push(new Empleado());
    }
  }
  leerSueldos(){
    for (let empleado of this.empleado) {
      empleado.sueldo = Math.floor((Math.random() * 500) + 100);
      //empleado.sueldo = parseInt(prompt(`Sueldo empleado ${i}:`));
      if(isNaN(empleado.sueldo)){
        alert('No se ha introducido un valor válido.');
        i--;
      }
    }
  }
  informarEntre(min, max){
    for (let empleado of this.empleado) {
      gasto+=empleados[i];
      if (empleados[i]>300)
        mayor++;
      else menor++;
    }
  }
}
