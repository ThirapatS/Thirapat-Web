import React from 'react'
import avata from '/img/curcle.svg'

function Nav() {
  return (
    <nav className="navbar">
      <div className="logo">
        <div className="logo-pic">
          <img src={avata} alt="" />       
        </div>
        <h1 className='logo-text'>Thirapat Sisan</h1>        
      </div>
        <ul>
            <li><a className="link" href="/">Home</a></li>
            <li><a className="link"  href="about">About</a></li>
        </ul>
    </nav>
  )
}

export default Nav