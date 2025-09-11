import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}></div>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2' >
        <div className='flex flex-wrap justify-center gap-3 bg-white shadow-lg px-3 py-2 rounded-2xl'>
          {/* onClick needs a function not what the function returns */}
          <button onClick={() => setColor("red")} className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor: "red"}}>Red</button>
          <button onClick={() => setColor("green")} className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor: "green"}}>Green</button>
          <button onClick={() => setColor("blue")} className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor: "blue"}}>Blue</button>
          <button onClick={() => setColor("orange")} className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor: "orange"}}>Orange</button>
          <button onClick={() => setColor("purple")} className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor: "purple"}}>Purple</button>
        </div>
      </div>
    </>
  )
}

export default App
