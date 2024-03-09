import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Nav from './Components/Nav'

function App() {
  const [menuValue, setMenuValue] = useState(true);
  const menuToggle =(text) =>{
    text==='Task'?setMenuValue(true):setMenuValue(false)    
}
  return (
    <>
      <div className="container">
        <Header />
        <div className="main">
            <Nav menuToggle={menuToggle}/>
            <Hero menuValue={menuValue}/>
        </div>
      </div>
    </>
  )
}

export default App
