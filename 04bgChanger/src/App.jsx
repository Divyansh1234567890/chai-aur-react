import { useState } from 'react'
function App() {
  const [color, setColor] = useState("#843934")

  return (
    <div 
    style={{background:color, height:"100vh", width:"100vw"}}
    >
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-blue-600 px-3 py-2 rounded-3xl">
    <button 
    onClick={(e)=>setColor("red")}
    className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
    style={{backgroundColor:"red"}}
    >Red</button>

<button 
 onClick={(e)=>setColor("green")}
className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
    style={{backgroundColor:"green"}}
    >Green</button>

<button 
 onClick={(e)=>setColor("blue")}
className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
    style={{backgroundColor:"blue"}}
    >Blue</button>

<button
 onClick={(e)=>setColor("yellow")}
 className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
    style={{backgroundColor:"yellow"}}
    >Yellow</button>

<button 
 onClick={(e)=>setColor("purple")}
className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
    style={{backgroundColor:"purple"}}
    >Purple</button>

<button
 onClick={(e)=>setColor("indigo")}
 className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
    style={{backgroundColor:"indigo"}}
    >Indigo</button>

    </div>
    </div>
    </div>
  )
}

export default App
