/* 
npm init -y
npm i 
npm install express
*/

const container = require('./contenedor')
const express = require('express')
const app = express()

const prodDisponibles = require('./testproductos')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Mostrar productos */
app.get('/', async (req, res) => {
    res.send(await prodDisponibles())
})

/* Server listen */
const PORT = process.env.PORT || 8080

const srv = app.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${srv.address().port}`)
})
srv.on('error', error => console.log(`Error en el servidor ${error}`))


/* Contenedor */
module.exports = container;