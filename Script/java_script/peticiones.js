'use strict'

window.addEventListener('load', () => {

    var user_div = document.querySelector('#usuarios');
    var user_young = document.querySelector('#young');
    var user_two = document.querySelector('#user2');
    var user_janet = document.querySelector('#janet');
    var div_user = document.querySelector('#listUser');

    userDisplay()
        .then(data => data.json())
        .then(users => {
            userList(users.data);

            return getInfo();

        })
        .then(data => {
            user_young.innerHTML = data;

            return ultimoUsuario();
        })
        .then(data => {
            user_two.innerHTML = data;

            return listaDeUsuarios();
        })
        .then(data => data.json())
        .then(user => {
            displayJanet(user.data); 
            
            return userJanet();
            
        })
        .then(data => {
            div_user.innerHTML = data;
             return getInfo();
        })
        .catch(error => {
            console.log(error)
        })
      ;

    function userDisplay() {
        return fetch('https://reqres.in/api/users');
    };

    function userJanet() {
        return fetch('https://reqres.in/api/users/2');
    }

    function getInfo() {
        var young = {
            nombre: 'Lenn',
            apellido: 'Gosling',
            gmail: 'lenn19@gmail.com'
        };

        return new Promise((resolve, reject) => {
            var young_lenn = '';

            setTimeout(() => {
                young_lenn = JSON.stringify(young);

                if (typeof young_lenn != 'string' || young_lenn == '') return reject('error');

                return resolve(young_lenn);
            }, 3000);

        })
    }

    function ultimoUsuario() {
        var lastUser = {
            nombre: 'Sonny',
            apellido: 'More',
            gmail: 'skrillex@gmail.es'
        };

        return new Promise((result, project) => {
            var user2 = '';

            setTimeout(() => {
                user2 = JSON.stringify(lastUser);

                if (typeof user2 != 'string' || user2 == '') return project('error data');

                return result(user2)
            }, 4000)
        })
    }

    function listaDeUsuarios() {
        var lista = {
            nombre: 'Brad',
            apellido: 'Pitt',
            gmail: 'bpitt60@gmail.com'
        }

        var lista2 = {
            nombre: 'George',
            apellido: 'Miller',
            gmail: 'sushitrash@gmail.com'
        }

        var listaGL = [
            { nombre: 'Jake', apellido: 'Gyllenhaal', gmail: 'jakeg@gmail.com' },
            lista, lista2
        ];

        return new Promise((reset, spam) => {
            var nuevaPromesa = '';

            setTimeout(() => {
                nuevaPromesa = JSON.stringify(listaGL);
            
 
            if (typeof nuevaPromesa != 'string' || nuevaPromesa == '') return spam('error in the span');

            return reset(nuevaPromesa);
        }, 1000)
        })

    };

    function userList(usuarios) {
        usuarios.map((user, i) => {
            let nombre = document.createElement('h3');
            nombre.innerHTML = i + '. ' + user.first_name + ' ' + user.last_name;
            user_div.appendChild(nombre);

            document.querySelector('.load').style.display = 'none';

        });
    };

    function displayJanet(user) {
        let nombre = document.createElement('h3');
        let avatar = document.createElement('img');

        nombre.innerHTML = user.first_name + ' ' + user.last_name;
        avatar.src = user.avatar;

        user_janet.appendChild(nombre);
        user_janet.appendChild(avatar)

        document.querySelector('#janet .load').style.display = 'none';

    };

}); 


try {
    var name = 'Lenn';
    console.log(nsme)
}catch(error) {
    alert('Tienes un error')
}