import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const College = () => {
  return (
    <div style={{
      textAlign: 'center'
    }}>
      <h2>College</h2>
      <NavLink to='/'>Go Back To HomePage</NavLink>
      <div className='college' >
        <NavLink className='clg' to='' >Student</NavLink>
        <NavLink className='clg' to='department'>Departments</NavLink>
        <NavLink className='clg' to='detail'>College Details</NavLink>
      </div>
      <Outlet className='clgChild' />
    </div>
  )
}

export default College