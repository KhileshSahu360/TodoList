import React from 'react'
import toDo from '../assets/toDo.png';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="left_nav">
          <img src={toDo} alt="" style={{height:'40px'}}/>
          <div className="title">
            <h2>TODO LIST</h2>
            <label htmlFor="">Create your list</label>
          </div>
        </div>
        <div className="logo">
          <a href={logo} target='_blank'><img src={logo} alt="" style={{height:'60px'}}/></a>
        </div>
      </div>
    </>
  )
}

export default Header
