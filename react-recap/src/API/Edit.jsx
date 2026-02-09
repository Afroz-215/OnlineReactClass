import React, { useEffect, useReducer } from 'react'
import { useNavigate, useParams } from 'react-router'

const Edit = () => {
  const intialVal={name:'',age:'',email:''
  }
  function reducer(state,action){
   switch(action.type){
    case 'showDta':
      return action.payload
      case'change' :
       return{...state,[action.field]:action.val}
      default:
        return state
   }
  }

  const url='http://localhost:3000/users/'
  const [state,dispatch]=useReducer(reducer,intialVal);
  const {name,age,email}=state
  const {id}=useParams()
  const navigate=useNavigate()

    useEffect(()=>{
         getUsrData()
    },[])

    const getUsrData=(async ()=>{
       const response =await fetch(url+id)
       const result =await response.json()
       dispatch({type:'showDta',payload:result})
    })

    const updateUser=(async()=>{
      console.log(id,name,age,email)
      const res=await fetch(url+id,{
        method:'Put',
        body:JSON.stringify({name,age,email})
      })
      const result=await res.json();
      console.log(result)
      if(result) alert('Data updated');
      navigate('/')
    })
  return (
    <div>
         <input type="text" value={id}   placeholder='enter id' 
        /><br /><br />
        <input type="text" value={state.name}  placeholder='enter name' 
        onChange={(e)=>dispatch({val:e.target.value,field:'name',type:'change'})} 
         /><br /><br />
        <input type="text" value={state.age}  placeholder='enter age' 
        onChange={(e)=>dispatch({val:e.target.value,field:'age',type:'change'})} 
        /><br /><br />
        <input type="text" value={state.email}  placeholder='enter email' 
        onChange={(e)=>dispatch({val:e.target.value,field:'email',type:'change'})} 
        /><br /><br />
        <button onClick={updateUser} >Update User</button>
    </div>
  )
}

export default Edit