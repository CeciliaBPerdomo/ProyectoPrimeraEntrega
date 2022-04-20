const fs = require('fs')
class container{
    constructor(filename){
        this.filename = filename; 
    }

    // Mostrar productos
    async leer(){
        try{
            let contenido = await fs.promises.readFile(this.filename, 'utf-8')
            return JSON.parse(contenido)
            //return contenido
        } catch(error){
            throw new Error(error)
        }
    }

    async escribir(producto){
        try{
            const fetch = await this.leer()
            let data = fetch//JSON.parse(fetch)
            let ultId = 0
            const cantidadItems = data.length
            console.log('Data: ', data)

            if(cantidadItems !== 0){
                ultId = data[cantidadItems - 1].id
            }

            producto['id'] = ultId + 1
            data.push(producto)

            /*const contenido = await fs.promises.writeFile(this.filename, JSON.stringify(dato));*/
            data = JSON.stringify(data)
            await fs.promises.writeFile(this.filename, data)           
        } catch(error){
            console.log(error);
        }
     }
}

module.exports = container;