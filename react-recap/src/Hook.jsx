// // Prevent extra rendering of component on state 
// import React, { useEffect, useState } from 'react'

// const Hook = () => {
//     const [count,setCount]=useState(0)

//     function method(){
//         console.log("first")
//     }

//     // useEffect(()=>{
//     //     method()
//     // },[count])
//     method()

//   return (
//     <div>
//         <h3>{count}</h3>
//         <button onClick={()=>setCount(count+1)}>increase</button>
//     </div>
//   )
// }

// export default Hook


//API CALLING

import React, { useEffect, useState } from "react";

function Hook() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
    }

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>User List</h2>
      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default Hook;
