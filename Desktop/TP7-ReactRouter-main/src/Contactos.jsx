const Contactos=()=>{
return(
<>
<form>
<p>Nombre</p>
<div>
<input type="text" name="nombre"/>
</div>
<p>Apellido</p>
<div>
<input type="text" name="apellido"/>
</div>
<p>Numero de telefono</p>
<div>
<input type="text" name="numeroTelefono" />  
</div>
<button type="submit">Agregar</button>
</form>    
</>
)
}
export default Contactos