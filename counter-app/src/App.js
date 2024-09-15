import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(1)
  const [disable, setDisable] = useState(false)
  const [disableIncrement, setDisableIncrement] = useState(false)

  function increment(){
    setCounter(counter +1)
    if(disable === true){
      setDisable(false)
    }

    if(counter === 29){
      setDisableIncrement(true)
    }
  }

  function decrement(){
    setCounter(counter - 1)
    if(counter === 1){
      setDisable(true)
    }

    if(disableIncrement === true){
      setDisableIncrement(false)
    }
  }
  return (
    <>

      <h1>Hello your count is: {counter}</h1>
      <h5>This counter has limitation higher will be 30 and lower will be 0</h5>
      <button onClick={increment} disabled={disableIncrement}>Increase Count: {counter}</button>
      <button onClick={decrement} disabled={disable}>Decrease count: {counter}</button>
    </>
  );
}

export default App;
