'use strict'

window.addEventListener('load', () => {
    function portal(url) {
        window.location.href = url;
    }

    function ventana(url) {
        window.open(url, '', "width=400, height=300")
    }
    //console.log(window.innerHeight)

    var boton = document.querySelector('#boton');

    function cambiarDeColor() {
        console.log('Veces presionado')

        var fondo = boton.style.background;

        if (fondo == 'aqua') {
            boton.style.background = 'red';
        } else {
            boton.style.background = 'aqua'
        }
        return true;

    }

    var boton = document.querySelector('#boton');

    boton.addEventListener('click', function () {
        cambiarDeColor();
        console.log(this)
        this.style.border = '10px solid blue'
    })

    //Cuando el cursor entra al boton
    boton.addEventListener('mouseover', function () {
        boton.style.background = 'yellow'
    })

    //Cuando el cursor sale del boton
    boton.addEventListener('mouseout', function () {
        boton.style.background = 'blue'
    })


    var input = document.querySelector('#inp-name');

    //focus
    input.addEventListener('focus', function () {
        console.log('[Focus] Has entrado');
    })

    //blur
    input.addEventListener('blur', function () {
        console.log('[blur] Has salido');
    })

    //keydown
    input.addEventListener('keydown', function (event) {
        console.log('[keydown] Estas pulsando esta tecla', String.fromCharCode(event.keyCode));
    })

    //Keypress
    input.addEventListener('keypress', function (event) {
        console.log('[keypress] tecla presiona', String.fromCharCode(event.keyCode));
    })

    //keyup
    input.addEventListener('keyup', function (event) {
        console.log('[keyup] tecla soltada', String.fromCharCode(event.keyCode));
    })

    //Timers

    function intervalo() {

        var time = setInterval(() => {

            console.log('Set interval ejecutando');

            var title = document.querySelector("#title");
            if (title.style.fontSize == '50px') {
                title.style.fontSize = '30px'
            } else {
                title.style.fontSize = '50px'
            }
        }, 1000);

        return time;
    };

    var time = intervalo();

    var stop = document.querySelector('#stop');

    stop.addEventListener('click', () => {
        alert('Has detenido el bucle');
        clearInterval(time);
    })

    var start = document.querySelector('#next');

    start.addEventListener('click', () => {
        alert('El bucle está en marcha');
        intervalo();
    })

});

