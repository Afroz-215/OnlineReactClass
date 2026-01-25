import React, { useActionState } from 'react'

const Action = () => {
  const handleForm =async (prevDate,formData)=>{
   let name =formData.get('name')
   let pass =formData.get('password')

   await new Promise((res)=>setTimeout(res,3000))
   console.log(name,pass);
  //  const val =await new Promise((res)=>{
  //   setTimeout(()=>{
  //    res({name,pass})
  //   },3000)
  //  })
  //  console.log(val.name,val.pass);

   return name && pass ? 'Data submitted' :'Failed to submit '

  }
  const [data,action,pending] =useActionState(handleForm,undefined)
  return (
    <div>
      <form action={action}>
        <input type="text" name='name' placeholder='enter name' />
        <input type="text" name='password' placeholder='enter password' />
        <button disabled={pending}>submit</button>
      </form>
      {data && (
        <h3 style={{ color: data === 'Data submitted' ? 'green' : 'red' }}>
          {data}</h3>
      )}
    </div>
  )
}

export default Action