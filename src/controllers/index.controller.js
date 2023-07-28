import { connection } from "../db.js"
export const ping = async (req,res)=>{
  //Tomalo como si fuera un fetch puedes obtener valor usando asynch y await o promesas como .then(res => res.json())
  //.then(data =>console.log(data))
 const [result] = await connection.query("select 1+1 as result")
 //Importante convertilo a JSON
res.json(result[0])
//recuerda devuelve algo tipo json y por ende podemos interactuar casi como sifuera un objeto de javascript
}