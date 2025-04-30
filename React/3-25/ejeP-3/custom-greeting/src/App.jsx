import { useState, useRef } from 'react'
import './App.css'
import Hello from './components/Hello'

function App() {

  const [ name, setName ] = useState('');
  let nameRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(nameRef.current.value);
  };

  return (
    <>
      <form onSubmit={ handleSubmit }>
        <label>Name:</label>
        <br></br>
        <input placeholder='Your name' ref={ nameRef }></input>
        <br></br>
        <button type='submit'>Submit</button>
      </form>
      { name && <h2>Hi, { name }!</h2>}
      <Hello name='Francisco'></Hello>
    </>
  )
}

export default App
