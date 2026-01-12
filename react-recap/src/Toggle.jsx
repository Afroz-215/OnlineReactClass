// import React, { useState } from 'react'

// const Toggle = () => {
//     const [count,setCount ] =useState(0)
//     let [color,setColor] = useState()
//     const [isIncrease, setIsIncrease ] =useState(true)

//     function bahave(){
//         setCount(isIncrease ? count+1 : count-1)
//         setIsIncrease(!isIncrease)

//     }

//     function Color(){
//      setColor(count%2===0 ? "green " : "blue " )
//     }



//   return (
//     <div>
//         <h1 style={{color: color}}>{count}</h1>
//         <button  onClick={()=> {bahave();
//             Color();
//         }}>Action</button>
//     </div>
//   )
// }

// export default Toggle


// import React, { useState } from 'react'

// const Toggle = () => { 
//     const [count,setCount] =useState(0)
//     const [plus, setPlus] =useState(true)

//     function increase(){
//         setCount(plus? count+1 :count+2 )
//         setPlus(!plus)

//     }

//     const color = count === 0 ? "black" : "green" ;




//   return (
//     <div>
//         <p style={{ color}}>{count}</p>
//         <button onClick={increase}>Action</button>
//         <button onClick={()=>{setCount(0)}}>Reset</button>
//     </div>
//   )
// }

// export default Toggle


// import React, { useState } from 'react'

// const Toggle = () => {
//     const [text,setText] =useState("Hello");
//     const [state,setState] =useState(true)

//     const color = text ==="Hello" ? "Black" : "Blue "
//   return (
//     <div>
//         <h1 style={{ color}} onClick={()=>{
//             setText(state ? "Hello": "Heyyyyyy")
//             setState(!state)
//         }}>{text}</h1>

//     </div>
//   )
// }

// export default Toggle


// import React, { useState } from 'react'

// const Toggle = () => {
//   const [count, setCount] = useState(0)
//   const [isLocked, setIsLocked] = useState(true)
//   return (
//     <div>
//       <h1 style ={{color :isLocked ?  "grey" : "black"}}>{count}</h1>
//       <button onClick={() => {
//         if (isLocked) return;
//         setCount(count + 1);
//       }}>Increase </button>
//       <button onClick={() => { setIsLocked(!isLocked) }}>{isLocked ? "Unlock" : "Lock"}</button>
//     </div>
    
//   )
// }

// export default Toggle


import React, { useState } from 'react'

const Toggle = () => {
  const display=useState("hello")
  const [isShowing, setIsShowing] =useState(true)
   return (
    <div>
      <h1>{isShowing ? display : null}</h1>
      <button onClick={()=>{setIsShowing(!isShowing);}}>btn</button>
    </div>
  )
}

export default Toggle