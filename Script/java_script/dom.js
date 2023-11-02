'use strict'

//var cabezera = document.getElementById('title');
 var cabezera = document.querySelector('#title');

 cabezera.innerHTML = prompt('Introduce un title');

 cabezera.style.background = "aqua";
 cabezera.style.color = "white";
 cabezera.style.padding = "10px"; 

var todosLosParrafos = document.getElementsByTagName('p');
/*var recoleccion = todosLosParrafos[3];
recoleccion.style.fontSize = '22px';
recoleccion.style.background = 'green'

console.log(todosLosParrafos)*/
var parrafosRojos = document.getElementsByClassName('red');


var rojo;

for(rojo in parrafosRojos) {
    if(parrafosRojos[rojo].className == "red") {
        parrafosRojos[rojo].style.background = 'red';
        parrafosRojos[rojo].style.fontSize = '18px';
        parrafosRojos[rojo].style.fontStyle = 'italic';
}
}

