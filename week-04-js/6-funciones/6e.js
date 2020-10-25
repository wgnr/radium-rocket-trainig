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