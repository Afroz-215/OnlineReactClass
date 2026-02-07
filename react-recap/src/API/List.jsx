// import React, { useState } from 'react'

// const List = () => {
//   const [name, setName] = useState('')
//   const [id, setId] = useState('')
//   const [age, setAge] = useState('')
//   const [email, setEmail] = useState('')

//  async function createUser(){
//   console.log(name,id,age,email)
//   const response=await fetch('http://localhost:3000/users',{
//     method:'Post',
//     body:JSON.stringify({name,id,age,email})
//   })
//   const result =await response.json();

//  }

//   return (
//     <div style={{ textAlign: 'center' }}>
//       <h1>Add User</h1>
//       <input type="text"
//         onChange={(e) => setName(e.target.value)}
//         placeholder='Enter Name' /><br /><br />
//       <input type="text"
//         onChange={(e) => setId(e.target.value)}
//         placeholder='Enter Id' /><br /><br />
//       <input type="text"
//         onChange={(e) => setAge(e.target.value)}
//         placeholder='Enter Age' /><br /><br />
//       <input type="text"
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder='Enter Mail' /><br /><br />
//       <button onClick={createUser} >Add User </button>
//     </div>
//   )
// }

// export default List



import React, { useEffect, useReducer, useState } from 'react'

const List = () => {

  const intialVal = { id: "", name: "", age: "", email: "" }
  function reducer(state, action) {
    switch (action.type) {
      case 'change':
        return { ...state, [action.field]: action.val }
      case 'reset':
        return intialVal
      default:
        return state

    }
  }
  const [data, setData] = useState([])
  const [state, dispatch] = useReducer(reducer, intialVal)
  const { id, name, age, email } = state
  const url = 'http://localhost:3000/users';

  const getUserData = async () => {
    const response = await fetch(url);
    const result = await response.json()
    setData(result)
  }

  useEffect(() => {
    getUserData()
  }, [])

  const addUser = async () => {
    const response = await fetch(url, {
      method: 'Post',
      body: JSON.stringify({ id, name, age, email })
    });
    const result = await response.json()
    getUserData()
    dispatch({ type: 'reset' })
  }

 const deleteUser = async(id)=>{
    const response =await fetch(url+'/'+Number(id),{
      method:'Delete'
    })
    getUserData()
 }

  

  return (
    <div>
      {data.map((a) => (
        <ul className='ul' key={a.id}>
          <li>{a.id}</li>
          <li>{a.name}</li>
          <li>{a.age}</li>
          <li>{a.email}</li>
          <li><button onClick={(() => deleteUser(a.id))}>delete</button></li>
        </ul>
      ))
      }

      <input value={id} type="text" onChange={(e) => dispatch({ val: e.target.value, type: 'change', field: 'id' })} /><br /><br />
      <input type="text" value={name} onChange={(e) => dispatch({ val: e.target.value, type: 'change', field: 'name' })} /><br /><br />
      <input type="text" value={age} onChange={(e) => dispatch({ val: e.target.value, type: 'change', field: 'age' })} /><br /><br />
      <input type="text" value={email} onChange={(e) => dispatch({ val: e.target.value, type: 'change', field: 'email' })} /><br /><br />
      <button onClick={addUser}>Add Data</button>

    </div>
  )
}

export default List