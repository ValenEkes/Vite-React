import "./cita.css";
import Mensaje from "./Mensaje";
let Cita = () => {
  return (
    <>
      <div class="one-half column">
        <h2>Pacientes registrados</h2>
        <div class="cita">
        <div>
         <p>
            "Mascota"
            <span>Nina</span>
         </p>
        </div>
        <div>
          <p>
            "Dueño"
            <span>Martin</span>
         </p>
        </div>
        <div>
          <p>
            "Fecha"
            <span>2021-08-05</span>
         </p>
        </div>
        <div>
          <p>
            "Hora"
            <span>8:20</span>
         </p>
        </div>
        <div>
          <p>
            "Sintomas"
            <span>Le duele la pierna</span>
         </p>
        </div>
        <button class="button elimnar u-full-width">Eliminar</button>
      </div>
      </div>
    </>
  );
};
export default Cita;
