var nombre = "Juan";
var apellido = "Perez";
var nombreCompleto = nombre + " " + apellido;

console.log(nombreCompleto);

var nombreCompleto2 = "Carlos" + " " + "Lara";

console.log(nombreCompleto2);

var x = nombre + 219; // los números los trata cómo una cadena.

// las expresiones en Javascript se evalúan de izquierda a derecha.

console.log(x);

// Si quisieramos que realmente se sumen

x = nombre + (2 + 4);

console.log(x);

// ¿Qué pasa si lo hacemos al revéz?

x = 2 + 4 + nombre;
console.log(x);

// Cómo vemos que las expresiones se evalúan de izquierda a derecha cómo encuentra un número y el siguiente otro entonces toma todo como uno

// A esto se le llama contexto String o contexto cadena
