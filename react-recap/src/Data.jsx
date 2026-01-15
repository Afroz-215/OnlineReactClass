import React from 'react'
import Table from './Table'

const Data = () => {
    const data = [{ name: 'afroz', age: '25', city: "delhi", id: 1 },
    { name: 'shizuka', age: '30', city: "pune", id: 2 },
    { name: 'gian', age: '23', city: "noida", id: 3 },
    { name: 'nobita', age: '27', city: "gurgaon", id: 4 }
    ]
  return (
    <div>
        <Table data={data} />
    </div>
  )
}

export default Data