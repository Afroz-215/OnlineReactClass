import React, { useState } from 'react'
import LiftChild1 from './LiftChild1'
import LiftChild2 from './LiftChild2'

const LiftingState = () => {
    const [user,setUser]=useState()
  return (
    <div>
        <LiftChild1 update={setUser} />
        <LiftChild2 val={user} />
    </div>
  )
}

export default LiftingState