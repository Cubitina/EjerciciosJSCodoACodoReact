

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros .
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  /* Metodos de MAth */
  return Math.max(x, y);
}
console.log(obtenerMayor(5, 8));
let obtenerMayorBis = (x, y) => Math.max(x, y);
console.log(obtenerMayorBis(7, 5));

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  if (edad >= 18) {
    return "Allowed";
  } else {
    return "Not allowed";
  }
}
console.log(mayoriaDeEdad(18));
let mayoriaDeEdadBis = edad => edad >= 18 ? "Allowed" : "Not allowed";
console.log(mayoriaDeEdadBis(4));

function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  if (status === 1) {
    return "Online";
  } else if (status === 2) {
    return "Away";
  } else {
    return "Offline";
  }
}
console.log(conection(5));
let connection = status => status === 1 ? "Online" : status === 2 ? "Away" : "Offline";
console.log(connection(1));


function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  switch (idioma) {
    case "aleman":
      return "Guten Tag";
      break;
    case "mandarin":
      return "Ni Hao!";
      break;
    case "inglés":
      return "Hello!";
      break;
    default:
      return "Hola!";
      break;
  };
}
console.log(saludo("mandarin"));
let saludoBis = idioma => {
  switch (idioma) {
    case "aleman":
      return "Guten Tag";
      break;
    case "mandarin":
      return "Ni Hao!";
      break;
    case "inglés":
      return "Hello!";
      break;
    default:
      return "Hola!";
      break;
  };
}
console.log(saludoBis("aleman"));

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuelve --> "This is blue"
  //En caso que el color recibido sea "red", devuelve --> "This is red"
  //En caso que el color recibido sea "green", devuelve --> "This is green"
  //En caso que el color recibido sea "orange", devuelve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
}
let colorsBis = color => {
  switch (color) {
    case "blue":
      return "This is blue";
      break;
    case "red":
      return "This is red";
      break;
    case "green":
      return "This is green!";
      break;
    case "orange":
      return "This is orange!";
      break;
    default:
      return "Color not found and blue in the new black!";
      break;
  };
}
console.log(colorsBis("blue"));


function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
}
let esDiezOCincoBis = numero => numero === 10 || numero === 5 ? true : false;
console.log(esDiezOCincoBis(4));

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
}
let estaEnRangoBis = numero => numero < 50 && numero > 20 ? true : false;
console.log(estaEnRangoBis(24));

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
}
let esEnteroBis = numero => Number.isInteger(numero);
console.log(esEnteroBis(2));
console.log(esEnteroBis(2.2));

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  if (numero % 3 == 0 && numero % 5 == 0) {
    return "fizzbuzz";
  } else if (numero % 5 == 0) {
    return "buzz"
  } else if (numero % 3 == 0) {
    return "fizz";
  } else {
    return numero;
  }
}
console.log(fizzBuzz(30));

let fizzBuzzBis = numero =>
  ((numero % 3 == 0) & (numero % 5 == 0)) ? "fizzbuzz" : numero % 3 == 0 ? "fizz" : numero % 5 == 0 ? "buzz" : numero;
console.log(fizzBuzzBis(8));


function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
  if (num1 < 0 || num2 < 0 || num3 < 0) {
    return "Hay negativos";
  } else if (num1 === 0 || num2 === 0 || num3 === 0) {
    return "Error";
  } else if (num3 > num1 && num3 > num2) {
    let nuevoNum = num3 + 1;
    return nuevoNum;
  } else if (num1 > num2 && num1 > num3 && num1 > 0) {
    return "Número 1 es mayor y positivo";
  } else {
    return false;
  }
}
console.log(operadoresLogicos(2, 4, 3));

let operadoresLogicosBis = (num1, num2, num3) =>
  num1 < 0 || num2 < 0 || num3 < 0 ? "Hay negativos" :
    num1 === 0 || num2 === 0 || num3 === 0 ? "Error" :
      num3 > num1 && num3 > num2 ? ++num3 :
        num1 > num2 && num1 > num3 && num1 > 0 ? "Número 1 es mayor y positivo" : false;
console.log(operadoresLogicosBis(10, 3, 15));

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  if (numero <= 1 || numero == 4) {
    return "falso";
  }
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return "falso";
    }
  }
  return true
}
console.log(esPrimo(17));
let esPrimoBis = numero => {
  if (numero <= 1 || numero == 4) {
    return "falso";
  }
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return "falso";
    }
  }
  return true
}
console.log(esPrimoBis(17));

function esVerdadero(valor) {
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
}
let esVerdaderoBis = valor => valor === true ? "Soy verdadero" : "Soy falso";
console.log(esVerdaderoBis(true));

function tablaDelSeis() {
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí  
  let tabla = []
  for (let i = 0; i < 11; i++) {
    tabla.push(6 * i)
  }
  return tabla
}
console.log(tablaDelSeis())

let tablaDelSeisBis = () => {
  for (let i = 0; i < 11; i++) {
    console.log(`Seis por ${i} es = ${6 * i}.`);
  }
}
tablaDelSeisBis();

function tieneTresDigitos(numero) {
  //Leer un número entero y determinar si tiene 3 dígitos.
  //Escribe tu código aquí
  if (numero.toString().length === 3) {
    return "El número tiene 3 dígitos."
  } else {
    return "El número no tiene 3 dígitos"
  }
}
console.log(tieneTresDigitos(123));
let tieneTresDigitosBis = numero => numero.toString().length === 3 ? "El número tiene 3 dígitos" : "El número no tiene 3 dígitos";
console.log(tieneTresDigitosBis(234));


function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  let i = 0;
  do {
    numero += 5;
    i++;
  } while (i < 8);
  return numero;
}
console.log(doWhile(5));

let doWhileBis = numero => {
  let i = 0;
  do {
    numero += 5;
    i++;
  } while (i < 8);
  return numero;
}
console.log(doWhileBis(4));

