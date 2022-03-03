const producto="Monitor de 20 pulgadas";


/* reemplazar un texto de una cadena */
console.log(producto);
console.log(producto.replace('pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor curvo'));

/* corta una cadena de texto */

console.log(producto.slice(0,10));
/* desde el numero indicado adelante corta */
console.log(producto.slice(8));


/* alternativa a slice */

console.log(producto.substring(0,10));


const usuario ="joel";

console.log(usuario.substring(0,1));
console.log(usuario.charAt(0));