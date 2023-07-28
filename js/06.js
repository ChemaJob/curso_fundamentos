//Objetos - Destructuring con dos o mas objetos

const producto = {
  nombre: 'Tablet',
  precio: 300,
  disponibilidad: true
}

const cliente = {
  nombre: 'Chema',
  premium: true
}

const { nombre: nombreProducto, precio, disponibilidad } = producto
const { nombre: nombreCliente, premium } = cliente

console.log(nombreProducto, precio, disponibilidad)
console.log(nombreCliente, premium)