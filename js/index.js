
// Crear un array de objetos seleccionados por el usuario a traves de prompt.
// Hacer funcion de suma de los productos seleccionados por el usuario y mostrar el precio total.


// DECLARACION DE VARIABLES GLOBALES 

const precioTshirtBordada = 400
const precioTshirtGrafica = 500
const precioHoodie = 600
const precioGorra = 300



// CONSTRUCTOR DE PRODUCTOS

const productos = []

function product(id, name, price) {

    this.id = id
    this.name = name
    this.price = price
}

const tshirtBordada = new product (1, 'Tshirt Bordada', 400)
const tshirtGrafica = new product (2, 'Tshirt Gráfica', 500)
const hoodie = new product (3, 'Hoodie', 600)
const gorra = new product (4, 'Gorra', 300)



// AGREGADO DE PRODUCTOS AL ARRAY 

productos.push(tshirtBordada, tshirtGrafica, hoodie, gorra)

console.log(productos)



// MOSTRAR Y SOLICITAR PRODUCTOS AL USUARIO

let agregarCarrito = prompt(`Contamos con los siguientes productos: 
\n${tshirtBordada.name + ' - ' + ' $' + tshirtBordada.price}
\n${tshirtGrafica.name + ' - ' + ' $' + tshirtGrafica.price}
\n${hoodie.name + ' - ' + ' $' + hoodie.price}
\n${gorra.name + ' - ' + ' $' + gorra.price}
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



// CALCULO DEL PRECIO TOTAL CON FUNCION SUMA

let precioFinal = 0

function calculoPrecio(arr, fn){
    
    for (let el of arr){
        fn(el.price)
    }
}

function sumaPrecios(num) {

    precioFinal += num

}
calculoPrecio(carrito, sumaPrecios)
console.log(`El precio total a pagar es de: $${precioFinal}`)



// AVISO AL USUARIO DE TOTAL DE PRODUCTOS AGREGADOS Y PRECIO FINAL

alert(`Aquí puedes ver un resumen de tu compra: \n${resumenCompra} \n\n TOTAL: $${precioFinal}`)
alert(`Tu orden ha sido completada \n\n ¡Gracias por tu compra!`)