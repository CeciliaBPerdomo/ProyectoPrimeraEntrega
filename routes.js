//const express = require ('express')
import express from 'express'
const routerProductos = express.Router()

//const container = require('./contenedor');

const prodDisponibles = require('./testproductos')

/* Mostrar productos */
routerProductos.get('/', async (req, res) => {
    console.log(await prodDisponibles())
    res.send(await prodDisponibles())
})

export default routerProductos

/* Contenedor */
//module.exports = container;