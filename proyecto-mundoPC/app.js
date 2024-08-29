
class DispositivoEntrada{
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }
    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
}
class Raton extends DispositivoEntrada{
    static ContadorRatones = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada , marca);
        this._idRaton = ++Raton.ContadorRatones;
    }
    get idRaton(){
        return this._idRaton;
    }
    toString(){
       return `[idRaton ${this._idRaton}, tipoEntrada: ${this._tipoEntrada} marca:${this._marca}]`;
    }
}

class Teclado extends DispositivoEntrada{
    static contadorTeclados = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca)
        this._idTeclado = ++ Teclado.contadorTeclados;
    }
    get idTeclado(){
        return this._idTeclado;
    }
    toString(){
        return `[idTeclado: ${this._idTeclado}, tipoEntrada: ${this._tipoEntrada},  marca: ${this._marca}] `;

    }
}

class Monitor{
    static contadorMonitor = 0;
    constructor(marca, tamaño){
        this._idMonitor = ++Monitor.contadorMonitor;
        this._marca = marca;
        this._tamaño = tamaño;
       
    }
    get idMonitor(){
        return this._idMonitor;
    } 
    toString(){
         return `[idMonitor: ${this._idMonitor}, tamaño: ${this._tamaño} marca: ${this._marca}]`;
    }
    
}

class Computadora {
static contadorComputadora = 0;
constructor(nombre, monitor , raton, teclado){
    this._idComputadora = ++Computadora.contadorComputadora;
    this._nombre = nombre;
    this._monitor = monitor;
    this._Raton = raton;
    this._teclado = teclado;
}
toString(){
    return ` computadora ${this._idComputadora}:  ${this._nombre} \n Monitor: ${this._monitor} \n raton: ${this._Raton} \n teclado: ${this._teclado}`;
}
}


class Orden{
    static contadorOrdenes = 0;
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }
    agregarComputadoras(computadora){
      this._computadoras.push(computadora)
    }
    mostrarOrden(){
        let computadorasOrden = ' ';
        for( let computadora of this._computadoras){
            computadorasOrden += ` \n ${computadora}`;
        }
        console.log(`orden: ${this._idOrden}, computadoras:${computadorasOrden}`)
    }
}


let raton1 = new Raton('usb','jbl');
console.log(raton1.toString());

let raton2 = new Raton('iphone', 'aple');
console.log(raton2.toString())

let teclado1 = new Teclado('usb','JBL');
console.log(teclado1.toString());

let teclado2 = new Teclado('bluetooth', 'legion' );
console.log(teclado2.toString());


let monitor1 = new Monitor('Legion', 10);
console.log(monitor1.toString()); 
let monitor2 = new Monitor('HP', 22);

let computadora1 = new Computadora('hp', monitor2, raton1, teclado1);
console.log(computadora1.toString());

let computadora2 = new Computadora('legion', monitor2 , raton2, teclado2);
console.log(computadora2.toString());


let orden1 = new Orden();
orden1.agregarComputadoras(computadora1);
orden1.agregarComputadoras(computadora2);
orden1.mostrarOrden();

let orden2 = new Orden();
orden2.agregarComputadoras(computadora1);
orden2.agregarComputadoras(computadora2);
orden2.mostrarOrden();
