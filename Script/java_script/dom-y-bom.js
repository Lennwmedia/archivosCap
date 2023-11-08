'use strict'

window.addEventListener('load', () => {

    var formulario = document.querySelector('#formulario');
    var boxes = document.querySelector('.dashed');
    boxes.style.display = 'none';

    formulario.addEventListener('submit', () => {
        console.log('Ejecutando Codigo');

        var nombre = document.querySelector('#name').value;
        var apellidos = document.querySelector('#apellidos').value;
        var edad = parseInt(document.querySelector('#age').value);

        if(nombre.trim() == null || nombre.trim().length == 0) {
            alert('El nombre es invalido');
            document.querySelector('#error-nombre').innerHTML = 'El nombre no es valido';
            return false;
        }else {
            document.querySelector('#error-nombre').style.display = 'none';
        }

        if(apellidos.trim() == null || apellidos.trim().length == 0) {
            alert('Los apellidos son invalidos');
            document.querySelector('#error-apellido').innerHTML = 'Los apellidos no son validos'
            return false;
        }else {
            document.querySelector('#error-apellido').style.display = 'none';
        }

        if(edad == null || nombre <= 0 || isNaN(edad)) {
            alert('La edad es invalida');
            document.querySelector('#error-edad').innerHTML = 'La edad no es valida'
            return false;
        }else {
            document.querySelector('#error-edad').style.display = 'none';
        }


        boxes.style.display = 'block';
        
        var p_nombre = document.querySelector("#p-nombres span");
        var p_apellidos = document.querySelector("#p-apellidos span");
        var p_edad = document.querySelector("#p-edad span");

                p_nombre.innerHTML = nombre;
                p_apellidos.innerHTML = apellidos;
                p_edad.innerHTML = edad;

       /* 
        var datos = [nombre, apellidos, edad];

        var indice;

        for(indice in datos) {
            var parrafo = document.createElement('p');
            parrafo.append(datos[indice]);
            boxes.append(parrafo)
        }
*/

        
    })

})