import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    userName:"Divyansh Sharma",
    age:20
  }
  return (
   <>
   <h1 className='bg-green-400 p-4 rounded-xl text-rose-300 mb-4'>Tailwind test </h1>
    <Card userName="Divyansh" button="clickMe"/>
    <Card userName="Sharma"/>
   </>
  )
}

export default App
