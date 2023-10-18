'use strict'

var numero1 = parseInt(prompt("Introduce un numero: ",0));
var numero2 = parseInt(prompt("Introduce otro numero: ",0));

while(numero1 < numero2) {
    numero1++;

    if(numero1%2 != 0) {
        console.log("El "+numero1+" es impar");
    }
} 