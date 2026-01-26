import React from 'react'
import UseCustomChild from './UseCustomChild'

const UseCustom = () => {
    const [value,toggleValue] =UseCustomChild(true)
  return (
    <>
     {value?  <h1>Custom Hook</h1> : null}
    <button onClick={()=>toggleValue(!value)}>Toggle Heading</button>
    <br /><br />
    <button onClick={()=>toggleValue(true)}>Show Heading</button>
    <br /><br />
    <button onClick={()=>toggleValue(false)}>Hide Heading</button>
    </>
  )
}

export default UseCustom