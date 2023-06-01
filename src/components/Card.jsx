import React from 'react'


const Card = ({ input1, input2 }) => {
  return (
    <div className={"card"}> 
        <h3>Información enviada:</h3>
        <p>Nombre: {input1}</p>
        <p>Deporte Favorito: {input2}</p>
    </div>
  )
}

export default Card