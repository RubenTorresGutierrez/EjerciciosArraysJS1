/**
*   @file ejercicio6
*   @description En una empresa trabajan 5 empleados cuyos sueldos oscilan entre $100 y $500,
*   realizar un programa que lea los sueldos que cobra cada empleado e informe
*   cuántos empleados cobran entre $100 y $300 y cuántos cobran más de $300.
*   Además el programa deberá informar el importe que gasta la empresa en sueldos
*   al personal.
*   @version 1.0.0
*   @author Rubén Torres <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
*   @license GPL-3.0-or-later
*   Ref: https://spdx.org/licenses/
*
*   Ref JSDoc: https://jsdoc.app/
*/
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
