import React from 'react'

const PropChild = (val) => {
    const {val : Props} =val;
    // const PropChild = ({val:Props}) => {
  return (
    <div>
        {/* <h1>{val.name}</h1>
        <h1>{val.email}</h1> */}
        <h1>{Props.age}</h1>
        <h1>{Props.city}</h1>
    </div>
  )
}

export default PropChild