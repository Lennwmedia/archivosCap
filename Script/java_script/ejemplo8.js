'use strict'

var numero1 = parseInt(prompt("Introduce cualquier numero: ", 0));
var numero2 = parseInt(prompt("Introduce cualquier numero: ", 0));

var resultado = "La suma de los numeros es: "+(numero1+numero2)+"<br>"+
                "La resta de los numeros es: "+(numero1-numero2)+"<br>"+
                "La multiplicación de los numeros es: "+(numero1*numero2)+"<br>"+
                "La división de los numeros es: "+(numero1/numero2)+"<br>";

var resultadoCMD = "La suma de los numeros es: "+(numero1+numero2)+"\n"+
                "La resta de los numeros es: "+(numero1-numero2)+"\n"+
                "La multiplicación de los numeros es: "+(numero1*numero2)+"\n"+
                "La división de los numeros es: "+(numero1/numero2)+"\n";

while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)) {
    numero1 = parseInt(prompt("Introduce cualquier numero: ", 0));
    numero2 = parseInt(prompt("Introduce cualquier numero: ", 0));
}
console.log(resultadoCMD);
alert(resultadoCMD);
document.write(resultado);