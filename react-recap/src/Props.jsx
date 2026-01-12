import React from 'react'
import PropChild from './PropChild'

const Props = (data) => { 
    // let name ="Khshi"
    // let age =29
    // let city ="Rewa"  

    let val={
        name: "sheetal",
        age: 22,
        DOB: new Date(2002,10,27),
        email: "sheetal@kooko.com",
        city:"bhogao"
    }

  return (
    <div>
       {/* <PropChild name="Afroz" age ={22} city="Delhi" /> */}
       {/* <p>{data.name}</p> */}
       {/* <PropChild name={name} age={age} city={city} /> */}
       <PropChild val={val} />

    </div>
  )
}

export default Props