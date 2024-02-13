class Programa {
    public nombre: string;
    public version: number;



    public setNombre(nombre: string) {
        this.nombre = nombre;
    }

    public getNombre() {
        return this.nombre;
    }

    public setVersion(version: number) {
        this.version = version;
    }

    public getVersion() {
        return this.version
    }
}


var programas = [];


function guardar() {
    var nombre = (<HTMLInputElement>document.getElementById('nombre')).value.toString();

    var programa = new Programa();
    programa.setNombre(nombre);
   // programa.setVersion(version);

    programas.push(programa);

    var list = '';

    for(var i = 0; i < programas.length; i++) {
        list = list+'<li>'+programas[i].getNombre()+'</li>';
    }

    var listado = <HTMLElement> document.getElementById('listado');

    listado.innerHTML = list;

    (<HTMLInputElement>document.getElementById('nombre')).value = '';
}