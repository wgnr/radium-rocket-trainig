/* 5)For */
/* ***** */

/* 5.a)Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras. */
const arr = ["Rocket", "Radium", "holis", "array", "javascript"]
for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  alert(element)
}

/* 5.b)Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada. */
for (let index = 0; index < arr.length; index++) {
  const element = arr[index].substring(0, 1).toUpperCase() + arr[index].substring(1).toLowerCase();
  alert(element)
}

/* 5.c)Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la cadena completa. */
let sentence = ""
for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  sentence += element + " "
}
console.log(sentence.trim())

/* 5.d)Crear una array vacío y con un bucle for de 10 repeticiones llenar el array con el número de la repetición, es decir que al final de la ejecución del bucle for deberia haber 10 elementos dentro del array, desde el número 0 hasta al numero 9. Mostrar por la consola del navegador el al array final (utilizar console.log). */
const arr = []
for (let n = 0; n < 10; n++) {
    arr.push(n)
}
console.log(arr)