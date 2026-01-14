import React from 'react'

const UncontroledComponenet = () => {
    const handleForm =(e)=>{
        e.preventDefault()
        alert("form submitted");

        const name =document.getElementById("name").value
        const password =document.getElementById("password").value
        const email =document.getElementById("email").value
        console.log(name,password,email)
        alert(name,password,email)
    }
    return (
        <div>
            <form onSubmit={handleForm}>
                <input type="text" id='name' placeholder='Enter name ' />
                <br />
                <br />
                <input type="password" id='password' placeholder='Enter password ' />
                <br />
                <br />
                <input type="text" id='email'  placeholder='Enter email ' />
                <br />
                <br />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default UncontroledComponenet



// import React, { useRef } from 'react'

// const UncontroledComponenet = () => {

//     console.log("first")

//     const nameRef =useRef()
//     const passRef =useRef()
//     const emailRef =useRef()

//     function handleForm(e){
//        e.preventDefault()
//        const name=nameRef.current.value
//        const password=passRef.current.value
//        const email =emailRef.current.value
//        console.log("first",name,password,email)
//     }
//     return (
//         <div>
//             <form onSubmit={handleForm}>
//                 <input type="text" ref={nameRef} placeholder='Enter name ' />
//                 <br />
//                 <br />
//                 <input type="password" ref={passRef} placeholder='Enter password ' />
//                 <br />
//                 <br />
//                 <input type="text" ref={emailRef} placeholder='Enter email ' />
//                 <br />
//                 <br />
//                 <button type='submit'>Submit</button>
//             </form>
//         </div>
//     )
// }

// export default UncontroledComponenet