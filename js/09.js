//Operaciones con los Arreglos

const tecnologias = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

//Añadir elementos al Array
// tecnologias.push('GraphQL')    //Añade al final del array
// tecnologias.unshift('MongoDB') //Añade al inicio del array
//Recordar que el modificar un arreglo en JavaScript es un NO
// const nuevoArray = [...tecnologias, 'GraphQL']
// const nuevoArray = ['GraphQL', ...tecnologias]

//Eliminar elementos del Array
// tecnologias.pop() //Elimina el elemento del final
// tecnologias.shift() //Elimina el elemento del inicio
// tecnologias.splice(2, 1); //Elimina, el primer numero es para el numero de elemento que se desea eliminar, el segundo numero es a partir de ahi cuantos elementos se eliminarán
//Recordar que el modificar un arreglo en JavaScript es un NO
// const nuevoArray = tecnologias.filter( function(tech) {
//   return tech !== 'HTML'
// })

//Reemplazar elementos del Array
// tecnologias[0] = 'GraphQL'
//Recordar que el modificar un arreglo en JavaScript es un NO
const nuevoArray = tecnologias.map( function(tech){
  if (tech === 'HTML') {
    return 'GraphQL'
  } else {
    return tech
  }
})

console.table(tecnologias)
console.table(nuevoArray)
