import React from 'react'
import { useParams } from 'react-router'

const Edit = () => {
    const {id}=useParams()
  return (
    <div>
         <input type="text"  placeholder='enter id' 
        /><br /><br />
        <input type="text"  placeholder='enter name' 
         /><br /><br />
        <input type="text"  placeholder='enter age' 
        /><br /><br />
        <input type="text"  placeholder='enter email' 
        /><br /><br />
        <button >Update User</button>
    </div>
  )
}

export default Edit