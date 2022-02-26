alert("hola mundo desde js");

/* guardamos el nombre en la constante nombre */
const nombre=prompt('cual es tu nombre');
/* apuntamos a la etiqueta con la clase .infor para mostrar la informacion por pantalla */
document.querySelector('.infor').innerHTML=`${nombre} esta iniciandose en javascript`;