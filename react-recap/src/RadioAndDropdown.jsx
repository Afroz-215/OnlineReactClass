import React, { useState } from 'react'

const RadioAndDropdown = () => {
    const [gender,setGender] =useState()
    const [city,setCity]=useState()
  return (
    <div>
        <h1>Radio & Dropdown</h1>
        <input type="radio" onClick={(e)=>setGender(e.target.value)} value={"Male"} checked={gender=='Male'} />
        <label htmlFor="Male">Male</label>
        <input type="radio" onClick={(e)=>setGender(e.target.value)} value={"Female"} checked={gender=='Female'} />
        <label htmlFor="Female">Female</label>
        <h3>Gender is : {gender}</h3>

        <h3>Selected city : {city}</h3> 
        <select onChange={(e)=>setCity(e.target.value)}>
            <option value="Delhi">Delhi</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Pune">Pune</option>
        </select>
        
    </div>
  )
}

export default RadioAndDropdown