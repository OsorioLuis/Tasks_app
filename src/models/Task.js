import { Schema, model } from "mongoose";

//trim nos permite elimnar los espacios de un string
const taskSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        description: {
            type: String, 
            required: true
        },
        done: {
            type: Boolean,
            default: false
        }
    }, {
        timestamps :true, //guarda las fechas en que se creo una nueva tarea y cuando se actualizo
        versionKey: false //Versionkey elimina una propiedad __v: 0 que no necesitamos
    }
);

export default model('Task', taskSchema);