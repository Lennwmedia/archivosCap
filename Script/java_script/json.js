'use strict'

window.addEventListener('load', () => {

    var pelicula = {
        titulo: 'The Batman',
        año: 2022,
        pais: 'Estados Unidos de America'
    };

    var peliculas = [
        {titulo: 'La liga de la Justicia', año: 2022, pais: 'USA'},
        pelicula
    ];


    var listaDePeliculas = document.querySelector('#film');
;
    var indice;
    for(indice in peliculas) {
        var parrafo = document.createElement('p');
        parrafo.append(peliculas[indice].titulo+' - '+peliculas[indice].año);
        listaDePeliculas.append(parrafo)
    }


});


