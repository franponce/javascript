let a = 3, b = 2;
let z = a + b;

// Incremento
// Pre-incremento (el operador ++ antes de la variable)
z = ++a;
console.log(a);
console.log(z);

// Post-incrmeneto(el operador ++ despues de la viariable)

z = b++;
console.log(b); // 3. Primero se utiliza el valor original de la varibale y posteriormente se incrementa.
console.log(z); // 2. En esre caso primero b, que tiene el valor de 2 se asgina a Z y posteriormente se incrementa

// Decremento
// Predecremento
z = --a;

console.log(a); // 3
console.log(z); // 3 

//Posdecremento
z = b--;
console.log(b); // 2
console.log(z); // 3
