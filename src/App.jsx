
import './App.css'
import Card from './components/Card'
import React, { useState } from 'react';

function App() {

  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleInput1Change = (event) => {
    setInput1(event.target.value);
  };

  const handleInput2Change = (event) => {
    setInput2(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validar el primer input
    if (input1.length < 3) {
      setError('El primer input debe tener al menos 3 caracteres');
      return;
    }

    // Validar el segundo input
    if (input2.length < 6) {
      setError('El segundo input debe tener al menos 6 caracteres');
      return;
    }

    // Aquí puedes realizar alguna acción con los datos enviados
    setSubmitted(true);
  };


  return (
    <>
      
      <div className='formulario'>
        <h3>Elige un deporte</h3> 
        <form onSubmit={handleSubmit}>
          <label>  Nombre: </label>
      
          <input type="text" value={input1} onChange={handleInput1Change} />
     
          <br />
          <label>  Deporte:</label>
      
          <input type="text" value={input2} onChange={handleInput2Change} />
      
           <br />
      <button type="submit">Enviar</button>
      {error && <p className={"error"}>{error}</p>}
       </form>


       {
       
       submitted &&
       
       <Card  input1={input1} input2={input2} />

        }

      
      </div>
    </>
  )
}

export default App
