// Tipo de dato string

var nombre = "Carlos";

console.log(nombre);

nombre = 10;

console.log(typeof nombre);

// Tipo de dato numerico

var numero = 1000;

console.log(numero);

// Tipo de dato object 

var objeto = {
    nombre: "Juan",
    apellido: "Perez",
    telefono: "22334455"
}

console.log(objeto);

// Tipo de dato boolean (true, false)

var bandera = true;

console.log(bandera);

// Tipo de dato function 

function miFuncion(){}

console.log(miFuncion);

// Tipo de dato Symbol. Crea un valor único de una variable

var simbolo = Symbol("mi simbolo");

console.log(simbolo);

// Tipo clase es una function 

class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

console.log(Persona);

// Tipo undefined 

var x;
console.log(x);

// null = ausencia de valor 

var y = null

console.log(y);

x = undefined;

console.log(x);
