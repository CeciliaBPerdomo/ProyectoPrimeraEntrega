const express = require ('express')
const routerProductos = express.Router()

const container = require('./contenedor');

const prodDisponibles = require('./testproductos')



/* Mostrar productos */
routerProductos.get('/', async (req, res) => {
    console.log(await prodDisponibles())
    res.send(await prodDisponibles())
})
