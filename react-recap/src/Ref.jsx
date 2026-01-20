// import React, { useRef } from 'react'

// const Ref = () => {
//     const inputRef = useRef(null)

//     const inputHandler = (() => {
//         console.log(inputRef);
//         inputRef.current.focus();
//         inputRef.current.style.color = "blue";
//         inputRef.current.placeholder = "password";
//         inputRef.current.value = "12345"
//     })
//     const toggleHandler = (() => {
//         inputRef.current.style.display != "none" ? inputRef.current.style.display = "none" : inputRef.current.style.display = "inline"
//     })

//     return (
//         <div>
//             <h1>useRef</h1>
//             <button onClick={toggleHandler}>Toggle</button>
//             <input ref={inputRef} type="text" placeholder='Enter your name' />
//             <button onClick={inputHandler} >Focus on Input Field</button>
//         </div>
//     )
// }

// export default Ref


import React, { useRef } from 'react'
import ForRef from './ForRef'

const Ref = () => {
    const inputRef = useRef(null)

    const handleRef = () => {
        inputRef.current.value = "122";
        inputRef.current.style.color = "red";
        inputRef.current.focus()
    }

    return (
        <div>
            <ForRef ref={inputRef} />
            <button onClick={handleRef}>update</button>
        </div>
    )
}

export default Ref