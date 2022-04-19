const express = require('express');
const res = require('express/lib/response');
const routerProductos = express.Router()

const container = require('./contenedor');
const prodDisponibles = require('./testproductos')

/* Mostrar productos */
routerProductos.get('/', async (req, res) => {
    console.log(await prodDisponibles())
   // res.send(await prodDisponibles())
   res.json(await prodDisponibles())
})

/* Mostrar producto por id */

routerProductos.get('/:id', async(req, res) =>{
    const { id } = req.params
    let productos = await prodDisponibles()
    let prodId = productos.filter(productos => productos.id === parseInt(id))
    res.send(prodId)
})

/*Guardar*/
routerProductos.post('/guardar', async(req, res) => {
//    console.log(req.body)
    let prod = req.body
    let productos = await prodDisponibles()
    prod.id = productos[productos.length - 1].id + 1
    prod.timestamp = Date.now()

    /*let productos = req.body
    productos.push(req.body)
    res.json(productos)*/
    res.json(await prodDisponibles())
})


module.exports = routerProductos
/* Contenedor */
//module.exports = container;