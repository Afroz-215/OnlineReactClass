import React,{useState} from 'react'


// const colorInClock = ({ time }) => {
    const ColorInClock = ({color}) => {
    const [time, setTime] = useState()
    

    const timer = setInterval(() => {
        setTime(new Date().toLocaleTimeString())
    }, 1000)
    return (
        <div>
            <h3 style={{border:"2px solid black",
          height:"30px",
          width:"100px",
          background:"black",
          color:color

        }}>{time}</h3>

        </div>
    )
}

export default ColorInClock