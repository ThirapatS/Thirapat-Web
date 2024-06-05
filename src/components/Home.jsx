import React from 'react'
import Nav from './Nav'
import Learn from './Learn'

function Home() {
  return (
    <div className="container home">
      <a id="home"></a>
      <Nav />
      <div className="banner">
        <div className="content">
          <a className="content-pic" >
            <img src="../img/avata.svg" alt="My picture" />
          </a>
          <div className="content-info">
            <b>Hello!</b><br />
            I'm <b>Thirapat Sisan</b><br />
            call me <b>Tonpalm</b>, a <br />
            student from Satreesiriket
          </div>
        </div>
      </div>
      <Learn />
    </div>
  )
}

export default Home