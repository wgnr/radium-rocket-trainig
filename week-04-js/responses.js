/* Listado de ejercicios */
/* ********************* */

/* 1) Variables y Operadores */
/* ************************* */

/* 1.a) Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en una 3er variable. */
/* const a = 10
const b = 20
const result = a + b */

/* 1.b) Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable. */
/* const a = "Hola "
const b = "Mundo"
const result = a + b */

/* 1.c) Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el resultado la suma una 3er variable (utilizar length). */
/* const a = "Hola "
const b = "Mundo"
const result = a.length + b.length */


/* 2) Strings */
/* ******* */

/* 2.a) Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase). */
// const a = "palabralarga".toUpperCase()

/* 2.c) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring). */
// const a = "palabralarga".substring(0,5)
// const result = a.substring(0,5)

/* 2.c) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring). */
// const a = "palabralarga"
// const result = a.substring(a.length - 3)

/* 2.d) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +). */
// const a = "palAbrAlaRga"
// const result = a.substring(0,1).toUpperCase() + a.substring(1).toLowerCase()

/* 2.e) Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf). */
// const a = "palAbrA la Rga"
// const result = a.indexOf(" ")

/* 2.f) Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +). */
/* const a = "nuEVa palaBRa laRGa"
// Primera palabra en mayuscula y el resto en minusculas
const aux = a.substring(0, 1).toUpperCase() + a.substring(1).toLowerCase()
                // Dame la primer parte incluyendo el espacio
const result = aux.substring(0, aux.indexOf(" ") + 1) +
                // La proxima palabra toma la primer letra y hacela mayusucla
                aux.substring(aux.indexOf(" ") + 1, aux.indexOf(" ") + 2).toUpperCase() +
                // el resto todo en minusculas
                aux.substring(aux.indexOf(" ") + 2).toLowerCase()

                // "Nueva Palabra larga" */


/* 3) Arrays */
/* ********* */

/* 3.a) Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log) */
// const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
// console.log(meses[4], meses[10])

/* 3.b) Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort). */
// const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
// console.log(meses.sort())

/* 3.c) Agregar un elemento al principio y al final del array (utilizar unshift y push). */
// const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
// meses.unshift("Mes 0")
// meses.push("Mes 13")

/* 3.d) Quitar un elemento del principio y del final del array (utilizar shift y pop). */
// const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
// meses.shift()
// meses.pop()

/* 3.e) Invertir el orden del array (utilizar reverse) */
// const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
// console.log(meses.reverse())

/* 3.f) Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join). */
// const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
// const result = meses.join("-")

/* 3.g) Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice). */
// const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
// const result = meses.slice(4,11)


/* 4) If Else */
/* ********** */

/* 4.a) Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5” */
// const nRan = Math.random()
// alert(nRan > 0.5 ? "Greater than 0,5" : "Lower than 0,5")

// /* 4.b) Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta: */
// const Age = parseInt(Math.random() * 100)
// /* 4.b.1) “Bebe” si la edad es menor a 2 años */
// if (Age <= 2) {
//   alert("Bebe")
// }
// /* 4.b.2) “Nino” si la edad es entre 2 y 12 años */
// else if (Age > 2 && Age <= 12) {
//   alert("Niño")
// }
// /* 4.b.3) “Adolecente” si la edad es entre 13 y 19 años */
// else if (Age >= 13 && Age <= 19) {
//   alert("Adolecente")
// }
// /* 4.b.4) “Joven” si la edad está entre 20 y 30 años */
// else if (Age >= 20 && Age <= 30) {
//   alert("Joven")
// }
// /* 4.b.5) “Adulto” entre 31 y 60 años */
// else if (Age >= 31 && Age <= 60) {
//   alert("Adulto")
// }
// /* 4.b.6) “Adulto mayor” entre 61 y 75 años */
// else if (Age >= 61 && Age <= 75) {
//   alert("Adulto")
// }
// /* 4.b.7) “Anciano” si es mayor a 75 años */
// else if (Age > 75) {
//   alert("Anciano")
// }


/* 5)For */
/* ***** */

/* 5.a)Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras. */
const arr = ["Rocket", "Radium", "holis", "array", "javascript"]
// for (let index = 0; index < arr.length; index++) {
//   const element = arr[index];
//   alert(element)
// }

/* 5.b)Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada. */
// for (let index = 0; index < arr.length; index++) {
//   const element = arr[index].substring(0, 1).toUpperCase() + arr[index].substring(1).toLowerCase();
//   alert(element)
// }
/* 5.c)Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la cadena completa. */
// let sentence = ""
// for (let index = 0; index < arr.length; index++) {
//   const element = arr[index];
//   sentence += element + " "
// }
// console.log(sentence.trim())

/* 5.d)Crear una array vacío y con un bucle for de 10 repeticiones llenar el array con el número de la repetición, es decir que al final de la ejecución del bucle for deberia haber 10 elementos dentro del array, desde el número 0 hasta al numero 9. Mostrar por la consola del navegador el al array final (utilizar console.log). */
// const arr = []
// for (let n = 0; n < 10; n++) {
//     arr.push(n)
// }
// console.log(arr)

/* 6) Funciones */
/* ************ */

/* 6.a) Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador. */
function suma(a, b) {
  return a + b
}

const e6a = suma(45 + 84654)
console.log(e6a)

/* 6.b) A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado. */
function sumaValidada(a, b) {
  if (typeof (a) !== "number" || typeof (b) !== "number") {
    alert("Uno de los parametros no es numerico!")
    return NaN
  }
  return a + b
}

/* 6.c) Crear una función validate integer que reciba un número como parámetro y verdadero si es un número entero. */
function validateInteger(a) {
  return a % 1 === 0
}

/* 6.d) A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado). */
function sumaValidadaSinDecimales(a,b) {
  if (typeof (a) !== "number" || typeof (b) !== "number") {
    alert("Uno de los parametros no es numerico!")
    return NaN
  }

  if (a % 1 !== 0) {
    alert("Hay algun argumento decimal!")
    return parseInt(a)
  } else if (b % 1 !== 0) {
    alert("Hay algun argumento decimal!")
    return parseInt(b)
  }

  return a + b
}
/* 6.e) Convertir la validación del ejercicio 6b) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual. */
function isNumber(n) {
  return typeof (n) === "number"
}

function sumaValidadaConFuncion(a, b) {
  if (!isNumber(a) || !isNumber(b)) {
    alert("Uno de los parametros no es numerico!")
    return NaN
  }
  return a + b
}