'use strict'

var numero = parseInt(prompt("Introduce cualquier numero: ", 1));

for(var c = 1; c <= 10; c++){
    document.write("<h2>La tabla del "+c+"</h2>");
        for(var i = 1; i <= 10; i++) {
        document.write(i+" x "+c+" = "+(i*c)+"<br>");
        }
}