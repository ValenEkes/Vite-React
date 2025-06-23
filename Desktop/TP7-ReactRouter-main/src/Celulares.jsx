import { Route, useParams } from "react-router-dom";
import { celulares, marcas } from "./Data";
import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";

const Celulares = () => {
  const { marcaId, id } = useParams();
  const[idMarca, setIdMarca] =useState()
  let navigate=useNavigate()
  const handleChange = (e) => {
    setIdMarca(e.target.value);
    //redirijo a la url que filtra por marca
    
  }
  return (
    <>
    <select onChange={handleChange}>
        <option value="">Todas las marcas</option>
        {marcas.map((e) => (
          <option key={e.id} value={e.id}>
            {e.nombre}
          </option>
        ))}
      </select>
      <button onClick={()=>navigate("/productos/" +idMarca)} type="submit">Validar</button>
      {celulares
        .filter((c) => {
            if (!marcaId && !id) {
                return true;
            } else if (!id && marcaId == c.marcaId) {
                return true;
            } else if (id && c.id == id) {
                return true;
            } else {
                return false;
            }
        })
        .map((e) => (
          <div>
            <h2>{e.nombre}</h2> <img src={e.fotos[0]} />
          </div>
        ))}
    </>
  );
};
export default Celulares;
