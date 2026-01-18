import React, { useEffect, useState } from 'react'
import Phase from './Phase'

const LifeCycle = () => {
    const [count,setCount] =useState(0)
    const [data ,setData] =useState(9)
    const [show, setShow] =useState(true)

   
  return (
    <div>
        { show ? <Phase count={count} data={data} />:null }
        <button onClick={()=>setCount(count+1)}>Counter</button>
        <button onClick={()=>setData(data+1)} >Data</button>
        <button onClick={()=>setShow(!show)}>Toggle</button>
    </div>
  )
}

export default LifeCycle