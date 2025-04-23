import './App.css'
import './Formulario'
import Formulario from './Formulario'
import Cita from './cita'
function App() {
  return (
    <>
    <h1>Administrador de paciente</h1>
    <div className='container'>
      <div className="row">
      <div class="one-half column">
        <Formulario/>
      </div>
      <div class="one-half column">
        <Cita/>
      </div>
      </div>
    </div>

    </>
  )
}

export default App
