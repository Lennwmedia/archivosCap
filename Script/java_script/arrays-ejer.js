'use strict'

/* 
1. Que pida seis numeros por pantalla y lo meta en un array.
2.Mostrar el array entero (todos sus elementos en el cuerpo y en la consola).
3. Ordenarlo y mostrarlo.
4. Invertir su orden y mostrarlo.
5. Mostrar cuantos elementos tiene el arrays.
6. Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice.
*/


// Pedir seir numeros
    let listArrays = [];
    let numbers;

 do {
    numbers = parseInt(prompt('Introduce 6 numeros, cancela con 0', 1));
    listArrays.push(numbers);
    
    
}while(numbers != 0);

// Mostrar Array por consola
listArrays.pop();
console.log(listArrays);

// Mostrar Array por pantalla
document.write('<h2>Contenido del Array</h2>');
document.write('<ul>');
listArrays.forEach((elemento, indice) => {
    document.write('<li>'+indice+' - '+elemento+'</li>');
})
document.write('</ul>');

// Ordenar Array
function orden() {
    document.write(listArrays.sort(function(a ,b) {return a-b}));
    document.write('<br>');

}

orden();

// Orden reverso del Array
function desorden() {
    document.write('<br>');
    document.write(listArrays.reverse(function(a ,b) {return b-a}));
    document.write('<br>');
    
}

desorden();

// Display de los elementos que contiene el array
function list() {
    console.log(listArrays.length);
    document.write('<br>');
    document.write('<strong>'+listArrays.length+' elementos contiene el Array</strong>');
    document.write('<br>');
}

list();

// Busqueda de un numero introducido por el usuario
function search() {
    numbers = parseInt(prompt('Qué numero deseas buscar?', 1));

    let busqueda = listArrays.find(numero => numero == numbers); {
    document.write('<br>');
    document.write(busqueda+' el elemento del array que estabas buscando');
    document.write('<br>');
    console.log(busqueda+' el elemento del array que estabas buscando');
    }

    let busquedaDeIndice = listArrays.findIndex(numero => numero == numbers); {
    document.write('<br>');
    document.write(busquedaDeIndice+' el indice del array que estabas buscando');
    console.log(busquedaDeIndice+' el indice del array que estabas buscando');
    }
}
search()