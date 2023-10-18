'use strict'

//Arrays multiple

var generoMusical = ['Jazz', 'R&B', 'DUSTEP', 'Rock', 'Trap'];
var cantantesFAV = ['Joji', 'Lil Peep', 'Tripped Redd', 'The weeknd', 'Cobey Tayler', 'Sonny Moore'];

var galeria = [generoMusical, cantantesFAV];

//Escoger el array y el elemento dentro
/*console.log(galeria[0][4]);
console.log(galeria[1][2]);

var indice = cantantesFAV.indexOf('Cobey Tayler');

if(indice > -1){
    cantantesFAV.splice(indice, 4);

}

console.log(cantantesFAV);

//Convertir un array en un string
var datos = cantantesFAV.join();

console.log(datos);

//Convertir un string a un array
var array = '1, 2, 3, 4, 5';
var string = array.split(', ');

console.log(string);*/

document.write('<ul>');
for(var top in generoMusical) {
    document.write('<li>'+generoMusical[top]+'</li>');
}
document.write('</ul>');