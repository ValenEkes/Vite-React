function Ejercicio4(){
const fs=require('fs')
fs.writeFileSync('Ejercicio4.txt','Hola')
console.log("Mensaje leido")
const contenido=fs.readFileSync('Ejercicio4.txt','utf8')
console.log(contenido)
}
module.exports=Ejercicio4