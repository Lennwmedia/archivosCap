'use strict'

var numero1 = parseInt(prompt("Cuántos años tienes?", 0));
var numero2 = parseInt(prompt("Qué día es tu cumpleaños", 0));

while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)) {
    numero1 = parseInt(prompt("Cuántos años tienes?", 0));
    numero2 = parseInt(prompt("Qué día es tu cumpleaños", 0));
}

if(numero1 == numero2){
    alert("Tienes la misma edad del día de tu cumple");

}else if (numero1 < numero2) {  
    alert("El día de tu cumple supera tu edad");

}else if(numero2 < numero1) {
    alert("Tu edad supera el día de tu cumple");
}else{
    alert("Escribe los números correctamente")};