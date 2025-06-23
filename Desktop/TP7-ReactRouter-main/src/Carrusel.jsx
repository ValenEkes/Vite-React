import { useState,useEffect } from "react"
const Carrusel=()=>{
const imagenes=[
    'https://llevatilde.es/imagetexts/e/ee/yo-show.png',
    'https://llevatilde.es/imagetexts/4/4e/soy-show.png',
    'https://llevatilde.es/imagetexts/e/e5/de.png',
    'https://i.pinimg.com/736x/d8/54/c2/d854c2c4833a188bc358c8d014a3b505.jpg',
    'https://acdn-us.mitiendanube.com/stores/002/787/742/products/iphone13-8dff586c2a7feecd9117188343602297-1024-1024.jpg',
    'https://lh3.googleusercontent.com/proxy/62WMADgNVvmPB6-83sIGI0LVBp2BTq2r9qcQt4lcx9VNgYGxmWqKVfC8tWmBvlBmwf0Edal4FLdkcKjnocBSTrqGfxWlPAVWwWxFScQc2ZNW',
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dellorean.com.ar%2Fapple-iphone-14-512-gb-morado%2Fp%2FMLA19615374&psig=AOvVaw2krMHhzZc7vQlk_3w9sD9m&ust=1749818951710000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLDjs9r1640DFQAAAAAdAAAAABAE',
    'https://acdn-us.mitiendanube.com/stores/001/097/819/products/81758-producto-asset-mms-144638860-16f177b4bd23c1802d17298228080304-480-0.jpg',
    'https://tienda.personal.com.ar/images/720/webp/i_Phone_14_Pro_Space_Black_84a41badcb.png',
    'https://tekknoshop.mx/cdn/shop/files/Celular-Apple-iPhone-11-64GB-Rojo-Product-Red-Reac-8.jpg?v=1729212984'
]
const [indice, setIndice] = useState(0);

useEffect(() => {
    const intervalo = setInterval(() => {
      setIndice((prev) => (prev + 1) % imagenes.length);
    }, 3000);

    return () => clearInterval(intervalo); 
  }, [imagenes.length]);

const siguiente = () => {
  setIndice((prev) => (prev + 1) % imagenes.length);
};

const anterior = () => {
  setIndice((prev) => (prev - 1 + imagenes.length) % imagenes.length);
};

return (
  <>
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "1rem",
      marginTop: "2rem"
    }}>
      <button onClick={anterior} style={{
        fontSize: "2rem",
        cursor: "pointer",
        backgroundColor: "transparent",
        border: "none"
      }}>⟨</button>

      <img src={imagenes[indice]} alt="imagen" style={{
        width: "600px",
        height: "auto",
        borderRadius: "10px"
      }} />

      <button onClick={siguiente} style={{
        fontSize: "2rem",
        cursor: "pointer",
        backgroundColor: "transparent",
        border: "none"
      }}>⟩</button>
    </div>
  </>
    )
}
export default Carrusel