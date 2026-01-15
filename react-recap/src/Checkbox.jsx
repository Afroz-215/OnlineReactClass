import React, { useState } from 'react'

const Checkbox = () => {
    const [skills,setSkills] =useState([])

    function handleChange(e){
       if(e.target.checked) setSkills([...skills,e.target.value])
        else  setSkills([skills.filter((a)=>a != e.target.value)])
    }
  return (
    <div>
        <h1>Select your skills </h1>
        <input onChange={handleChange} type="checkbox" value=" html"  />
        <label htmlFor="html">HTML</label>
        <br />
        <br />
        <input onChange={handleChange} type="checkbox" value=" Css"  />
        <label htmlFor="Css">Css</label>
        <br />
        <br />
        <input onChange={handleChange} type="checkbox" value=" Js"  />
        <label htmlFor="Js">Js</label>
        <br />
        <br />
        <input onChange={handleChange} type="checkbox" value=" Java"  />
        <label htmlFor="Java">Java</label>
        <br />
        <br />

        <h1>{skills.toString()}</h1>
    </div>
  )
}

export default Checkbox