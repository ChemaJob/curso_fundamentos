//Objetos

// const nombre = 'tablet'
// const precio = 300
// const disponibilidad = true

const producto = {
  nombre: 'celular',
  precio: 250,
  disponibilidad: true
}

console.log(producto)
console.table(producto)

console.log(producto.nombre)
console.log(producto.precio)
console.log(producto.disponibilidad)

//Destructuring
const {imagen} = producto
console.log(imagen)

const {nombre, precio, disponibilidad} = producto
console.log(nombre)
console.log(precio)
console.log(disponibilidad)

//Object Literal Enhacement
const autenticado = true
const usuario = 'Chema'

const nuevoObjeto = {
  autenticado: autenticado,
  usuario, usuario
}

console.table(nuevoObjeto)

