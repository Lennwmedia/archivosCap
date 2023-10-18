'use strict'

alert("Bienvenido");
alert("Estoy usando Java Script");
/* document.write("Un script de referencia");
console.log("Estoy usando la consola");
console.log("2x + 3x = ?");
console.log(32+32); */

var pais = "Nicaragua";
var continente = "Latinoamerica";
var antiguedad = 2023;

pais = "España";
continente = "Europa";

var pais_y_continente = pais+' '+continente;

alert(pais_y_continente);
console.log(pais, continente, antiguedad);


if(true) {
    var antiguedad = 2049;
    console.log(antiguedad);
}

console.log(antiguedad);

//variable let

var antiguedad = 2007;

if(true) {
    let antiguedad = 2020;
    console.log(antiguedad);
}

console.log(antiguedad);

//constante

const siglo = "51";

console.log(siglo);

var nombre = "Ryan";
console.log(nombre);

console.log(typeof siglo);
console.log(typeof antiguedad);

//condicionales if y else

if(antiguedad == 2049) {
    console.log("Eres BladeRunner de "+antiguedad);
}else if(antiguedad ==2007) {
    console.log("eres retro?");
}
else {
    console.log("Sino eres de CiberPunk "+antiguedad);
}

if(siglo >= 'XXI') {
    console.log("De que siglo eres del "+siglo);
}
else{
    console.log("Puedes que vengas del area "+siglo);
}

var year = 2023;
//Operador de diferencia '!'
if(year != 2023) {
    console.log("Eres de otra decada");
}else{
    console.log("La era de cristal");
}

//Operador And '&&'
if(year == 2023 && year <= 2049) {
    console.log("Vaya decada");
}else{
    console.log("REPITE CELDAS");
    }


//Operador Or '||'
if(year != 2023 || year <= 2010) {
    console.log("Tienes a la IA");
}else{
    console.log("La ciencia está en tus manos");
}


if(year != 2023 || (year == 2033 && year >= 2030)) {
    console.log("vaya lógica");
}else{
    console.log('De los errores se apriende');
}

var edad = 2049;
var imprime = "";

 switch(edad) {
    case 18:
        imprime = "Ya eres legal";
        break;
    case 20:
        imprime = "Ya eres adulto";
        break;
    case 40:
        imprime = "Crisis de los cuarenta";
        break;
    case 70:
        imprime = "Eres ansiano";
        break;
    default:
        imprime = "La vida es ciclo";
        break;
 }

 console.log(imprime);

 var color = "red";
  switch(color) {
    case "red":
        console.log("Este es "+color);
        break;
    case "blue":
        console.log("Este es "+color);
        break;
        default:
            console.log("Este es amarillo?");
            break;
  }

  let numero = 20;

  for(var i = 0; i <= numero; i++) {
    console.log(i);
  }

   var year = 2049;

   while(year >= 2023) {
    console.log("Blade Runner "+year);
    year--;
   
   if(year == 2030) {
    break;
   }
}

   var years = 20;
    
   do{
    alert("repetir");
    years++;
    if(years == 23) {
        break;
    }
   }while(years < 25);

   