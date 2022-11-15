import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
        <>
        <section className="about p-5">
            <div className="container my-5">
                <h2 className='about-heading text-center text-uppercase text-white'>About</h2>
                <div className="hed-icon my-4">
                    <div className="left line"></div>
                    <div className='star-icon text-white'> <i className="fa-solid fa-star fa-2x"></i></div>
                    <div className="right line"></div>
                </div>
                <div className="row px-5">
                    <div className='col-lg-4 ms-auto'>
                        <p className='lead text-white'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                    <div className='col-lg-4 me-auto'>
                        <p className='lead text-white'>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
  }
}
