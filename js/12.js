// // Funciones - Function declaration

// function sumar(numero = 0, numero2 = 0) {
//   // console.log(numero)
//   // console.log(numero2)
//   console.log(numero + numero2)
// }

// sumar(10, 20)
// sumar(2, 3)
// sumar(100)
// sumar()

//Arreglo
function sumar(numero = 0, numero2 = 0) {
  return [numero + numero2, 'Hola Mundo']
}

const [resultado, holaMundo] = sumar(20, 30)
console.log(resultado)
console.log(holaMundo)


//Objeto
function ne(numero = 0, numero2 = 0) {
  return {
    result: numero + numero2, 
    message: 'Hola Mundo'}
}

const {result, message} = ne(20, 30)
console.log(result)
console.log(message)

