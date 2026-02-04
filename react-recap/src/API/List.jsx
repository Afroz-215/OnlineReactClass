import React, { useState } from 'react'

const List = () => {
  const [name, setName] = useState('')
  const [id, setId] = useState('')
  const [age, setAge] = useState('')
  const [email, setEmail] = useState('')

 async function createUser(){
  console.log(name,id,age,email)
  const response=await fetch('http://localhost:3000/users',{
    method:'Post',
    body:JSON.stringify({name,id,age,email})
  })
  const result =await response.json();

 }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Add User</h1>
      <input type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder='Enter Name' /><br /><br />
      <input type="text"
        onChange={(e) => setId(e.target.value)}
        placeholder='Enter Id' /><br /><br />
      <input type="text"
        onChange={(e) => setAge(e.target.value)}
        placeholder='Enter Age' /><br /><br />
      <input type="text"
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Enter Mail' /><br /><br />
      <button onClick={createUser} >Add User </button>
    </div>
  )
}

export default List