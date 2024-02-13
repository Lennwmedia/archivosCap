type alfanumerico = string | number | boolean;

let cadena: alfanumerico = 'Lennwmedia';
cadena = false;

let numero: number = 2024;

let boleano: boolean | string = true;
boleano = 'lennwmedia@gmail.com';
boleano = false;
let cualquierCosa: any = 'Goku';
cualquierCosa = 34;

let matriz: Array<string> = ['Real', 'Code', 'Aspirante'];

let array: any[] = ['real', 12, true]

var num1 = 0;
var num2 = 1;

if(num1 == 0) {
    let num1 = 23;
    var num2 = 233;

    console.log(num1, num2);
}

console.log(num1, num2);

console.log(cadena, numero, boleano, cualquierCosa, matriz, array);