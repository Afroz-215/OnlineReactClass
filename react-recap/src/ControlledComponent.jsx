import React, { useState } from 'react'

const ControlledComponent = () => {
    const [name,setName] =useState()
    const [password,setPassword]=useState()
    const [email,setEmail] =useState()

  return (
    <div>
        <form action="" method='get' >
            <fieldset>
                <input type="text" value={name} placeholder='Enter name ' onChange={(e)=>{setName(e.target.value)}} />
                <br />
                <br />
                <input type="password" value={password} placeholder='Enter password ' onChange={(e)=>{setPassword(e.target.value)}}  />
                <br />
                <br />
                <input type="text" value={email}  placeholder='Enter email ' onChange={(e)=>{setEmail(e.target.value)}}  />
                <br />
                <br />
                <button onClick={(e)=>e.preventDefault()}>Submit</button>
                <br />
                <br />
                <button onClick={(e)=>{setName();setPassword();setEmail();e.preventDefault()}}>clear</button>

            </fieldset>
        </form>

          <h1>{name}</h1>
          <h1>{password}</h1>
          <h1>{email}</h1>

    </div>
  )
}

export default ControlledComponent