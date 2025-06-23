import { Link, Outlet } from "react-router-dom"
import Imagen from './Fotos/images.png'
import './Layout.css'
const Layout=()=>{
return(
    <>
    <nav className="navBar">
    <div className="NavBar-Contenedor">
    <Link to="/" className="Logo">   
    <img src={Imagen} />
    </Link>
    <div className="Links" >
    <Link to="/">Home</Link>        
    <Link to="/Quienes-Somos">Quienes Somos</Link>
    <Link to="/productos/">Productos</Link>
    <Link to="/contacto">Contacto</Link>
    </div>
    </div>
    </nav>
    <Outlet/>
    <footer>
        
    </footer>
    </>
)
}
export default Layout