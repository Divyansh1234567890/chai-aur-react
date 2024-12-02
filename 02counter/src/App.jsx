import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(0);
  const addValue = ()=>{
    if(counter<=18)
    // setCounter(counter+1); // if we want to increse counter by one step then follow this method
    
    setCounter(prevCounter=>prevCounter+1);
    setCounter(prevCounter=>prevCounter+1);
    setCounter(prevCounter=>prevCounter+1);
    setCounter(prevCounter=>prevCounter+1);

  }
  const removeValue =()=>{
    if(counter>=0)
    setCounter(counter-1);
  }
  return (
   <>
   <h1>Chai aur react</h1>
   <h2>counter value:{counter+1}</h2>
   <button
    onClick={addValue}>
    Add value{counter+1}</button>
   <br></br>
   <button
   onClick={removeValue}>
   Remove value{counter+1}
   </button>
   </>
  )
}

export default App
