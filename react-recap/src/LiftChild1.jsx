import React from 'react'

const LiftChild1 = ({update}) => {
  return (
    <div>
        <input type="text" onChange={(e)=>update(e.target.value)} name="" id="" />
    </div>
  )
}

export default LiftChild1