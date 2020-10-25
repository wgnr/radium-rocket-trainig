/* 6.b) A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado. */
function sumaValidada(a, b) {
  if (typeof (a) !== "number" || typeof (b) !== "number") {
    alert("Uno de los parametros no es numerico!")
    return NaN
  }
  return a + b
}