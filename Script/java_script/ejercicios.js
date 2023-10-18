'use strict'

/*var numero1 = parseInt(prompt("Introduce un número", 0));
var numero2 = parseInt(prompt("Introduce otro número", 0));

while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)) {
    numero1 = parseInt(prompt("Introduce un número", 0));
    numero2 = parseInt(prompt("Introduce otro número", 0));
}

if(numero1 == numero2) {
    alert("Los números son iguales");

}else if(numero1 > numero2) {
    alert("El número mayor es: "+numero1);
    alert("El número menor es: "+numero2);

}else if(numero2 > numero1) {
    alert("El número mayor es: "+numero2);
    alert("El número menor es: "+numero1);

}else {
    alert("Introdusca bien los números");
}

var edad = parseInt(prompt('Introduce tu edad: ', 1));

if(edad >= 18) {
    alert('Ya podeis conducir');
}else if(edad < 18 ) {
    alert('No teneis una edad adecuada para coducir');
}*/

do {
    var nota = parseInt(prompt("¿Cuál es tu valoración del 1 al 10", 1));
    if (nota <= 3) {
        document.write("Muy deficiente");

    }else if(nota <= 5) {
        document.write("Insuficiente");

    }else if(nota <= 6) {
        document.write("Suficiente");

    }else if(nota <= 7) {
        document.write("Bien");

    }else if(nota <= 9) {
        document.write("Notable");

    }else if(nota <= 10) {
        document.write("Sobresaliente");
        
        
    }else {
        document.write("Introduce un numero del 1 al 10");
        nota = parseInt(prompt("¿Cuál es tu valoración del 1 al 10", 1));
    }
}while(isNaN(nota >= 11))
 



