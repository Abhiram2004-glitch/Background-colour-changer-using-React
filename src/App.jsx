import './App.css'
import { useState } from "react"; 
import { useNavigate } from "react-router-dom";

function App() {
  const [color, setColor] = useState('skyblue')

  return (
    <>
      <div className='w-full h-screen duration-500' style={{backgroundColor: color}}>
      </div>
      <div className='fixed flex flex-wrap justify-center bottom-12 left-0 right-0 mx-auto px-5 bg-white gap-4 py-2 rounded-3xl w-fit'>
      <button onClick={() => setColor("red")} className='outline-none px-4 rounded-full py-3 m-0 text-white' style={{backgroundColor: "red"}}>Red</button>
        <button onClick={() => setColor("blue")} className='outline-none px-4 rounded-full py-3 m-0 text-white' style={{backgroundColor: "blue"}}>Blue</button>
        <button onClick={() => setColor("black")} className='outline-none px-4 rounded-full py-3 m-0 text-white' style={{backgroundColor: "black"}}>Black</button>
        <button onClick={() => setColor("green")} className='outline-none px-4 rounded-full py-3 m-0 text-white' style={{backgroundColor: "green"}}>Green</button>
        <button onClick={() => setColor("orange")} className='outline-none px-4 rounded-full py-3 m-0 text-white' style={{backgroundColor: "orange"}}>Orange</button>
      </div>
    </>
  )
}

export default App
