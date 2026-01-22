// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// // import './index.css'

// function App() {
  
//   // function callFun(){
//   //   alert("function alert")
//   // }
 
//   const callFun =(() => {
//     alert("heeloooo")
//   })

//  return (
//   <>
// <img src="https://images.unsplash.com/photo-1763899910806-43a13994b44f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Anil Sidhu" className='Photo' />  
//  <ul>
//  <li>invnt something</li>
//  <li>code something</li>
//  <li>you do you do </li>
//  </ul>

//  <button onClick={callFun}>Click Me </button>
//   </>
//  )
 
 
// }

//  export default App
          

// Language: JavaScript (React)

// import React, { useState } from 'react';

// function App() {
//   // State to hold input value
//   const [inputValue, setInputValue] = useState('');

//   // Handle change in input field
//   const handleChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   // Handle form submission (optional)
//   const handleSubmit = (event) => {
//     event.preventDefault(); // Prevent page reload
//     alert(`You entered: ${inputValue}`);
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Enter text:
//           <input
//             type="text"
//             value={inputValue}
//             onChange={handleChange}
//             placeholder="Type here"
//           />
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//       <p>Current input: {inputValue}</p>
//     </div>
//   );
// }

// export default App;


// import React, { useState } from 'react'
// import Counter from './Counter'
// import Toggle from './Toggle'
// import Props from './Props'

// const App = () => {

//   const [count , setCount ] = useState(0)


//   return (
//     <div>
//       {/* <button onClick={()=> setCount(count+1)}>click</button>
//       <h1>Your Count is : {count}</h1> */}
//       {/* <Counter/> */}
//       {/* <Toggle/> */}
//       <Props  name="Afroz" />
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import Input from './Input.jsx'
// import UncontroledComponenet from './assets/UncontroledComponenet.jsx'
// import Checkbox from './Checkbox.jsx'
// import RadioAndDropdown from './RadioAndDropdown.jsx'
// import Table from './Table.jsx'
// import Data from './Data.jsx'
// import Clock from './Clock.jsx'

// const App = () => {
//   return (
//     <div>
//       {/* <Input/> */}
//       {/* <UncontroledComponenet/> */}
//       {/* <Checkbox/> */}
//       {/* <RadioAndDropdown/> */}
//       {/* <Table /> */}
//       {/* <Data/> */}
//       <Clock/>
//     </div>
//   )
// }

// export default App

// import React , {useEffect, useState}from 'react'

// const App = () => {
//    const [width, setWidth] = React.useState(window.innerWidth);

//   window.addEventListener("resize", () => {
//     setWidth(window.innerWidth+1);
//     console.log("first")
//   });


//   return (
//     <div>
//      <h1>Width: {width}</h1>
//     </div>
//   )
// }

//  export default App

import React from 'react'
// import Hook from './Hook'
// import LifeCycle from './LifeCycle'
// import Ref from './Ref'
import FormStatus from './FormStatus'
import Transition from './Transition'
import Derived from './Derived'
import LiftingState from './LiftingState'

const App = () => {
  return (
    <div>
      {/* <Hook/> */}
      {/* <LifeCycle/> */}
      {/* <Ref/> */}
      {/* <FormStatus/> */}
      {/* <Transition/> */}
      {/* <Derived/> */}
      <LiftingState/>
    </div>
  )
}

export default App