//traendo estas dependecias ya estamos leyendo variables de entorno que estan nuestro computador
import {config} from "dotenv"

config()

//Estas es la forma de leer variable de entorno
export const PORT  = process.env.PORT || 300
export const DB_HOST = process.env.DB_HOST
export const DB_USER =  process.env.DB_USER
export const DB_PASSWORD =  process.env.DB_PASSWORD
export const DB_PORT = process.env.DB_PORT
export const DB_DATABASE = process.env.DB_DATABASE
/*
console.log(process.env.PORT)
console.log(process.env.DB_HOST)
console.log(process.env.DB_USER)
console.log(process.env.DB_PASSWORD)
console.log(process.env.DB_PORT)
console.log(process.env.DB_DATABASE)*/