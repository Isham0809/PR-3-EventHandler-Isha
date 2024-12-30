import React, { useState } from 'react'

function Theme({light,setLight}) {
    
    let handleTheme = (type)=>{
        if(type === 'light'){
            setLight(true)
        }
        else{
            setLight(false)
        }
    }
  return (
    <>
        <h3>Pasing Argument to Event Handlers </h3>
        <h3>Conditional Rendering </h3>
        <div>
            {light?(
                <button onClick={()=>handleTheme('dark')}>Light Theme</button>
            ):(
                <button onClick={()=>handleTheme('light')}>Dark Theme</button>
            )}
        </div>
    </>
  )
}

export default Theme
