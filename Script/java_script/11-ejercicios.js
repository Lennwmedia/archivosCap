'use strict'

//function señal(user) {
    
    //console.log('Este es una señal de: '+user);
    /*document.write('Así es soy un texto');
    alert('estas seguro');
    confirm('Confirma si estas seguro');
    
    
    return "Soy un señal"+'\n'+
    'Señalare cualquier cosa';
}*/

// console.log(señal());
//señal('Atras');
//señal('Adelante');

function porPantalla (numero1, numero2) {
    document.write('Suma: '+(numero1+numero2)+'<br>');
    document.write('Resta: '+(numero1-numero2)+'<br>');
    document.write('Multiplicación: '+(numero1*numero2)+'<br>');
    document.write('División: '+(numero1/numero2)+'<br>');
    document.write('*****************************'+'<br>');
}

function porConsola (numero1, numero2) {
    console.log('Suma: '+(numero1+numero2));
    console.log('Resta: '+(numero1-numero2));
    console.log('Multiplicación: '+(numero1*numero2));
    console.log('División: '+(numero1/numero2));
    console.log('*****************************');
}

function calculadora (numero1, numero2, mostrar = true) {

    if(mostrar == true) {
        porPantalla(numero1, numero2);
    }else {
        porConsola(numero1, numero2);
    }

}

calculadora(2, 2);
calculadora(2, 4, false);
calculadora(12, 2);
calculadora(2, 5);
calculadora(6, 4);
calculadora(3, 7);
calculadora(3, 4, false);
calculadora(7, 4, false);
calculadora(5, 4, false);
calculadora(6, 4, false);



   /* for(var i = 1; i <= 12; i++) {
        console.log(i);
        calculadora(i, 4);
    }*/

