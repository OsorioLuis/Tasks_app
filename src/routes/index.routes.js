import { application, Router}  from "express";
import { 
        renderTasks,
        addTask,
        renderEditTask,
        editedTask,
        deleteTask,
        toggleDone
        } from "../controllers/tasks.controller";

const router = Router();

//renderizar notas
router.get("/", renderTasks)

//añadir notas
router.post('/tasks/add', addTask)

//editar notas
router.get('/task/edit/:id', renderEditTask)

//este metodo sera llamado al terminar de editar una nota con edit.hbs
router.post('/task/edit/:id', editedTask)

//ruta de eliminacion de tareaas
router.get('/delete/task/:id', deleteTask)  

//toggle done
router.get('/task/toggleDone/:id', toggleDone)

//acerca de
router.get("/about", (req, res) => {
    res.render('about')
})

//forma antigua de exportar metodos o funcionalidades
export default router;