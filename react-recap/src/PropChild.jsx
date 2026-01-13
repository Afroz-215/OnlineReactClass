// import React from 'react'

// const PropChild = (val) => {
//     const {val : Props} =val;
//     // const PropChild = ({val:Props}) => {
//   return (
//     <div>
//         {/* <h1>{val.name}</h1>
//         <h1>{val.email}</h1> */}
//         <h1>{Props.age}</h1>
//         <h1>{Props.city}</h1>
//     </div>
//   )
// }

// export default PropChild


// import React from 'react'

// const PropChild = (Props) => {
//   return (
//     <div>
//       <h1>{Props.name}</h1>
//     </div>
//   )
// }

// export default PropChild


// Kya hum props m setState 
// ya function ko directly pass kr skate h 


// ans = Yes 

//Pass setaState in Prop 

// import React,{useState} from 'react'

// const PropChild = ({setCount}) => {
//   return (
//     <div>
//       {/* <h1>{count}</h1> */}
//       <button onClick={()=>setCount(count =>count+1)}>counter</button>
//     </div>
//   )
// }

// export default PropChild

// pass prop as function

// import React from 'react'

// const PropChild = ({counter}) => {
//   return (
//     <div>
//       <button onClick={counter}>counter</button>
//     </div>
//   )
// }

// export default PropChild

//Default Prop

// import React from 'react'

// export const PropChild = ({name="User"}) => {
//   return (
//     <div>
//       <h1>Hello, {name}</h1>
//     </div>
//   )
// }


//Style 

// import React from 'react'

// const PropChild = ({children}) => {
//   return (
//     // <div style={{
//     //   height: "50px",
//     //   width: "300px",
//     //   margin:"10px",
//     //   padding: "15px",
//     //   display:"flex",
//     //   alignItems:"center",
//     //   justifyContent:"center",
//     //   border:"5px solid black",
//     //   borderRadius: "5px"

//     // }}>
//     <div>
//       {/* <h1>Hello</h1> */}
      
//       {children}





//     </div>
//   )
// }

// export default PropChild





import React from 'react'

const PropChild = ({handleChange}) => {
  return (
    <div>
      <input type="text" placeholder='Enter Color' onChange={handleChange} />
    </div>
  )
}

export default PropChild