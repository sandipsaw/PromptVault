import React from 'react'

const Create = () => {
  const changeHandler =()=>{
    console.log("hrllo");
    
  }
  return (
    <div>
      <button onClick={changeHandler}>create</button>
    </div>
  )
}

export default Create