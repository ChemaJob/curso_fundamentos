//Objetos - Manipulacion

const producto = {
  nombre: 'Tablet',
  precio: 300,
  disponibilidad: true
}

// Object.freeze(producto) Freze -> No deja modificar
// Object.seal(producto) Seal -> Deja modificar propiedades existentes pero no añadir ni eliminar

//Reescribir un valor
producto.nombre = 'Monitor Curvo'

//Si no existe lo va a añadir
producto.imagen = 'imagen.jpg'

//Eliminar
delete producto.disponibilidad

console.table(producto)