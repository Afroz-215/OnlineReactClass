// import React, { useReducer } from 'react'

// const Post = () => {
//     const intialVal ={ id:'',name:'',age:'',email:''}
//     function reducer(state,action){
//          switch (action.type){
//             case 'change' :
//                 return {...state,[action.field]:action.val}

//             case 'reset':
//                 return intialVal
//                 default:
//                     return state
//          }
//     }
//     const [state,dispatch] =useReducer(reducer,intialVal)
//     const {id,name,age,email} =state

//     async function addUser(){
//         const response =await fetch('http://localhost:3000/users',{
//             method:'Post',
//             body: JSON.stringify({id,name,age,email})
//         })
//         const result =await response.json()
//         alert('User Created')
//         dispatch({type: 'reset'})
        

//     }
//    return (
//     <div>
//         <input type="text" value={id} placeholder='enter id' 
//         onChange={(e)=>dispatch({val:e.target.value,field:'id',type:'change'})} /><br /><br />
//         <input type="text" value={name} placeholder='enter name' 
//         onChange={(e)=>dispatch({val:e.target.value,field:'name',type:'change'})} /><br /><br />
//         <input type="text" value={age} placeholder='enter age' 
//         onChange={(e)=>dispatch({val:e.target.value,field:'age',type:'change'})} /><br /><br />
//         <input type="text" value={email} placeholder='enter email' 
//         onChange={(e)=>dispatch({val:e.target.value,field:'email',type:'change'})} /><br /><br />
//         <button onClick={addUser}>Add User</button>
//     </div>
//   )
// }

// export default Post


import React, { useState } from 'react'

const Post = () => {
    const [id, setId] =useState('')
    const [name,setName] =useState('')
    const [age,setAge] =useState('')
    const [email,setEmail] =useState('')

    const addUser=(async ()=>{
        const response =await fetch('http://localhost:3000/users',{
            method:'post',
            body:JSON.stringify({id,name,age,email})
        })
        const result =await response.json()
        alert('user created');
    })

  return (
    <div>
        <input type="text" value={id} onChange={(e)=>setId(e.target.value)} /><br /><br />
         <input type="text" value={name} onChange={(e)=>setName(e.target.value)} /><br /><br />
          <input type="text" value={age} onChange={(e)=>setAge(e.target.value)} /><br /><br />
           <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} /><br /><br />
           <button onClick={addUser}>Add USer</button>


    </div>
  )
}

export default Post