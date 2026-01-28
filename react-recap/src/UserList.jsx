import React from 'react'
import { useParams } from 'react-router'

const UserList = () => {
    const param =useParams();
  return (
    <div>
        <h2>UserList</h2>
        <h2>User Id is :{param.id}</h2>
    </div>
  )
}

export default UserList