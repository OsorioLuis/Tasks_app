import express from 'express';
import indexRoutes from './routes/index.routes';
import exphbs from "express-handlebars";
import path from 'path';
import { create } from 'express-handlebars';
import './database';
import morgan from 'morgan';

//instances
const app = express();

//settings
//configuramos el puerto y lo usamos luego en el listen
app.set("port", process.env.PORT || 3000);

//engine
app.set('views', path.join(__dirname, 'views'));
const hbs = create({
    layoutsDir: path.join(app.get('views'), 'layouts'),
    defaultLayout: 'main',
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
});
app.engine('.hbs', hbs.engine)
app.set('view engine', '.hbs')

//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false})); //sirve para recibir los datos enviados a través de metodos

//routes
app.use(indexRoutes);

//static files
app.use(express.static(path.join(__dirname, 'public')));

export default app;