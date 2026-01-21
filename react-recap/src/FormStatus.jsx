import React from 'react'
import {useFormStatus} from 'react-dom'

const FormStatus = () => {
   
    const handleSubmit = async () => {
        await new Promise(res => setTimeout(res, 2000));
        console.log("submit")
    }
    return (
        <div>
            <form action={handleSubmit}>
                <Component/>
            </form>
        </div>
    )
}

export default FormStatus


function Component() {
     const { pending } = useFormStatus();
    console.log("pending")
    return (
        <>
            <fieldset>
                <input type="text" placeholder='Enter Name' name="" id="" />
                <br />
                <br />
                <input type="password" placeholder='Password' name="" id="" />
                <br />
                <br />
                <button disabled={pending}>{pending?"pending...":"Submit"}</button>
            </fieldset>
        </>
    )
}