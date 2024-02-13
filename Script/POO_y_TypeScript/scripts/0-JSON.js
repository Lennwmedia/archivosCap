'use strict'

let cellphone = {
    marca: 'Samsung',
    linea: 'Galaxy',
    color: 'Azul',
    precio: '$'+Math.round(Math.random()*1000),
    cambiarColor: ((nuevo) => {
        cellphone.color = nuevo;

        console.log(cellphone)
    })
}

cellphone.cambiarColor('Verde')
