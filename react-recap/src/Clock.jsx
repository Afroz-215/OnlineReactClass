import React , {useState} from 'react'
import ColorInClock from './ColorInClock'

const Clock = () => {
  const [color, setColor] = useState("red")
    // const [time,setTime] =useState(new Date().toLocaleTimeString())
    // const [color,setColor] =useState("red") 
    // setInterval(()=>{
    //   setTime(new Date().toLocaleTimeString())
    // },1000)

  return (
    <div>
      {/* <colorInClock time={time} />
        <h3 style={{border:"2px solid black",
          height:"30px",
          width:"100px",
          background:"black",
          color:color

        }}>{time}</h3> */}
        <ColorInClock color={color} />
          <select onChange={(e)=>setColor(e.target.value)}>
          <option value="green">green</option>
          <option value="teal">teal</option>
          <option value="blue">blue</option>
        </select>
        
    </div>
  )
}

export default Clock