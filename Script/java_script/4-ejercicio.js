'use strict'

var numero1 = parseInt(prompt("Blade Runner es del año:", 0));
var numero2 = parseInt(prompt("CiberPunk es del año:", 0));

while(isNaN(numero1) || isNaN(numero2) || numero1 <= 0 || numero2 <= 0){

    numero1 = parseInt(prompt("Blade Runner es del año:", 0));
    numero2 = parseInt(prompt("CiberPunk es del año:", 0));
}

    if(numero1 == 2049 && numero2 == 2077) {
        alert("Has acertado");

    }else if(numero1 < 2049 || numero2 < 2077) {
        alert("Cerca");

    }else if(numero1 > 2049 || numero2 > 2077) {
        alert("Tan cerca, pero a la misma vez tan lejos");
    }




/*if(numero1 < numero2) {
    alert("");
}*/