// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa
  // un par clave-valor en forma de matriz.
  //Ejemplo:
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

  var matriz = [];
  for (var propiedad in objeto) {
    matriz.push([propiedad, objeto[propiedad]]);
  }
  return matriz;

  //var matriz = Object.entries(objeto);
  //return matriz;
}

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  //Escribe tu código aquí

  var cantidadCaracteres = {};
  for (var i = 0; i < string.length; i++) {
    if (!cantidadCaracteres[string[i]]) {
      cantidadCaracteres[string[i]] = 0;
    }
    cantidadCaracteres[string[i]] += 1;
  }

  return cantidadCaracteres;

  // con .hasOwnProperty:
  //for (var i = 0; i < string.length; i++) {
  //  if (cantidadCaracteres.hasOwnProperty(string[i])){
  //    cantidadCaracteres[string[i]] += 1
  //  } else {
  //    cantidadCaracteres[string[i]] = 1
  //  }
  //}
  //return cantidadCaracteres;
}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  //  var array = [s];
  //  for (var i = 0; i < array.length; i++) {
  //    if (s[i] === `${array[0][i]}`.toUpperCase()) {
  //      }
  //  }
  //  return array;

  var mayusculas = "";
  var minusculas = "";
  for (var i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      mayusculas += s[i];
    } else if (s[i] === s[i].toLowerCase()) {
      minusculas += s[i];
    }

    //if (s.charAt(i) === s.charAt(i).toUpperCase()) { mayusculas += s[i] }
    //else if (s.charAt(i) === s.charAt(i).toLowerCase()) { minusculas += s[i] }
  }
  return `${mayusculas}${minusculas}`;
}

function asAmirror(str) {
  //La función recibe una frase.
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  var fraseArray = str.split(" "); // [ 'The', 'Henry', 'Challenge', 'is', 'close!' ]

  for (var i = 0; i < fraseArray.length; i++) {
    var letrasArray = fraseArray[i].split("");
    var reversa = letrasArray.reverse();
    fraseArray[i] = reversa.join(""); //el join vuelve a convertir el array de caracteres separados en un array de la palabra entera; y va modificando el valor de la frase a la vez.

    // Forma resumida:
    // (toma fraseArray[i] y separa todos los caracteres en distintos arrays, luego los da vuelta, y los vuelve a unir; y con el return final lo convierte a string)

    // fraseArray[i] = fraseArray[i].split("").reverse().join("");
  }
  return fraseArray.join(" ");
}

function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  var num = Number(
    String(numero).split("").reverse().join("")
  );
  if (numero === num) { return "Es capicua" }
  else { return "No es capicua" };

  //var num = numero.toString();
  //var numInvertido = num.split("").reverse().join("");
  //
  //if (num === numInvertido) {
  //  return "Es capicua";
  //} else {
  //  return "No es capicua";
  //}
}

function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  //var array = cadena.split("");
  //for (var i = 0; i < array.length; i++) {
  //  if (array[i] === "a" || array[i] === "b" || array[i] === "c") {
  //    array[i] = "";
  //  }
  //}
  //return array.join("");

  var frase = "";
  for (elem of cadena) {
    if (elem != "a" && elem != "b" && elem != "c") {
      frase += elem;
    }
  }
  return frase;
}

function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i].length > arr[j].length) {
        var temp = arr[i];     // la variable temporal toma el valor de arr[i]
        arr[i] = arr[j];       // arr[i] toma el valor de arr[j]
        arr[j] = temp;         // arr[j] toma el valor de arr[i]
      }                        // Con esto quedarían cambiadas las posiciones
    }
  }
  return arr;


  //for (var i = 0; i < arr.length; i++) {
  //  var temp = arr[i];
  //  var j = i - 1;
  //  while (j >= 0 && temp.length < arr[j].length) {
  //    arr[j + 1] = arr[j];
  //    j--;
  //  }
  //  arr[j + 1] = temp;
  //}
  //return arr;


  // Con sort:
  //arr.sort(function(a, b) {
  //  if (a.length > b.length) {
  //    return 1;
  //  }
  //  if (a.length < b.length) {
  //    return -1;
  //  }
  //  return 0;
  //});
  //return arr;
}

function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí

  var array = [];
  for (var i = 0; i < arreglo1.length; i++) {
    for (var j = 0; j < arreglo2.length; j++) {
      if (arreglo1[i] === arreglo2[j]) {
        array.push(arreglo1[i]);
      }
    }
  }
  return array;

  // con .includes()
  //var array = [];
  //arreglo1.forEach(function (elem) {
  //  if (arreglo2.includes(elem)) {
  //    array.push(elem)
  //  }
  //})
  //return array;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
