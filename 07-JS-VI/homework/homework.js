// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  //return nombre.charAt(0).toUpperCase() + nombre.slice(1);

  var nombreConMayuscula = nombre[0].toUpperCase() + nombre.slice(1);
  return nombreConMayuscula;
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:

  //return cb();
  cb();
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:

  //return cb(n1, n2, cb);
  cb(n1, n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:

  var resultado = 0;
  for (var i = 0; i < numeros.length; i++) {
    resultado = resultado + numeros[i]
  }
  cb(resultado);

  // Con reduce:
  //var resultado = numeros.reduce(function(acc, num){
  // return acc + num;
  //}, 0);
  //cb(resultado);

  // Con forEach:
  //var resultado = 0;
  //numeros.forEach(function (num) {return resultado = resultado + num});
  //cb(resultado)
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  //return array.forEach(cb);

  array.forEach(function (elemento) {
    cb(elemento)
  })

  //for (var i = 0; i < array.length; i++){
  //  cb(array[i])
  //}
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:

  var nuevoArray = array.map(cb)
  return nuevoArray;

  //return array.map(function(elemento){
  //  return cb(elemento)
  //});
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:

  // Sin callbacks:
  //var elementosConA = [];
  //for (var i = 0; i < array.length; i++){
  //  if(array[i].charAt(0) === "a"){
  //    elementosConA.push(array[i])
  //  }
  //}
  //return elementosConA;

  // Con forEach:
  //var elementosConA = [];
  //function filtrarLetraA(palabra) {
  //  if (palabra[0] === "a") {
  //    elementosConA.push(palabra)
  //  }
  //}
  //array.forEach(filtrarLetraA);
  //return elementosConA;

  // Con filter:
  var elementosConA = array.filter(function(elemento){
    return elemento[0] === "a";
  })
  return elementosConA;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
