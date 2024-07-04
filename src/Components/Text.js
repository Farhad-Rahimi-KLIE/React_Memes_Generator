import React, { useState } from 'react'

const Text = () => {
    const [editMode,setEditMode] = useState(false);
    const [val,setVal] = useState('Double click to Edit');
  return (
    <div>
        {
            editMode ? (<input value={val} onChange={(e)=>setVal(e.target.value)} onDoubleClick={(e)=>setEditMode(false)}/>)
            : (
            <h1 onDoubleClick={(e)=>setEditMode(true)}>{val}</h1>
            )
        }
    </div>
  )
}

export default Text
