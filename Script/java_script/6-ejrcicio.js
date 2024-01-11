'use strict'
/*

var numero1 = parseInt(prompt("Introduce un numero: ",0));
var numero2 = parseInt(prompt("Introduce otro numero: ",0));

document.write("<h2>De "+numero1+" hasta "+numero2+" estan estos numeros</h2>");
for( var i = numero1; i <= numero2; i++) {
    document.write(i+"<br>");
}*/

let saldo = 1000;

function banco(resto = 100) {
    console.log(`Sera restado de tu cuenta un impuesto de ${resto}C$`)
    saldo = saldo - resto;
    return saldo;
}

banco();

