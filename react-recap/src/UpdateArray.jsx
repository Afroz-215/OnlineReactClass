// import React, { useState } from 'react'

// const UpdateArray = () => {
//     const [name, setName] = useState(['afroz', 'ruheen', 'shajiya'])

//     function handleUser(data) {
//         // setName([...name,data])
//         name[name.length-1]=data
//         setName([...name])
//     }
//     return (

//         <div>
//             <h1>Update Array in State</h1>
//             {/* <input type="text" onChange={(e)=>handleUser(e.target.value)} placeholder='Enter name ' /> */}
//             <input type="text" placeholder='Enter name ' onKeyDown={(e) => {
//                     if (e.key === 'Enter') {
//                         handleUser(e.target.value)
//                         e.target.value = ''   // input clear karne ke liye
//                     }
//                 }} 
//             />
//             {name.map((a, b) => (
//                 <h3 key={b}>{a}</h3>
//             )

//             )}
//         </div>
//     )
// }

// export default UpdateArray


import React,{useState} from 'react'

const UpdateArray = () => {
    const [user, setUser] =useState ([
        { name: 'khushi', age: "26" },
        { name: 'komal', age: "24" },
        { name: 'keerti', age: "20" }
    ])

    function handleUser(
        age) {
        // setName([...name,data])
        // user[user.length-1].name=name
        user[user.length-1].age=age
        setUser([...user])
      }
    return (
        <div>
            <input type="text" placeholder='Enter value' onChange={(e)=>handleUser(e.target.value)} />
            {user.map((a,b)=>(
                <h3 key={b}>{a.name},{a.age},    [{b}]</h3>

            ))}
        </div>
    )
}
 export default UpdateArray