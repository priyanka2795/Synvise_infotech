import React, { Component } from 'react'
import about_img from '../assets/images/about/about-1.png'
import { Fade } from "react-awesome-reveal";

class AboutUs extends Component {
    
 render() {
        return (
          
            <div className='about_us pt-100 ' id='about_us'>
             
                <div className="container">
                    <div className="row ">
                        <div className="col-md-6 col-sm-12 ">
                            <div className="about_img mt-3">
                                <Fade cascade>
                                <img src= {about_img} alt="about-img" className='img-fluid' />
                                </Fade>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="about_content">
                                <h4 className='title'>About Us</h4>
                                <h1 className='heading'>Software Development</h1>
                                <p className='para'>Synvise is a 2022-founded IT consultancy and software development 
                                       firm situated in India. We have  people, including technological professionals and 
                                       business analysts.
                                </p>
                                <div className="row pt-4">
                                    <div className="col-md-6 col-6">
                                        <p><i className="far fa-chart-bar fs"></i></p>
                                        <h6>Creative Experienced</h6>
                                    </div>
                                    <div className="col-md-6 col-6">
                                        <p><i className="far fa-clock fs"></i></p>
                                        <h6>24/7 Support</h6>
                                    </div>
                                </div>
                             
                                {/* <button className='btn btn-danger mt-3'>Read More &nbsp; <i class="fas fa-arrow-right"></i></button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutUs
