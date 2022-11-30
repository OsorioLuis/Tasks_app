import { config } from 'dotenv'

//variables de entorno
config()
//process.env nos permite acceder a variables de entorno en el pc

export const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/test'
export const PORT = process.env.PORT || 3000