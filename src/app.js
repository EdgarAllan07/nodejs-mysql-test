import express, { json } from "express"
import employeeRouter from "./routes/employees.routes.js"
import indexRouter from "./routes/index.routes.js"

import {PORT} from "./config.js"

const app = express()
app.use(express.json())
app.use(indexRouter)

//Esto hace antes de ingresar api usando el link deban poner algo asi locahost:3000/api/employees por ejemplo 
app.use("/api",employeeRouter)

app.use((req,res,next)=>{
  res.status(404).json({
    "message":"endpoint not foudn"
  })
})

export default app;