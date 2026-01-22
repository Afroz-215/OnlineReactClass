import React, { useState } from 'react'

const Derived = () => {
    const [user,setUser]=useState()
    const [users,setUsers] =useState([])

    const handleSetUser=(()=>{
        setUsers([...users,user])
        setUser("")
    })
  return (
    <div>
        <h3>Total User :{users.length}</h3>
        <h3>Last User :{users[users.length-1]}</h3>
        <h3>Unique User: {[...new Set(users)].length}</h3>

        <input type="text" value={user} onChange={(e)=>setUser(e.target.value)}  />
        <button onClick={handleSetUser}  >Add User</button>
        {users.map((item,i)=>{
          return  <h3 key={i}>{item}</h3>
        })}

    </div>
  )
}

export default Derived