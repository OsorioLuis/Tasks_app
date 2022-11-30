import mongoose from 'mongoose';
import { MONGODB_URI }from'./config'

//Conexion usando metodos asincronos
(async () => {
    try{
        const db = await mongoose.connect(MONGODB_URI)
        console.log('DB is connected to ', db.connection.name)
    }catch (error) {
        console.error(error)
    }
})();
//al usar esta funcion anonima no hace falta exportar metodos ya que al 
//importar en otro archivo se ejecuta directamente
