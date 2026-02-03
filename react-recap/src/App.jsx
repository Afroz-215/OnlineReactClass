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

// import React from 'react'
// // import Hook from './Hook'
// // import LifeCycle from './LifeCycle'
// // import Ref from './Ref'
// import FormStatus from './FormStatus'
// import Transition from './Transition'
// import Derived from './Derived'
// import LiftingState from './LiftingState'

// const App = () => {
//   return (
//     <div>
//       {/* <Hook/> */}
//       {/* <LifeCycle/> */}
//       {/* <Ref/> */}
//       {/* <FormStatus/> */}
//       {/* <Transition/> */}
//       {/* <Derived/> */}
//       <LiftingState/>
//     </div>
//   )
// }

// export default App


// import React, { useState } from "react";

// const InputBox = ({ value, onChange, label }) => {
//   return (
//     <div>
//       <label>{label}</label>
//       <input
//         value={value}
//         onChange={(e) => onChange(e.target.value)}
//       />
//     </div>
//   );
// };

// const App = () => {
//   const [num, setNum] = useState("");

//   return (
//     <>
//       <InputBox
//         label="Normal"
//         value={num}
//         onChange={setNum}
//       />

//       <InputBox
//         label="Double"
//         value={num ? num * 2 : ""}
//         onChange={(val) => setNum(val / 2)}
//       />
//     </>
//   );
// };

// export default App;


// import React from 'react'
// import UpdateObjectInState from './UpdateObjectInState'
// import UpdateArray from './UpdateArray'
// import Action from './Action'
// import UseId from './UseId'
// import Reducer from './Reducer'
// import UseCustom from './useCustom'

// const App = () => {
//   return (
//     <div>
//       {/* <UpdateObjectInState/> */}
//       {/* <UpdateArray/> */}
//       {/* <Action/> */}
//       {/* <UseId/> */}
//       {/* <Reducer/> */}
//       {/* <UseCustom/> */}

//     </div>
//   )
// }

// export default App



// import React, { useState } from 'react'
// import CollegeComponent from './CollegeComponent'
// import { SubjectContext } from './ContextData'

// const App = () => {
//   const [subject,setSubject]=useState('English')
//   return (
//     <div style={{ backgroundColor: 'yellow', padding: 10 }}>
//       <SubjectContext.Provider value={subject}>
//         <select onChange={(e)=>setSubject(e.target.value)}>
//           <option value="">Select Subject</option>
//           <option value="History">History</option>
//           <option value="Geography">Geography</option>
//           <option value="Economic">Economics</option>
//         </select>
//         <button onClick={()=>setSubject('')}>CLear context</button>
//         <h1>Context API</h1>

//         <CollegeComponent />
//       </SubjectContext.Provider>

//     </div>
//   )
// }

// export default App



// import React from 'react'
// import { Routes, Route } from 'react-router'
// import Navbar from './Navbar'
// import HomePage from './HomePage'
// import LOginPage from './LOginPage'
// import AboutPage from './AboutPage'
// import PageNotFound from './PageNotFound'
// import College from './College'
// import Student from './Student'
// import Department from './Department'
// import Detail from './Detail'
// import UserPage from './UserPage'
// import UserList from './UserList'

// const App = () => {
//   return (
//     <div>

//       <Routes>
//         <Route  element={<Navbar />}>
//           <Route path='/' element={<HomePage />} />
//           <Route path='/login' element={<LOginPage />} />
//           <Route path='/about' element={<AboutPage />} />
//           <Route path='/users' element={<UserPage/>} />
//           <Route path='users/:id' element={<UserList/>}/>
//         </Route>

//         <Route path='/college' element={<College />}>
//           <Route index element={<Student />} />
//           <Route path='department' element={<Department />} />
//           <Route path='detail' element={<Detail />} />

//         </Route>
//         <Route path='/*' element={<PageNotFound />} />
//       </Routes>

//     </div>
//   )
// }

// export default App




// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import UserPage from "./UserPage";

// // function App() {
// //   return (
// //       <Routes>
// //         <Route path="/user" element={<UserPage />} />
// //         {/* Dynamic route with :id */}
// //         <Route path="/user/:id" element={<UserPage />} />
// //       </Routes>
  
// //   );
// // }

// // export default App;



import React  from 'react'
import {Routes,Route, NavLink} from 'react-router-dom'
import Get from './API/Get'
import List from './API/List'

const App = () => {
  return (
    <div>
      <ul>
        <li>
        <NavLink to >Data</NavLink> </li>
        <li><NavLink>List</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path='/' element={<Get/>} />
        <Route path='/add' element={<List/>} />
      </Routes>
    </div>
  )
}

export default App