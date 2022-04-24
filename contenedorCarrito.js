const fs = require('fs')
class ContainerCarrito {
    constructor(filename){
        this.filename = filename; 
    }

    crearCarrito(){
        try{
            const carritos = []      
            const carrito = {
                id: 1,
                timestamp: Date.now(),
                productos: []
            }
            carritos.push(carrito) 
            fs.writeFileSync(this.filename, JSON.stringify(carritos))
            console.log(carrito.id)     
        } catch(error){
            throw new Error(error)
        }
    }

    // Mostrar carrito
    async leer(){
        try{
            let contenido = await fs.promises.readFile(this.filename, 'utf-8')
            console.log(contenido)
            return JSON.parse(contenido)
        }catch(error){
            throw new Error(error)
        }    
    }

    /*
    async mostrarPorId(id){
        try {

        } catch(error) {
            throw new Error(error)
        }
    }*/

}



module.exports = ContainerCarrito