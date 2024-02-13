var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
//Los modulos pueden ser exportados y servirnos para decorar con las clases que hemos hecho
var Tienda;
(function (Tienda) {
    var Ropa = /** @class */ (function () {
        function Ropa(title) {
            this.title = title;
            console.log('Tienda de ropa: ' + title);
        }
        return Ropa;
    }());
    Tienda.Ropa = Ropa;
    var Tic = /** @class */ (function () {
        function Tic(title) {
            this.title = title;
            console.log('Tienda Electronica: ' + title);
        }
        return Tic;
    }());
    Tienda.Tic = Tic;
})(Tienda || (Tienda = {}));
var Ropa = Tienda.Ropa;
var cargar_ropa = new Ropa('Los Deftones');
var Tic = Tienda.Tic;
var cargar_tic = new Tic('Lennwmedia');
//Decorador de clase
function estampar(logo) {
    return function (target) {
        target.prototype.estampado = function () {
            console.log('Incluye Logo de: ' + logo);
        };
    };
}
//Ahora solo lo aplicamos a la clase
var Camiseta = function () {
    var _classDecorators = [estampar('Deftones')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var Camiseta = _classThis = /** @class */ (function () {
        //Metodos (funciones o acciones del objeto)
        function Camiseta_1(color, marca, talla, precio) {
            //Propiedades (caracteristicas del objeto)
            this.color = 'Blanca';
            this.marca = 'Nike';
            this.talla = 'S';
            this.precio = 42;
            this.color = color;
            this.marca = marca;
            this.talla = talla;
            this.precio = precio;
        }
        Camiseta_1.prototype.setMarca = function (marca) {
            this.marca = marca;
        };
        Camiseta_1.prototype.getMarca = function () {
            return this.marca;
        };
        return Camiseta_1;
    }());
    __setFunctionName(_classThis, "Camiseta");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Camiseta = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Camiseta = _classThis;
}();
//Clase hija
var Playera = /** @class */ (function (_super) {
    __extends(Playera, _super);
    function Playera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Playera.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Playera.prototype.getModelo = function () {
        return this.modelo;
    };
    return Playera;
}(Camiseta));
var camiseta = new Camiseta('Negra', 'Columbia', 'S', 44);
camiseta.setMarca('POO&BEAR');
camiseta.estampado();
var playera = new Playera('Beige', 'Northface', 'L', 32);
playera.setModelo(false);
playera.setMarca("Live's");
console.log(playera);
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
console.log(camiseta);
