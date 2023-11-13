'use strict'

window.addEventListener('load', () => {

    var tiempo = setInterval(() => {
        console.log('El intervalo de tiempo ha comenzado');
        var encabezado = document.querySelector('#title');

        if(encabezado.style.fontSize == '50px') {
            encabezado.style.fontSize = '30px';
        }else {
            encabezado.style.fontSize = '50px';
        }


    }, 500)

    var stop = document.querySelector('#stop');

   


});