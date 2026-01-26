import React, { useState } from 'react'

const UseCustomChild = (defValue) => {
    const [value, setValue] = useState(defValue)

   function toggleValue(val){
     if (typeof val != 'boolean') setValue(!value)
    else setValue(val)
   }

    return [value,toggleValue]
}

export default UseCustomChild