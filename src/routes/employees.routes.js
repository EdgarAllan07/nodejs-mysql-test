//Esto es como un archivo javascript normal y cualquiera 
import { Router } from "express";
import {getEmployee,createEmployee,updateEmployee,deleteEmployee, getEmployeeID} from "../controllers/employees.controller.js";
const router = Router()

router.get("/employees",getEmployee)

//Para obtener un solo usuario dependiendo que id ponga el cliente (select * from  employee where id = ?)
router.get("/employees/:id",getEmployeeID)

router.post("/employees",createEmployee)

//usando el put nos dice que actualizemos todos los parametros de la tabla sino el parametro que no cambiemos nos da un null en el capo
//El patch nos ayuda actualizar algunos campos osea lo que nosotros queramos eso se dice que es una actualizacion parcial
router.patch("/employees/:id",updateEmployee)

router.delete("/employees/:id",deleteEmployee)



//Esto nos ayuda exportar todos los objectos o funciones que tenga la constante router por ejemplo router.get() o router.post() eso lo podemos llevar a otro archivo JS con import
export default router