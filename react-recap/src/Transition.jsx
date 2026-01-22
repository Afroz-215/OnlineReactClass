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
           {pending?  <img src="https://i.gifer.com/origin/4d/4dc11d17f5292fd463a60aa2bbb41f6a_w200.webp" alt="" />: null}
            <button disabled={pending} onClick={handleBtn} >Click</button>
        </div>
    )
}

export default Transition