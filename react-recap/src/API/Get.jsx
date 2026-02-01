// import React, { useEffect, useState } from 'react'

// const Get = () => {
//     const [data,setData] = useState([])
//     useEffect(() => {
//         getUsersData();
//     }, [])

//     async function getUsersData() {
//         const url = await fetch('https://dummyjson.com/users')
//         let response =  await url.json()
//         console.log(response)
//         setData(response.users)
//     }
//     return (
//         <div>
//          <h1>Fetch Data from API</h1>
//          {
//             data.map((user)=>(
//                 <h3 key={user.id}>{user.firstName}</h3>
//             ))
//          }

//         </div>
//     )
// }

// export default Get


import React, { useEffect, useState } from 'react'

const Get = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getUsersData()
  }, [])

  async function getUsersData() {
    try {
      setLoading(true)
     await new Promise(resolve => setTimeout(resolve, 3000))
      const response = await fetch('https://dummyjson.com/users')

      if (!response.ok) {
        throw new Error('Failed to fetch users')
      }

      const result = await response.json()
      setData(result.users)

    } catch (err) {
      setError(err.message)

    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h1>Fetch Data from API</h1>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {
        !loading && !error &&
        data.map((user) => (
          <h3 key={user.id}>{user.firstName}</h3>
        ))
      }
    </div>
  )
}

export default Get
