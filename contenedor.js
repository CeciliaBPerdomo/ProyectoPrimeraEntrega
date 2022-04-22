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

    // guardar productos
    async escribir(producto){
        try{
            const fetch = await this.leer()
            let data = fetch
            let ultId = 0
            const cantidadItems = data.length
            console.log('Data: ', data)

            if(cantidadItems !== 0){
                ultId = data[cantidadItems - 1].id
            }

            producto['id'] = ultId + 1
            data.push(producto)

            data = JSON.stringify(data)
            await fs.promises.writeFile(this.filename, data)           
        } catch(error){
            console.log(error);
        }
     }

     // borrar por id un producto
     async borrarPorId(id) {
        try{
            const contenidoParseado = await this.leer() 
            const data = contenidoParseado.filter(e => e.id != id);
            await fs.promises.writeFile(this.filename, json.stringify(data))  
            let contenidoNuevo = await this.leer();
            return contenidoNuevo;
         }catch(error){
             throw new Error(error);
         }
     }

     // modificar Por Id un product
     async modificarPorId(producto, id){
        try{
            const contenidoParseado = await this.leer() 
            const elementos = contenidoParseado.filter(e => e.id == id)
            
            if(producto.nombre){
                elementos.nombre = producto.nombre
            }

            if(producto.descripcion){
                elementos.descripcion = producto.descripcion
            }

            if(producto.codigo){
                elementos.codigo = producto.codigo
            }

            if(producto.foto){
                elementos.foto = producto.foto
            }

            if(producto.stock){
                elementos.stock = producto.stock
            }

            if(producto.precio){
                elementos.precio = producto.stock
            }

            await fs.promises.writeFile(this.filename, json.stringify(elementos))  
            let contenidoNuevo = await this.leer();
            return contenidoNuevo;

        }catch(error){
            throw new Error(error)
        }
     }
}

module.exports = container;