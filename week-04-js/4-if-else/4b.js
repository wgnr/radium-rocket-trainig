// /* 4.b) Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta: */
const Age = parseInt(Math.random() * 100)
/* 4.b.1) “Bebe” si la edad es menor a 2 años */
if (Age <= 2) {
  alert("Bebe")
}
/* 4.b.2) “Nino” si la edad es entre 2 y 12 años */
else if (Age > 2 && Age <= 12) {
  alert("Niño")
}
/* 4.b.3) “Adolecente” si la edad es entre 13 y 19 años */
else if (Age >= 13 && Age <= 19) {
  alert("Adolecente")
}
/* 4.b.4) “Joven” si la edad está entre 20 y 30 años */
else if (Age >= 20 && Age <= 30) {
  alert("Joven")
}
/* 4.b.5) “Adulto” entre 31 y 60 años */
else if (Age >= 31 && Age <= 60) {
  alert("Adulto")
}
/* 4.b.6) “Adulto mayor” entre 61 y 75 años */
else if (Age >= 61 && Age <= 75) {
  alert("Adulto")
}
/* 4.b.7) “Anciano” si es mayor a 75 años */
else if (Age > 75) {
  alert("Anciano")
}