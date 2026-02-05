// // import React, { useEffect, useState } from 'react'

// // const Get = () => {
// //     const [data,setData] = useState([])
// //     useEffect(() => {
// //         getUsersData();
// //     }, [])

// //     async function getUsersData() {
// //         const url = await fetch('https://dummyjson.com/users')
// //         let response =  await url.json()
// //         console.log(response)
// //         setData(response.users)
// //     }
// //     return (
// //         <div>
// //          <h1>Fetch Data from API</h1>
// //          {
// //             data.map((user)=>(
// //                 <h3 key={user.id}>{user.firstName}</h3>
// //             ))
// //          }

// //         </div>
// //     )
// // }

// // export default Get


// import React, { useEffect, useState } from 'react'
// import './Style.css'

// const Get = () => {
//   const [data, setData] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)
//   const url = 'http://localhost:3000/users';

//   useEffect(() => {
//     getUsersData()
//   }, [])

//   async function getUsersData() {
//     try {
//       setLoading(true)
//       //  await new Promise(resolve => setTimeout(resolve, 3000))
//       // const response = await fetch('https://dummyjson.com/users')

//       const response = await fetch(url)

//       if (!response.ok)
//         throw new Error('Failed to fetch users')

//       const result = await response.json()
//       // setData(result.users)
//       setData(result)
//     } catch (err) { setError(err.message) }
//     finally { setLoading(false) }
//   }
  

//     async function deleteUser(id) {
//       let response = await fetch(url + '/' + id, {
//         method: 'delete'
//       })
//       const result = await response.json();
//       if (result) alert('record deleted')
//       getUsersData()
     
//     }


  

//   return (
//     <div>
//       <h1>Fetch Data from API</h1>

//       {loading && <p>Loading...</p>}
//       {error && <p>{error}</p>}

//       <ul className='ul-header'>
//         <li>ID</li>
//         <li>NAME</li>
//         <li>AGE</li>
//         <li>MAIL</li>
//         <li>ACTION</li>
//       </ul>

//       {
//         !loading && !error &&
//         data.map((user) => (
//           //   <h3 key={user.id}>{user.firstName}</h3>
//           //  <h3 key={user.id}>{user.name}</h3>

//           <ul className='ul' key={user.id}>
//             <li >{user.id}</li>
//             <li >{user.name}</li>
//             <li >{user.age}</li>
//             <li >{user.email}</li>
//             <li><button onClick={()=>deleteUser(user.id)}>Delete</button></li>
//           </ul>
//         ))
//       }
//     </div>
//   )
// }

// export default Get

import React, { useEffect, useState } from 'react'
import './Style.css'

const Get = () => {
  const [data,setData] =useState([]);

  const getUserData=(async()=>{
    try{
      const response =await fetch('http://localhost:3000/users')
      if(!response.ok) throw new error (error.message)
    const result =await response.json();
    setData(result)
    }catch(err){
       Seterror(err.message)
    }
  })

  useEffect(()=>{
    getUserData();
  },[])
  
  return (
    <div>
       <ul className='ul-header'>
     <li>ID</li>
     <li>NAME</li>
     <li>AGE</li>
     <li>EMAIL</li>
     </ul>
  { data.map((a)=>(
       <ul key={a.id} className='ul'>
     <li>{a.id}</li>
     <li>{a.name}</li>
     <li>{a.age}</li>
     <li>{a.email}</li>
     </ul>
    ))
  }
    </div>
  )
}

export default Get