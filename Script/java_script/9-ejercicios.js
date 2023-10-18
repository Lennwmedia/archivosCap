'use strict'

var numero = parseInt(prompt("Introduce cualquier numero: ", 0));

while(numero <= 0 || isNaN(numero)) {

    numero = parseInt(prompt("Introduce cualquier numero: ", 0));
}
    if(numero%2 == 0) {
        alert(numero+" es par");
    }else {
        alert(numero+" es impar");
    } 

