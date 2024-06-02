import React from 'react'
import Nav from './Nav'
import Learning from './Learning'

function Home() {
  return (
    <div className="container home">
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
            student from satreesiriket
          </div>
        </div>
      </div>
      <hr />
      <Learning />
    </div>
  )
}

export default Home