//Objetos - Unir dos objetos o más
const producto = {
  nombre: 'Tablet',
  precio: 300,
  disponibilidad: true
}

const cliente = {
  nombre: 'Chema',
  premium: true
}

// const nuevoObjeto = Object.assign(producto, cliente)     NO
// const nuevoObjeto2 = { ...producto, ...cliente }
const nuevoObjeto3 = {
  producto: {...producto},
  cliente: {...cliente}
}
console.table(nuevoObjeto3)
console.table(cliente)
console.table(producto)