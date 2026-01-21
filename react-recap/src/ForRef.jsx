import React, {forwardRef,useRef} from 'react'

//Old ways to use Forward ref

// const ForRef = ({prop, ref}) => {
//   return (
//     <div>
//          <input ref={ref} type="text" name="" id="" />
//     </div>
//   )
// }

// export default ForRef

// After version 19 alwayse use prop

const ForRef = forwardRef((props) => {
  return (
    <div>
         <input ref={props.ref} type="text" name="" id="" />
    </div>
  )
})

export default ForRef