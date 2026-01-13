// import React from 'react'
// import PropChild from './PropChild'

// const Props = (data) => { 
//     // let name ="Khshi"
//     // let age =29
//     // let city ="Rewa"  

//     let val={
//         name: "sheetal",
//         age: 22,
//         DOB: new Date(2002,10,27),
//         email: "sheetal@kooko.com",
//         city:"bhogao"
//     }

//   return (
//     <div>
//        {/* <PropChild name="Afroz" age ={22} city="Delhi" /> */}
//        {/* <p>{data.name}</p> */}
//        {/* <PropChild name={name} age={age} city={city} /> */}
//        <PropChild val={val} />

//     </div>
//   )
// }

// export default Props



// import React, { useState } from 'react'
// import PropChild from './PropChild'

// const Props = () => {

//  const [show, setShow] = useState()
//   return ( 
//     <div>

//      <PropChild name={show}  />
//      <button onClick={()=>setShow("afroz")}>btn</button>



//     </div>
//   )
// }

// export default Props


// Pass setaState in Prop 

// import React, { useState } from 'react'
// import PropChild from './PropChild'

// const Props = () => {
//   const [count,setCount ] =useState(0)
//   return (
//     <div>
//       <h1>{count}</h1>
//      <PropChild setCount ={setCount}  />
     
//     </div>
//   )
// }

// export default Props  


// Pas sFunction as prop 

// import React, { useState } from 'react'
// import PropChild from './PropChild';

// const Props = () => {
//   const [count,setCount] =useState(0);
 
//   function counter(){
//     setCount(count+1)
//   }

//   return (
//     <div>
//       <h1>{count}</h1>
//       {/* <button onClick={counter}> counter</button> */}
//       <PropChild counter={counter} />
//     </div>
//   )
// }

// export default Props


// Default Prop

// import React from 'react'
// import { PropChild } from './PropChild'

// const Props = () => {
//   return (

//     <div>
//       <PropChild name="dudu" />
//       <PropChild name="Bubu "/>
//       <PropChild  />
//     </div>
//   )
// }

// export default Props

//Style

// import React from 'react'
// import PropChild from './PropChild'

// const Props = () => {
//   return (
//     <div>

//     <PropChild>

//       <h1>hello</h1>

//     </PropChild>

//     </div>
//   )
// }

// export default Props



// import React, { useState } from 'react'

// const Props = () => {
//   const [color,setColor] = useState("blue")

// const handleChange=(e)=>{
//     setColor(e.target.value)
// }

//   return (
//     <div>
//       <div style={{border:"2px solid black",height:"250px",width:"170px",background:color}}></div>
//       <br />
//       <input type="text" placeholder='Enter Color' onChange={handleChange} />
//     </div>
//   )
// }

// export default Props




import React, { useState } from 'react'
import PropChild from './PropChild'

const Props = () => {
  const [color,setColor] = useState()
  
const handleChange=(e)=>{
    setColor(e.target.value)
}

  return (
    <div>
      <div style={{border:"2px solid black",height:"250px",width:"170px",background:color}}></div>
      <br />
      <PropChild handleChange={handleChange} />
    </div>
  )
}

export default Props