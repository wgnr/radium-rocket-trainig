/* 2.f) Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +). */
const a = "nuEVa palaBRa laRGa"
// First letter in upper case case, rest in lower case.
const aux = a.substring(0, 1).toUpperCase() + a.substring(1).toLowerCase()
                // Take first parte + space
const result = aux.substring(0, aux.indexOf(" ") + 1) +
                // Take next word and make its first letter uppercase
                aux.substring(aux.indexOf(" ") + 1, aux.indexOf(" ") + 2).toUpperCase() +
                // rest in lower case
                aux.substring(aux.indexOf(" ") + 2).toLowerCase()

                // Result : "Nueva Palabra larga"