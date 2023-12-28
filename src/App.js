import React from 'react'
import {useState} from 'react'
const App = () => {
  let [c,setC]=useState(0)
  let fun=()=>{
    setC((c)=>c+1)
    setC((c)=>c+1)
    setC((c)=>c+1)
    setC((c)=>c+1)
    setC((c)=>c+1)
   
  }
  return (
    <div>
      <div>{c}</div>
      <button onClick={fun}>Click</button>
    </div>
  )
}

export default App