let a = 3, b = 2, c = 1;

// En JS cuando tenemos una expresión cómo la del siguiente ejemplo, la leemos de izquierda a derecha y el resultado se asigna a una variable (z)
// Es común cuando realizamos una operación, el resultado de esa operación se asigne a una variable aunque no es requerido. 

let z = a * b;
console.log(z);

// ¿Qué pasa si invertimos el orden?

z = c + a * b;

console.log(z); // El resultado es 7. De izquierda a derecha, pero debido a que los operadores de más y el operador de multplicación no tiene la msima prioridad, toma prioridad el operador de multiplicación. 

// https://drive.google.com/file/d/1TdenXkVqyLrty6Pf9r1Kq3oXACH1xElY/view?usp=sharing

