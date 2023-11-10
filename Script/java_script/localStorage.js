'use strict'

window.addEventListener('load', () => {
/*
        if(typeof(Storage)) {
            confirm('LocalStorage disponible');
        }else {
            confirm('No compatible LocalStorage');
        }
 */

        // Crear una nueva clave y valor en el localstorage o guradar datos
        localStorage.setItem('title', 'The Batman');

        // Recuperar elementos del localstorage
        document.querySelector('#film').innerHTML = localStorage.getItem('title');

        // Guardar objetos
        var name = {
            name: 'Lenn',
            web: 'lennwmedia.com.es',
            email: 'lenn18@gmail.com'
        };

        localStorage.setItem('usuario', JSON.stringify(name));

        // Recuperar objetos
        var userjs = JSON.parse(localStorage.getItem('usuario'));
        console.log(userjs)

        document.querySelector('#dato').append(userjs.name+' - '+userjs.email);

});