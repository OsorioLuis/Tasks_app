//para establecer el modelo vista controlador
import Task from "../models/Task";


export const renderTasks = async (req, res) => {
    const alltask = await Task.find().lean(); //con lean ya no devuvelve un json sino una propiedad como objeto de js
    res.render('index', {task: alltask}); //le pasamos las tareas para que las renderice el motor
}

export const addTask = async (req, res) => {
    
    try {
        const task = Task(req.body) //toma el objeto enviado desde el formulario y lo convierte al esquema construido
        await task.save() //guarda de foram asincrona la nota en la bbdd
        //console.log(taskSaved)
        res.redirect('/');
    } catch (error) {
        console.log(error)
    }
}

export const renderEditTask = async (req, res) => {

    const taskbyid = await Task.findById(req.params.id).lean();
    res.render('edit', {taskbyid: taskbyid});
}

export const editedTask = async (req, res) => {
    await Task.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/');
}

export const deleteTask = async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.redirect('/');
}

export const toggleDone = async (req, res) => {
    const { id } = req.params;
    const toggledone = await Task.findById(id);
    toggledone.done = !toggledone.done; //ahora es el valor inverso para que la tarea en la bbdd pase a true
    await toggledone.save();
    res.redirect('/');

}