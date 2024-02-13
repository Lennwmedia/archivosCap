//Interfaz, contiene metodos o propiedades que hacen más estricta la class
interface CamisetaBase {
    setMarca(color);
    getMarca();
}

//Los modulos pueden ser exportados y servirnos para decorar con las clases que hemos hecho
module Tienda {
   export class Ropa {
        constructor(public title: string) {
            console.log('Tienda de ropa: '+title)
        }
    }

    export class Tic {
        constructor(public title: string) {
            console.log('Tienda Electronica: '+title);
        }
    }
}

import Ropa = Tienda.Ropa
let cargar_ropa = new Ropa('Los Deftones')

import Tic = Tienda.Tic
let cargar_tic = new Tic('Lennwmedia')


//Decorador de clase
function estampar(logo: string) {
    return function(target: Function) {
        target.prototype.estampado = function():void{
            console.log('Incluye Logo de: '+logo);
        }
    }
}


//Ahora solo lo aplicamos a la clase
@estampar('Deftones')
//Clase (molde del objeto)

 class Camiseta implements CamisetaBase {
    //Propiedades (caracteristicas del objeto)
    private color: string = 'Blanca';
    private marca: string = 'Nike';
    private talla: string = 'S';
    private precio: number = 42;
    
    //Metodos (funciones o acciones del objeto)
    constructor(color, marca, talla, precio) {
        this.color = color;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }

    public setMarca(marca) {
        this.marca = marca;

    }

    public getMarca() {
        return this.marca
    }


}

//Clase hija
class Playera extends Camiseta {
    public modelo: boolean;
    
    setModelo(modelo: boolean) {
        this.modelo = modelo;
    }
     getModelo() {
        return this.modelo;
    }
}



var camiseta = new Camiseta('Negra', 'Columbia', 'S', 44);
camiseta.setMarca('POO&BEAR');
camiseta.estampado();

var playera = new Playera('Beige', 'Northface', 'L', 32);
playera.setModelo(false);
playera.setMarca("Live's")


console.log(playera)

/*
camiseta.color = 'Azul';
camiseta.setMarca('Polo');
camiseta.talla = 'M';
camiseta.precio = 38;

var playera = new Camiseta();

playera.color = 'Beige';
playera.setMarca('POO&BEAR');
playera.talla = 'S';
playera.precio = 36;
*/

console.log(camiseta)
