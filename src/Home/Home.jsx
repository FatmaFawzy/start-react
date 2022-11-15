import React, { Component } from 'react'
import avatar from '../imges/avataaars.svg'

export default class Home extends Component {
  render() {
    return (
      <>
      <header className='home-head py-5 masthead text-white text-center'>
        <div className="container d-flex align-items-center flex-column">
                <img src={avatar} alt=""  className=' mb-5 avt' />
                <h1 className='home-heading text-uppercase mb-0'>Start React</h1>
                <div className="hed-icon my-4">
                    <div className="left line"></div>
                    <div className='star-icon'> <i className="fa-solid fa-star fa-2x"></i></div>
                    <div className="right line"></div>
                </div>
                <p className='home-subheading font-weight-light mb-5'>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </header>
      </>
    )
  }
}
