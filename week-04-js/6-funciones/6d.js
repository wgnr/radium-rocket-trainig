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