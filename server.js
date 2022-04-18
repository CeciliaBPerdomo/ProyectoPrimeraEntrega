/* 
npm init -y
npm i 
npm install express
*/

const express = require ('express')
const routes = require('./routes')

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))
app.use('/productos', routes)

/* Server listen */
const PORT = process.env.PORT || 8080

const srv = app.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${srv.address().port}`)
})
srv.on('error', error => console.log(`Error en el servidor ${error}`))


/* Contenedor */
module.exports = container;