'use strict'

var numero1 = parseInt(prompt("Introduce cualquier numero: ", 0));
var numero2 = parseInt(prompt("Introduce cualquier numero: ", 0));

document.write("<h2>De "+numero1+" a "+numero2+" estan todos los numeros");
for(var i = numero1; i <= numero2; i++) {
    document.write(i+"<br>")
}