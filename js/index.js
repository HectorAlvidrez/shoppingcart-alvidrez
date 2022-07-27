
// Crear un array de objetos seleccionados por el usuario a traves de prompt.
// Hacer funcion de suma de los productos seleccionados por el usuario y mostrar el precio total.


// DECLARACION DE VARIABLES GLOBALES 

const precioTshirtBordada = 400
const precioTshirtGrafica = 500
const precioHoodie = 600
const precioGorra = 300



// ARRAY DE PRODUCTOS

const productos = [
    {id: 01, name: 'Tshirt bordada', price: precioTshirtBordada},
    {id: 02, name: 'Tshirt grafica', price: precioTshirtGrafica},
    {id: 03, name: 'Hoodie', price: precioHoodie},
    {id: 04, name: 'Gorra', price: precioGorra},
]

console.log(productos)



// MOSTRAR Y SOLICITAR PRODUCTOS AL USUARIO

let agregarCarrito = prompt(`Contamos con los siguientes productos: 
\n${productos[0].name + ' - ' + ' $' + precioTshirtBordada}
\n${productos[1].name + ' - ' + ' $' + precioTshirtGrafica}
\n${productos[2].name + ' - ' + ' $' + precioHoodie}
\n${productos[3].name + ' - ' + ' $' + precioGorra}
\n Escribe el producto que deseas agregar`)



// CONSTRUCCION DE ARRAY CON PRODUCTOS SELECCIONADOS POR EL USUARIO A TRAVES DE PROMPT

const carrito = []
let finalizarCompra = ''

while (agregarCarrito.toUpperCase() != 'COMPRAR'){

    if(agregarCarrito.toUpperCase() == 'TSHIRT BORDADA'){

        carrito.push(productos[0])
        alert(`¡Has agregado ${productos[0].name} a tu carrito`)

        agregarCarrito = prompt(`Escribe otro producto para agregarlo a tu carrito o escribe "Comprar" para finalizar.
        \n${productos[0].name + ' - ' + ' $' + precioTshirtBordada}
        \n${productos[1].name + ' - ' + ' $' + precioTshirtGrafica}
        \n${productos[2].name + ' - ' + ' $' + precioHoodie}
        \n${productos[3].name + ' - ' + ' $' + precioGorra}`)

    } else if(agregarCarrito.toUpperCase() == 'TSHIRT GRAFICA'){

        carrito.push(productos[1])
        alert(`¡Has agregado ${productos[1].name} a tu carrito`)

        agregarCarrito = prompt(`Escribe otro producto para agregarlo a tu carrito o escribe "Comprar" para finalizar.
        \n${productos[0].name + ' - ' + ' $' + precioTshirtBordada}
        \n${productos[1].name + ' - ' + ' $' + precioTshirtGrafica}
        \n${productos[2].name + ' - ' + ' $' + precioHoodie}
        \n${productos[3].name + ' - ' + ' $' + precioGorra}`)

    } else if(agregarCarrito.toUpperCase() == 'HOODIE'){
        
        carrito.push(productos[2])
        alert(`¡Has agregado ${productos[2].name} a tu carrito`)

        agregarCarrito = prompt(`Escribe otro producto para agregarlo a tu carrito o escribe "Comprar" para finalizar.
        \n${productos[0].name + ' - ' + ' $' + precioTshirtBordada}
        \n${productos[1].name + ' - ' + ' $' + precioTshirtGrafica}
        \n${productos[2].name + ' - ' + ' $' + precioHoodie}
        \n${productos[3].name + ' - ' + ' $' + precioGorra}`)

    } else if(agregarCarrito.toUpperCase() == 'GORRA'){
        
        carrito.push(productos[3])
        alert(`¡Has agregado ${productos[3].name} a tu carrito`)

        agregarCarrito = prompt(`Escribe otro producto para agregarlo a tu carrito o escribe "Comprar" para finalizar.
        \n${productos[0].name + ' - ' + ' $' + precioTshirtBordada}
        \n${productos[1].name + ' - ' + ' $' + precioTshirtGrafica}
        \n${productos[2].name + ' - ' + ' $' + precioHoodie}
        \n${productos[3].name + ' - ' + ' $' + precioGorra}`)

    } else{

        agregarCarrito = prompt(`Los valores ingresados no son válidos, por favor escribe el producto que deseas agregar 
        \n${productos[0].name + ' - ' + ' $' + precioTshirtBordada}
        \n${productos[1].name + ' - ' + ' $' + precioTshirtGrafica}
        \n${productos[2].name + ' - ' + ' $' + precioHoodie}
        \n${productos[3].name + ' - ' + ' $' + precioGorra}`)

    }
}


// RESUMEN DEL CARRITO DE COMPRAS DEL USUARIO A TRAVES DE REDUCE()

const resumenCompra = carrito.reduce((acc, el) => acc + '\n' + el.name + ' - $' + el.price, ``)
console.log(`CARRITO DE COMPRAS DEL USUARIO:` + resumenCompra)


// CALCULO DEL PRECIO TOTAL DEL CARRITO DEL USUARIO A TRAVES DE REDUCE()

const precioFinal = carrito.reduce((acc, el) => acc + el.price, 0)
console.log('El precio total a pagar es de: ' + precioFinal)


// AVISO AL USUARIO DE TOTAL DE PRODUCTOS AGREGADOS Y PRECIO FINAL

alert(`Aquí puedes ver un resumen de tu compra: \n${resumenCompra} \n\n TOTAL: $${precioFinal}`)
alert(`Tu orden ha sido completada \n\n ¡Gracias por tu compra!`)