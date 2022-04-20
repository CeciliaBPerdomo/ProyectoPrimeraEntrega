const fs = require('fs')

class container{
    constructor(filename){
        this.filename = filename; 
    }

    // Mostrar productos
    async leer(){
        try{
            let contenido = await fs.promises.readFile(this.filename, 'utf-8')
            //return JSON.parse(contenido)
            return contenido
        } catch(error){
            throw new Error(error)
        }
    }

    async escribir(producto){
        try{
            const data = await this.leer()
            let contProd = JSON.parse(data)
            let ultId = 0
            const cantidadItems = contProd.length
            console.log(cantidadItems)

            if(cantidadItems !== 0){
                ultId = contProd[cantidadItems - 1].id
                console.log('Ultimo id: ' + ultId)
            }

            producto['id'] = ultId + 1
            data.push(producto)

            /*const contenido = await fs.promises.writeFile(this.filename, JSON.stringify(dato));*/
            data = JSON.stringify(data)
            await fs.promises.writeFile(this.filename, data)
            return contenido;
            console.log('Escrito correctamente');
        } catch(error){
            console.log(error);
        }
     }
}

module.exports = container;