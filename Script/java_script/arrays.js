'use strict'

// Arrays, arreglos, matrices 

var nombre = "José";
var nombres = ["Skrillex", 'Joji', 'The weenknd', 'Tripped Redd', 'Slipknot', 'Maroon 5', 'Coldplay'];

//console.log(nombres.length) => es para ver la cantidad de elementos que dentro de un array-
console.log(nombres[1]);

  document.write("<h2>Estos son mis artistas favoritos");
document.write('<ul>')
/*for(var i = 0; i < nombres.length; i++) {
  
    document.write("<li>"+nombres[i]+"</li>");
}

nombres.forEach((elementos, indice) => {
    document.write("<li>"+indice+' - '+elementos+"</li>");
});*/

for( let top in nombres) {
  document.write('<li>'+nombres[top]+'</li>');
}
document.write('</ul>');
/*
para encontrar un elemento en el array
var busqueda = nombres.find(top => top == 'Joji');

console.log(busqueda);*/

/*
para encontrar el indice
var busqueda = nombres.findIndex(top => top == 'Maroon 5');

console.log(busqueda);*/

let numeros = [10, 32, 42, 50, 80];

var busqueda = numeros.some(top => top == 80);

console.log(busqueda);