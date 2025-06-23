import './App.css'
import { BrowserRouter, Routes,Route, HashRouter } from 'react-router-dom'
import Home from './Home'
import Layout from './Layout'
import QuienesSomos from './QuienesSomos'
import Celulares from './Celulares'
import Contactos from './Contactos'


function App() {
return (
    <>
   <HashRouter>
   <Routes>
    <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>}></Route>
    <Route path="/Quienes-Somos" element={<QuienesSomos/>}></Route>
    <Route path="/productos" element={<Celulares/>}></Route>
    <Route path="/productos/:marcaId" element={<Celulares/>}></Route>
    <Route path="/productos/:marcaId/:id" element={<Celulares/>}></Route>
    <Route path="/contacto" element={<Contactos/>}></Route>
    </Route>
   </Routes>
   </HashRouter>
    </>
  )

}

export default App
