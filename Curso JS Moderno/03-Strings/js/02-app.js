const producto ='Monitor con 24\" pulgadas'; /* utilizamos el scape para especificar que no es un caracter especial */


/* vemos las tres formas de crear un string  */



document.write(`${producto}`);

/* cuantas letras tiene esta variable */
document.write(producto.length);

/* posicion de la palabra */

document.write(producto.indexOf("con"));

/* la variable incluye palabra */

document.write(producto.includes("con"));
