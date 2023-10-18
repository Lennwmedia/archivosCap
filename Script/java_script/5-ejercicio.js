'use strict'

var suma = 0;
var contador = 0;


do {
var numero = parseInt(prompt("Qué número falta CR_", 0));

    if(isNaN(numero)) {
        numero = 0;

    }else if(numero <= 0) {
        suma = suma + contador
    }
}while(numero <= 7)

alert("La suma de tu intentos fueron: "+ suma);
alert("Tu promedio al acertar fue: "+ (suma/contador));