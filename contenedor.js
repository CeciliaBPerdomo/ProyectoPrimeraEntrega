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
        } catch(error){
            throw new Error(error)
        }
    }

    async escribir(dato){
        try{
           const contenido = await fs.promises.writeFile(this.filename, dato);
           return contenido;
           console.log('Escrito correctamente');
        } catch(error){
            console.log(error);
        }
     }
 

}

module.exports = container;