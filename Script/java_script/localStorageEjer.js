'use strict'

window.addEventListener('load', () => {

    var formulario = document.querySelector('#formFilm');

    formulario.addEventListener('submit', () => {

        var pelicula = document.querySelector('#add-film').value;

        if (pelicula.length >= 1) {

            localStorage.setItem(pelicula, pelicula)
        };
    });

    var ul = document.querySelector('#list-movies');

    for (var i in localStorage) {

        console.log(localStorage[i]);

        if (typeof localStorage[i] == 'string') {

            var li = document.createElement('li');
            li.append(localStorage[i]);
            ul.append(li);
        }
    };

    var formularioB = document.querySelector('#formDelFilm');

    formularioB.addEventListener('submit', () => {

        var pelicula = document.querySelector('#del-film').value;

        if (pelicula.length >= 1) {

            localStorage.removeItem(pelicula)
        };
    });

});