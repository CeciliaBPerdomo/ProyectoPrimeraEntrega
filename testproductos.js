const container = require('./contenedor')

const nuevoContenedor = new container('./productos.txt')

/* Un producto dispondrá de los siguientes campos: id, timestamp, nombre, descripcion, código, 
foto (url), precio, stock.
let producto = [
    {id: 1,
    timestamp: Date.now(),
    nombre: 'Camiseta de ciclismo',
    descripcion: 'Camiseta de ciclismo para hombre',
    codigo: 'CAM01HOM',
    foto: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.campagnolo.com%2FES%2Fes%2Fstore%2Fropa_ciclismo_hombre%2Fmaillots&psig=AOvVaw3UXBNcqwXesGlgdxRqT4mV&ust=1650364283811000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCJDxxpy0nfcCFQAAAAAdAAAAABAE',
    precio: 1290, 
    stock: 10
    }
]

nuevoContenedor.escribir(JSON.stringify(producto)); */

const prodDisponibles = async () => {
    return await nuevoContenedor.leer()
}


module.exports = prodDisponibles