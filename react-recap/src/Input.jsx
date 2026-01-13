import React, { useState } from 'react'

const Input = () => {
    const [val,setVal] =useState()

  return (
    <div>
        <h1>{val}</h1>
        <input type="text" value={val} onChange={(e)=>{setVal(e.target.value)}} />
        <button onClick={()=>{setVal("")}}>clear</button>
    </div>
  )
}

export default Input