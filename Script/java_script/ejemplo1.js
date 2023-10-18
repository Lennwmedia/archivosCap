'use strict'

 var numero1 = parseInt(prompt("Escribe un número:", 0));
 var numero2 = parseInt(prompt("Escribe otro número:", 0));

 while( numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)) {
    numero1 = parseInt(prompt("Escribe un número:", 0));
    numero2 = parseInt(prompt("Escribe otro número:", 0));
 }

 if(numero1 > numero2) {
    alert("El mayor es: "+numero1);
    alert("El menor es: "+numero2);

 }else if(numero2 > numero1) {
    alert("El mayor es: "+numero2);
    alert("El menor es: "+numero1);

 }else if(numero1 == numero2) {
    alert(numero1+" es igual a "+numero2);
 }else {
    alert("Escribe bien el número")
 }