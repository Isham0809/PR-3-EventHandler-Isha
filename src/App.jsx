import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Reference from './components/reference'
import Theme from './components/Theme'
import { useState } from 'react'

function App() {
  const users = ['Radha','Krishna','Ram','Sita']
  const [light,setLight] = useState(false)
  const [active,setActive] = useState(false)

  const handleOver=()=>{
    setActive(true)
  }

  const handleLeave=()=>{
    setActive(false)
  }

  return (
    <body style={light ?{background:"#000",color:"white"}  : {background:"#fff"} }>
      <>
      <div className='main'>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <h2>✔ Lists using keys</h2>
          {users.map((users,index)=>{
            return (
              <div key='index'>
                <li onMouseOver={handleOver} onMouseLeave={handleLeave} className={ active ? 'active': '' }>{users}</li>
              </div>
            )
          })}
        <Reference/>
        <Theme light={light} setLight={setLight}/>
      </div>
      </div>
      </>
    </body>
  )
}

export default App
