import React,{useEffect} from 'react'

const Phase = ({count,data}) => {

 useEffect(()=>{
        console.log("Mounting Phase")
    },[])

    useEffect(()=>{
        console.log("Updation Phase")
    },[count])

    useEffect(()=>{
        return ()=>{
            console.log("Unmounting phase")
        }
    },[])

  return (
    <div>
        <h3>Counter Value : {count}</h3>
        <h3>Data Value : {data}</h3>
    </div>
  )
}

export default Phase