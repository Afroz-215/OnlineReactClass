import React from 'react'

const Table = ({data}) => {
    // const Data = [{ name: 'afroz', age: '25', city: "delhi", id: 1 },
    // { name: 'shizuka', age: '30', city: "pune", id: 2 },
    // { name: 'gian', age: '23', city: "noida", id: 3 },
    // { name: 'nobita', age: '27', city: "gurgaon", id: 4 }
    // ]

    return (
        <div>
            <table border="1">
                <thead>
                <tr>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>CITY</th>
                    <th>ID</th>
                </tr>
                </thead>
                <tbody>
                   {data.map((a)=>{
                       return <tr key={a.id}>
                            <td>{a.name}</td>
                            <td>{a.age}</td>
                            <td>{a.city}</td>
                            <td>{a.id}</td>
                        </tr>
                    })}
                </tbody>

            </table>
            </div>
    )
}

export default Table