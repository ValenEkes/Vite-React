function parsearUrl(){
const url=require('url')
try{
let link='http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo.'
let q=url.parse(link,true)
console.log('host:', q.host)
console.log('pathname:',q.pathname)
console.log('search:',q.search)
console.log('query:',q.query)
}
catch(error){
console.log(error.message)
}
}
module.exports=parsearUrl