import React, { useRef, useState } from 'react'

function Reference() {
    const name = useRef()
    const [user,setUser] = useState('')

    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser(name.current.value)
        name.current.value =''
    }

  return (
    <>
    <h3>Printing Value Using Reference</h3>
      <form action="" method='post' onSubmit={handleSubmit}>
        <input type="text" name="user" ref={name} id="" />
        <button>Click Me</button>
        <span>
            <div><strong>{user}</strong></div>
        </span>
      </form>
    </>
  )
}

export default Reference
