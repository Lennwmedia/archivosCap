'use strict'

window.addEventListener('load', () => {

    let formulario = document.querySelector('#formulario');
let box = document.querySelector('.dashed');

box.style.display = 'none';

formulario.addEventListener('submit', () => {
    console.log('Guardando información...');

   

let nombre = document.querySelector('#nombre').value;
let apellidos = document.querySelector('#apellido').value;
let edad = document.querySelector('#edad').value;

console.log(nombre, apellidos, edad);

if(nombre.trim() == null || nombre.trim().length == 0) {
    document.querySelector('#nombre').style.background = '#E64848'
    alert('Introduce un nombre');
    document.querySelector('#i-name').innerHTML = 'Introduce tu nombre en el input'
    return false;

} else{
    document.querySelector('#i-name').style.display = 'none';
}

if(apellidos.trim() == null || apellidos.trim().length == 0) {
    document.querySelector('#apellido').style.background = '#E64848';
    alert('Introduce los apellidos de nuevo');
    document.querySelector('#i-apell').innerHTML = 'Introduce tus apellidos en el input'
    return false;

} else {
    document.querySelector('#i-apell').style.display = 'none';
}

if(edad == null || edad <= 0 || isNaN(edad)) {
    document.querySelector('#edad').style.background = '#E64848'
    alert('Introduce tu edad');
    document.querySelector('#i-edad').innerHTML = 'Introduce tu edad en el input'
    return false;

} else {
    document.querySelector('#edad').style.background = 'none'
    document.querySelector('#i-edad').style.display = 'none';
}

 box.style.display = 'block';

let p_nombre = document.querySelector('#p_name span');
let p_apellidos = document.querySelector('#p_apell span');
let p_edad = document.querySelector('#p_edad span');

p_nombre.innerHTML = nombre;
p_apellidos.innerHTML = apellidos;
p_edad.innerHTML = edad;
/*
let datos_usuarios = [nombre, apellidos, edad];

let indice;
for(indice in datos_usuarios) {
    let parrafo = document.createElement('p');
    parrafo.append(datos_usuarios[indice]);
    box.append(parrafo);
}
*/

});

});