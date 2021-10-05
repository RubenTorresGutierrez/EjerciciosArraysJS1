//Rubén Torres
'use strict'

//Funciones
function sueldoAleatorio(){
  return Math.floor((Math.random() * 500) + 100);
}

//Variables
let empleados = new Array();
let gasto = 0;
let menor = 0;
let mayor = 0;

//Main
for (let i = 0; i < 5; i++)
  empleados[i]=sueldoAleatorio();

for (let i = 0; i < empleados.length; i++) {
  gasto+=empleados[i];
  if (empleados[i]>300)
    mayor++;
  else menor++;
}

document.write(`Hay ${mayor} empleados que cobran MÁS de $300<br/>`);
document.write(`Hay ${menor} empleados que cobran MENOS de $300<br/>`);
document.write(`La empresa gasta $${gasto} en sueldos<br/>`);
