function parsearURL(){    
try{
let url= new URL('3')   
console.log(url.host)
console.log(url.pathname)
console.log(url.search)
console.log(url.query)
}
catch(error){
console.log('error')
}
}
module.exports=parsearURL