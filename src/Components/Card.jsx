import "../styles/card.css"
const Card = ({ nombre, cancion }) => {
  return (
    <div className="card">
        <h3>Hola {nombre}!</h3>
        <h4>Tu cancion favorita es {cancion}</h4>
    </div>
  )
}

export default Card