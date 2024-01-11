'use strict'


    window.addEventListener('load', () =>  {

    

    /*
    let string = document.getElementById('myText');

    string.style.background = 'green';
    string.style.color = 'white';
    string.style.borderRadius = '5px';
    string.style.fontSize = '14px';

    let todosLosParrafos = document.getElementsByTagName('p');
    let cajaDeElementos = document.querySelector('#divfather');
    let hr = document.createElement('hr');

    for(let valor in todosLosParrafos) {
        if (typeof todosLosParrafos[valor].textContent == 'string') {
           let parrafo = document.createElement('p');
        let text = document.createTextNode(todosLosParrafos[valor].textContent);
        parrafo.append(text);
        cajaDeElementos.append(parrafo); 
        }
        cajaDeElementos.append(hr);
        
    }


let parRed = document.getElementsByClassName('yellow');

for(let parrafo in parRed) {
    if(parRed[parrafo].className == 'yellow') {
        parRed[parrafo].style.background = 'green';
    }
}
  
let boton = document.querySelector('#boton');

function cambiarColor() {
    console.log('Me has dado click');
    let color = boton.style.background;

    if(color == 'green') {
        boton.style.background = 'blue';
    }else {
        boton.style.background = 'green';
    }

    return true;
};

boton.addEventListener('click', () => {
    cambiarColor();
});

boton.addEventListener('mouseover', () => {
    
    boton.style.background = 'red';

});

boton.addEventListener('mouseout', () => {
    
    boton.style.background = 'grey';

});

let input = document.querySelector('#inp-name');

input.addEventListener('focus', () => {
    console.log('[focus]Has entrado al input');
});

input.addEventListener('blur', () => {
    console.log('[blur]Has salido del input');
});

input.addEventListener('keydown', (evento) => {
    console.log('[keydown]Estás presionando', String.fromCharCode(evento.keyCode));
});

input.addEventListener('keypress', (evento) => {
    console.log('[keypress]Has introducido', String.fromCharCode(evento.keyCode));
});

input.addEventListener('keyup', (evento) => {
    console.log('[keyup]Has dejado de presionar la tecla', String.fromCharCode(evento.keyCode));
});

function intervalo() {

    let time = setInterval(() => {

        console.log('Ejecutando Intervalo de tiempo');
    
        let title = document.querySelector('h1');
    
        if (title.style.fontSize == '50px') {
            title.style.fontSize = '30px';
        }
            else {  
            title.style.fontSize = '50px';
        };
    
    }, 1000);

    return time;
};

let time = intervalo();

let detener = document.querySelector('#stop');

detener.addEventListener('click', () => {
    clearInterval(time);
    alert('Has detenido el Intervalo');
});

let renundar = document.querySelector('#next');

renundar.addEventListener('click', () => {
    alert('Has renundado el Intervalo');
    intervalo();
});
*/  


/*function calculadora(num1, num2, suma, multiplicacion) {
    let sumar = num1 + num2;

    suma(sumar);
    multiplicacion(sumar);

    return sumar;
}

calculadora(2, 3, (dato) => {
    console.log('La suma de los parametros es: ', dato);
},
(dato) => {
    console.log('La multiplicación de los parametros es: ', dato*5);
}
    
    
    );
   

    confirm('Las personas ganadoras son: Jose, Lenn, Gus, Ryan');

  let text = 'Jose, Lenn, Gus, Ryan';
   
    let texto = prompt('Te acuerdas del primer nombre? escribelo');

    let busqueda = text.startsWith(texto);

console.log(busqueda); 

let nombres = ['*', '**', '***', '****', '*****', '******'];
*/
//let busqueda = parseInt(prompt('Introduce tu numero de busqueda'));

/*
document.write('<h1>Listado de nombres</h2>');

document.write('<ul>');
for(let i = 0; i < nombres.length; i++) {
    document.write('<li>'+nombres[i]+'</li>');
    console.log(nombres[i])
};
document.write('</ul>');



nombres.forEach((elemento,indice, arre) => {
    console.log(indice+' - '+elemento)
    console.log(arre)
})


let peliculas = new Array('Soy Leyenda', 'LEGEND', 'Spiderman', 'Batman');

let elemento;
do{
       elemento = prompt('Introduce una pelicula');
        peliculas.push(elemento);

}while(elemento != 'listo');

peliculas.pop();
console.log(peliculas);

for(let art in nombres) {
    console.log(nombres[art])


//let busqueda = nombres.findIndex( simbolo => simbolo == '*****');



let numbers = new Array(12, 42, 45, 56, 67, 86);

let busqueda = numbers.some( num => num <= 30)

console.log(busqueda);}*/


/*
1 - Pida 6 numeros porpantalla y los meta a un arrays.
2 - Mostrar todos los elementos del arrays, en el cuerpo de la pagina y en la consola.
3 - Orderlo y mostrarlo.
4 - Invertir su orden y mostrarlo.
5 - Mostrar cuantos elementos tiene el array
6 - Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice.
*/

/*
    let listArrays = [];
    let numbers;

    do{
        numbers = parseInt(prompt('Introduce 6 numeros'));
        listArrays.push(numbers);

    }while (numbers != 0);
        


listArrays.pop();
console.log(listArrays);

document.write('<h1>Lista de numeros</h1>');
document.write('<ul>');
listArrays.forEach((elemento, indice) => {

document.write('<li>'+indice+' - '+elemento+'</li>');
})
document.write('</ul>');

function ordenar() {
    document.write(listArrays.sort((a, b) => a - b));
    document.write('<br>')

}
ordenar()

function desordenar() {
    document.write('<br>')
    document.write(listArrays.reverse((a, b) => b - a));
    document.write('<br>')

}

desordenar()
*/

/*
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
    document.querySelector('#i-edad').style.display = 'none';
}

 box.style.display = 'block';

let p_nombre = document.querySelector('#p_name span');
let p_apellidos = document.querySelector('#p_apell span');
let p_edad = document.querySelector('#p_edad span');

p_nombre.innerHTML = nombre;
p_apellidos.innerHTML = apellidos;
p_edad.innerHTML = edad;

let datos_usuarios = [nombre, apellidos, edad];

let indice;
for(indice in datos_usuarios) {
    let parrafo = document.createElement('p');
    parrafo.append(datos_usuarios[indice]);
    box.append(parrafo);
}


});
*/

let pelicula = {
    titulo: 'Blade Runner 2049',
    año: 2017,
    lugar: 'Estados Unidos'
};

let peliculaPrime = {
    titulo: 'Siempre a tu lado: Hackico',
    año: 2009,
    lugar: 'Estados Unidos'
}

let peliculas = {
    titulo: 'Barbie',
    año: 2023,
    lugar: 'Estados Unidos',
    pelicula,
    peliculaPrime
}

let coleccion = [pelicula, peliculaPrime, peliculas];

let cajaDePeliculas = document.querySelector('#caja_de_peliculas');
let indice;
for( indice in peliculas) {
    let p = document.createElement('p');
    p.append(peliculas[indice].titulo+' - '+peliculas[indice].año);
    cajaDePeliculas.append(p);
}

console.log(coleccion);

});
