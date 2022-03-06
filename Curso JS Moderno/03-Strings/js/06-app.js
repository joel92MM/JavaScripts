const producto ="Monitor de 20 pulgadas";
//repetimos una cadena de texto el numero de veces que querramos
const texto =' en promocion'.repeat(2.4);

console.log(texto);
console.log(`${producto} ${texto}`);


//dividir una cadena

const actividad="Estoy aprendiendo javascript moderno";

console.log(actividad.split(" "));

const hobbies="leer, bailar, nadar,correr";

console.log(hobbies.split(","));

const textos="leer, bailar #nadar,correr";

console.log(textos.split("#"));