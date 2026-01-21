import React, { useState, useTransition } from 'react'

const Transition = () => {
    // const [pending,setpending] =useState(false)
    const [pending, startTransition] = useTransition();

    //    async function handleBtn(){
    function handleBtn() {
        // setpending(true)
        // await new Promise(res=>setTimeout(res,2000))
        // setpending(false)
        startTransition(async()=>{
            await new Promise(res=>setTimeout(res,2000))
        })
    }
    return (
        <div>
            <h1>UseTransition Hook</h1>
            <button disabled={pending} onClick={handleBtn} >Click</button>
        </div>
    )
}

export default Transition