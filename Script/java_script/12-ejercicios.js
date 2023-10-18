'use strict'

function listadoFrutas(fruta1, fruta2, ...otras_frutas) {
    console.log('Esta es la fruta 1: ', fruta1);
    console.log('Esta es la fruta 2: ', fruta2);
    console.log(otras_frutas);

}

listadoFrutas('Manzana', 'Cebollin', 'Mango', 'Melon', 'Coco', 'Sandia');

var frutas = ['Manazana', 'Cebollin'];

listadoFrutas(...frutas, 'Mango', 'Melon', 'Coco', 'Sandia');
