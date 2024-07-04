import React, { useState } from 'react'
import {useSearchParams} from 'react-router-dom'
import Text from './Text'
const Edit = () => {
    const [params] = useSearchParams();
    const [count,setCount] = useState(0);
    const addText = ()=>{
      setCount(count+1);
    }
  return (
    <div>
    <div>
        <img src={params.get("url")} className='w-[250px]' alt="" />
        {
          Array(count).fill(0).map((e)=>
            <Text/>)
        }
    </div>
    <button onClick={addText} className='btn btn-success'>Add Text</button>
    </div>
  )
}

export default Edit
