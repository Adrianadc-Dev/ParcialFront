import { useState } from "react";
import Card from "./Card";
import "../styles/form.css"

const Form = () => {
    const [usuario, setUsuario]= useState({
        nombre: "",
        cancion: ""
    })
    const [mostrar, setMostrar] = useState(false);
    const [err, setErr] = useState(false);
    const handleSubmi =(event)=>{
        event.preventDefault();
        if(usuario.nombre.trim().length>=3 && usuario.cancion.length>=6){
            setMostrar(true);
            setErr(false);
        }else{
            setErr(true);
        }

    }
    console.log(usuario);
  return (
    <>
      <form className= "form" onSubmit={handleSubmi}>
        <label>Escribe tu nombre</label>
        <input
          type="text"
          value={usuario.nombre}
          onChange={(event) =>
            setUsuario({ ...usuario, nombre: event.target.value })
          }
        />
    
        <label>Cancion favorita</label>
        <input
          type="text"
          value={usuario.cancion}
          onChange={(event) =>
            setUsuario({ ...usuario, cancion: event.target.value })
          }
        />
        <button className="button_enviar">Enviar</button>
        {err ? (
          <h4 style={{ color: "red" }}>Por favor chequea que la información sea correcta</h4>
        ) : null}
      </form>
      <div>
      {mostrar ? (
        <Card nombre={usuario.nombre}  cancion={usuario.cancion}/>
      ) : null }
      </div>
    </>
  );
}

export default Form