import React, { useEffect, useState } from 'react'
import './Style.css'
import { Link } from 'react-router';

const GetAndDelete = () => {
  const [data,setData] = useState([])
  const url ='http://localhost:3000/users';
  
  useEffect(()=>{
    showData()
  },[])
  async function showData() {
    const response =await fetch(url)
    const result = await response.json();
    console.log(result)
    setData(result)
  }

  async function deleteData(id){
     const response=await fetch(url +'/'+id,{
      method:'delete'
     })
     showData()
  }

  return (
    <div>
      <ul className='ul-header'>
        <li>ID</li>
        <li>NAME</li>
        <li>AGE</li>
        <li>EMAIL</li>
      </ul>
      {
        data.map((a)=>{
         return <ul className='ul' key={a.id}>
            <li>{a.id}</li>
            <li>{a.name}</li>
            <li>{a.age}</li>
            <li>{a.email}</li>
            <li><button onClick={()=>deleteData(a.id)}>delete</button>
            <button><Link style={{textDecoration:'none',color:'black'}} to='edit/:id'>Edit</Link></button></li>
          </ul>
        })
      }

    </div>
  )
}

export default GetAndDelete