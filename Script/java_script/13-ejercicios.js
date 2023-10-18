'use strict'

function sumame(numero1, numero2, sumaTotal, sumaPordos) {
    var suma = numero1 + numero2;

    sumaTotal(suma);
    sumaPordos(suma);

    return suma;
}
//Las flachas sustituyen function, es decir, ('') => es igual a function()
sumame(2, 3, dato => {
    console.log('la suma total es: ', dato);
}, 
dato => {
    console.log('La suma por dos es: ', (dato*2));
}); 
