//Es importante poner el /promise para asi usar fetch o async/await para obtener los datos de la consulta, actualizacion,insercion o eliminacion de datos
import mysql from "mysql2/promise"
import {DB_HOST,
DB_DATABASE,
DB_USER,
DB_PASSWORD,
DB_PORT,} from "./config.js"

//Funciono la conexion de esta manera
export const connection = mysql.createPool({
  host:DB_HOST,
  user:DB_USER,
  password:DB_PASSWORD,
  port:DB_PORT,//Esto no es necesario pero por asi acaso se pone
  database:DB_DATABASE
})



