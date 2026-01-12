// import React, { useState } from 'react'

// const Counter = () => {
//     const [value, setValue] = useState("red");
//     const [color, setColor] = useState("pink")

//     function handleClick() {
//         setValue(value => {
//             if (value == "red") {
//                 return "blue"
//             } else {
//                 return "red"
//             }
//         })
//         setColor(color => {
//             if (color == "pink") {
//                 return "blue"
//             } else {
//                 return "pink"
//             }
//         })

//     }
//     return (
//         <div>
//             <p style={{ color: color }}>{value}</p>
//             <button onClick={handleClick}>Click</button>




//         </div>
//     )
// }

// export default Counter


// import React, { useState } from 'react'

// const Counter = () => {

//     const [value, setValue] = useState(0);

//     return (
//         <div>
//             <h1>{value}</h1>
//             <button style={{
//                 height: "20px",
//                 width: "80px",
//                 margin: "5px"
//             }} onClick={() => { setValue(value + 1) }}>Increase</button>
//             <button style={{
//                 height: "20px",
//                 width: "80px"
//             }}  onClick={() => { setValue(value - 1) }}>Decrease</button>
//             <br />
//         </div>
//     )
// }

// export default Counter


import React, { useState } from 'react'

const Counter = () => {

    const [val, setVal] = useState("red")
    const [display, setDisplay] = useState(true)

    function changeVal() {
        // setVal(val =>(val=="red" ? "green" : "red" ))

        switch (val) {
            case "red":
                return "blue";
            case "blue":
                return "teal";
            case "teal":
                return "black";
            default:
                return "red";

        }
    }

    return (
        <div>
            {display && <h1 style={{color :val}}>{val}</h1>}
            <button onClick={() => { setDisplay(!display) }}>Toggle </button>
            <button onClick={() => { setVal(changeVal) }}>change</button>
        </div>
    )
}

export default Counter