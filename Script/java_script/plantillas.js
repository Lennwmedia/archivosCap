'use strict'

var nombre = prompt('Introduce tu nombre');
var apellido = prompt('Introduce tus apellidos');

var resultado = `
    <h2>Este es tu nombre completo?</h2>
    <h3>Tu nombre es: ${nombre}</h3>
    <h3>Tus apellidos son: ${apellido}</h3>
`;

document.write(resultado);