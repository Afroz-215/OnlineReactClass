// import React, { useReducer } from 'react'

// const Reducer = () => {
//     function FnReducer(state,action){
//        return action.type === 'incre' ? state+1 : state-1;

//     }
//     const [state,dispatch] =useReducer(FnReducer,0)
//   return (
//     <div>
//         <h1>{state}</h1>
//         <button onClick={()=>dispatch({type :"incre"})}>++</button>  
//         <button onClick={()=>dispatch({type:'decre'})}>--</button>
//     </div>
//   )
// }

// export default Reducer

const emptyData = {
    name: '',
    password: '',
    mail: '',
    address: '',
    city: ''

}



import React, { useReducer } from 'react'

const Reducer = () => {
    function reducer(state, action) {
        return { ...state, [action.type]: action.val }
    }
    const [state, dispatch] = useReducer(reducer, emptyData)
    return (
        <>
            <label htmlFor="name">Name: </label>
            <input type="text" onChange={(e) => dispatch({ val: e.target.value, type: 'name' })} placeholder='Enter name ' />
            <br /><br />
            <label htmlFor="password">Password: </label>
            <input type="password" onChange={(e) => dispatch({ val: e.target.value, type: 'password' })} placeholder='enter password' />
            <br /><br />
            <label htmlFor="mail">Email: </label>
            <input type="text" onChange={(e) => dispatch({ val: e.target.value, type: 'mail' })} placeholder='enter mail' />
            <br /><br />
            <label htmlFor="address">Address: </label>
            <input type="text" onChange={(e) => dispatch({ val: e.target.value, type: 'address' })} placeholder='enter address' />
            <br /><br />
            <label htmlFor="city">City: </label>
            <input type="text" onChange={(e) => dispatch({ val: e.target.value, type: 'city' })} placeholder='enter city' />

            <h3>Name: {state.name}</h3>
            <h3>Password: {state.password}</h3>
            <h3>Email :{state.mail}</h3>
            <h3>Address :{state.address}</h3>
            <h3>City: {state.city}</h3>
        </>
    )
}

export default Reducer