import  {connection} from "../db.js"

export const getEmployee = async (req,res)=>{
  try{
  const [rows] = await connection.query("Select * from employee")
  res.json(rows)
  }catch(error){
      return res.status(500).json({
        "message":"Something goes wrong"
      })
  }
}

export const getEmployeeID = async (req,res)=>{
  let id = req.params.id
  try{

  const [row] = await connection.query(`select * from employee where id = ${id}`)
  if(row.length <= 0){
    return res.status(404).json({
      'message':"Employee not found"
    })
  }
  res.json(row[0])
}catch(error){
  return res.status(500).json({
    "message":"Something goes wrong"
  })
}
}

export const createEmployee = async (req,res)=>{
     //Asi hacemos una insercion en la base de datos 
 
     const {name, salary} = req.body;
try{
   //forma de llenar esteos campos es una de tantas
  const [rows]= await connection.query("insert into employee(name,salary) values (?,?) ",[name, salary])
   res.send({
     id:rows.insertId,
     name,
     salary
   })
}catch(error){
  return res.status(500).json({
    "message":"something goes wrong"
  })
}
}


export const deleteEmployee = async (req,res)=>{
try{
  const [result] =await connection.query("delete from employee where id =?",[req.params.id])

  if(result.affectedRows == 0){
    res.status(204).send("Trabajador no encontrado")
    return
  }
  console.log(result)
  res.send("Usuario eliminado")
}catch(error){
  return res.status(500).json({
    "message":"something goes wrong"
  })
}
}

export const updateEmployee = async (req,res)=>{
 try{
  const {id} =  req.params
  const {name,salary} =  req.body 
  //Esta es la unica forma de ingresar datos usando string
  //IFNULL es un metodo de sql que nos dice que si el campo de llena con un valor null entonces vuelve al valor que tenia antes que no era null
  const [result] = await connection.query(`update employee set name = IFNULL(?,name), salary = IFNULL(?,salary) where id = ?  `,[name,salary,id])

  if(result.affectedRows === 0){
    res.json({
      'message':"not found"
    })
    return
  }

   const [rows] = await connection.query(`select * from employee where id = ${id}`)
  res.json(rows)
 }catch(error){
  return res.status(500).json({
    "message":"something goes wrong"
  })
 }
}

