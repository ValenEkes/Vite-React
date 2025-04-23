import Mensaje from "./Mensaje";
let Formulario = () => {
  return (
    <>
    <h2>Crear mi cita</h2>
      <form>
        <div>
          <Mensaje mensaje="Nombre Mascota" />
          <input type="text" name="NombreMascota" class="u-full-width" placeholder="Nombre Mascota" />
        </div>
        <div>
          <Mensaje mensaje="Nombre Dueño" />
          <input type="text" name="propietario" class="u-full-width" placeholder="Nombre Dueño" />
        </div>

        <div>
          <Mensaje mensaje="Fecha" />
          <input type="date" name="Fecha" class="u-full-width" value/>        
          </div>

        <div>
          <Mensaje mensaje="Horario" />
          <input type="time" name="Hora" class="u-full-width" value />
        </div>

        <div>
          <Mensaje mensaje="Sintomas" />
          <input type="text" name="Sintomas" class="u-full-width" placeholder="Sintomas" />
        </div>
      </form>
      <button type="button" class="u-full-width button primary">Agregar Cita</button>
    </>
  );
};
export default Formulario;
