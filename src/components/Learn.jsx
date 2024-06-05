import React from 'react'
import ArrowRight from '/img/arrow-right.svg'
import HtmlIcon from '/img/html5.svg'
import CssIcon from '/img/css.svg'
import JsIcon from '/img/js.svg'
import PHPIcon from '/img/php.svg'
import ReactIcon from '../assets/react.svg'

function Learn() {
  return (
    <div className="container learn">
        <div className="title">
            <a className="title-pic" href='#home'>
                <img src={ArrowRight} alt=""/>
            </a>
            <div className="title-header-text">
                <h1 className='header-text'>Learning</h1>
                <span className="small-text">What am learning</span>
            </div>
        </div>
        <div className="learning-info">
            <div className="card">
                <div className="card-title-pic">
                    <img src={HtmlIcon} alt="" />
                </div>
                <div className="card-body">
                    <h1>HTML 5</h1>
                    HyperText Markup Language <br />
                    Am learning for 4 years 
                </div>
            </div>
            <div className="card">
                <div className="card-title-pic">
                    <img src={CssIcon} alt="" />
                </div>
                <div className="card-body">
                    <h1>CSS</h1>
                    Cascading Style Sheets <br />
                    Am learning for 4 years
                </div>
            </div>
            <div className="card">
                <div className="card-title-pic">
                    <img src={JsIcon} alt="" />
                </div>
                <div className="card-body">
                    <h1>Javascript</h1>
                    Javascript is programing language <br />
                    Am learning for 3 years
                </div>
            </div>
            <div className="card">
                <div className="card-title-pic">
                    <img src={PHPIcon} alt="" />
                </div>
                <div className="card-body">
                    <h1>PHP</h1>
                    PHP is programing language <br />
                    Am learning for 2 years
                </div>
            </div>
            <div className="card">
                <div className="card-title-pic">
                    <img src={ReactIcon} alt="" />
                </div>
                <div className="card-body">
                    <h1>React</h1>
                    React a javascript libary <br />
                    Am learning for 2 years
                </div>
            </div>
        </div>
    </div>
  )
}

export default Learn