const express = require('express')
const routerCarrito = express.Router()

/* Muestra el carrito */
routerCarrito.post('/', async(req, res) => {

})

/* Guarda productos en el carrito */
routerCarrito.post('/:id/productos', async(req, res) => {

})

/* Elige el carrito según el id*/ 
routerCarrito.get('/:id', async(req, res) => {

})

/*Borra un producto del carrito */
routerCarrito.delete('/:id/productos/:idprod', async(req, res) => {

})

routerCarrito.put('/:id/productos/:idprod', async(req, res) => {

})

module.exports = routerCarrito