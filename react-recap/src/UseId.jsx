import React, { useId } from 'react'

const UseId = () => {
    const user =useId()
  return (
    <div>
        <form action="">
            <label htmlFor={user+"Name"}>Name :</label>
            <input id={user+"Name"} type="text" placeholder='Enter Name' />
            <br />
            <br />
            <label htmlFor={user+"pass"}>Password :</label>
            <input id={user+"pass"} type="text" />
            <br />
            <br />
            <label htmlFor={user+"age"}>Age :</label>
            <input id={user+"age"} type="text" />
            <br />
            <br />
            <input id={user+"term"} type="checkbox" />
            <label htmlFor={user+"term"}>Terms & Condition</label>
        </form>
        <InfoBox/>
    </div>
  )
}

export default UseId



function InfoBox() {
  const id = useId()

  return (
    <div>
      <p id={id}>This is important information.</p>
      <button aria-describedby={id}>Read more</button>
    </div>
  )
}