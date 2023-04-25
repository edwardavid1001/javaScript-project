//Definir array
let onces=["Barra chocolatosa","Tamalin","Arepa","Mojorra","Cachapa"]

//Acceder a una posicion del array
console.log(onces[1])
console.log(onces[onces.length-1])

//Recorrer array

onces.forEach(function(elements,indice,array){
//cuerpo de la funcion
console.log(`En la posicion ${indice} esta el elemento ${elements}`)

})

//Añadir elementos al final del array -> push

onces.push("Arepa")
console.log(onces)

//Elimianr el ultiumo elemento del array    -->pop

onces.pop()
console.log(onces)

//Agregar elemento al inicio del array -->unshift

onces.unshift("Juguito")
console.log(onces)

//Eliminar elemento al inicio del array -->shift

onces.shift()
console.log(onces)

//Para borrar elementos -->splice

onces.splice(3,2)
console.log(onces)









