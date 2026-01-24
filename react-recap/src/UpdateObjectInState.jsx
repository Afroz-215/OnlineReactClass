import React, { useState } from 'react'

const UpdateObjectInState = () => {
    const [data, setData] = useState({
        name: 'Afroz',
        age: "22",
        address: {
            city: "Delhi",
            country: "India"
        }
    })
   
    function handleName(name){
        data.name =name
     setData({...data})

    }

    function handleAge(age){
        data.age =age
     setData({...data})

    }

     function handleCity(city){
        data.address.city=city
     setData({...data, address:{...data.address.city,city}})

    }

     function handleCountry(country){
        data.address.country =country
     setData({...data,address:{...data.address.country,country}})

    }



    return (
        <div>
            <h1>Update Object in State</h1>
            {/* <button onClick={()=>setData("ruheen")}>Change</button> */}
            <label htmlFor="name">Name :  </label>
            <input type="text" placeholder='Update name ' onChange={(e) => handleName(e.target.value)} />
            <h2>{data.name}</h2>
            <label htmlFor="age">Age :  </label>
            <input type="text" placeholder='Update name ' onChange={(e) => handleAge(e.target.value)} />
            <h2>{data.age}</h2>
            <label htmlFor="city">City :  </label>
            <input type="text" placeholder='Update name ' onChange={(e) => handleCity(e.target.value)} />
            <h2>{data.address.city}</h2>
            <label htmlFor="country">Country :  </label>
            <input type="text" placeholder='Update name ' onChange={(e) => handleCountry(e.target.value)} />
            <h2>{data.address.country}</h2>

        </div>
    )
}

export default UpdateObjectInState