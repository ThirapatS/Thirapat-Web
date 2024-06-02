import React from 'react'
import ArrowRight from '/img/arrow-right.svg'

function learning() {
  return (
    <div className="container learning">
        <div className="title">
            <div className="title-pic">
                <img src={ArrowRight} alt="" />
            </div>
            <div className="title-text">
                <h1>Learning</h1>
                <p>What am learning</p>
            </div>
        </div>
        <div className="learning-info">
            <h3>Sci-Math Class</h3> 
            <p>
                M.5/3 Satreesiriket <br />
                Homeroom teacher is <br />
                - Kanchana Chiddee <br />
                - Rossukon Kaewkoon
            </p>
        </div>
    </div>
  )
}

export default learning