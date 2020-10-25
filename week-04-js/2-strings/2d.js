/* 2.d) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +). */
const a = "palAbrAlaRga"
const result = a.substring(0,1).toUpperCase() + a.substring(1).toLowerCase()
