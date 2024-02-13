var Programa = /** @class */ (function () {
    function Programa() {
    }
    Programa.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Programa.prototype.getNombre = function () {
        return this.nombre;
    };
    Programa.prototype.setVersion = function (version) {
        this.version = version;
    };
    Programa.prototype.getVersion = function () {
        return this.version;
    };
    return Programa;
}());
var programas = [];
function guardar() {
    var nombre = document.getElementById('nombre').value.toString();
    var programa = new Programa();
    programa.setNombre(nombre);
    // programa.setVersion(version);
    programas.push(programa);
    var list = '';
    for (var i = 0; i < programas.length; i++) {
        list = list + '<li>' + programas[i].getNombre() + '</li>';
    }
    var listado = document.getElementById('listado');
    listado.innerHTML = list;
    document.getElementById('nombre').value = '';
}
