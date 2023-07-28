import React, { Component } from 'react'
import service_img1 from  '../assets/images/services/service_img1.jpg'
import service_img2 from  '../assets/images/services/service_img2.jpg'
import service_img3 from  '../assets/images/services/service_img3.webp'
import service_img4 from  '../assets/images/services/service_img4.jpg'
import service_img5 from  '../assets/images/services/service_img5.png'
// import AOS from "aos";
// import "aos/dist/aos.css";
export class Services extends Component {
    // componentDidMount() {
     
    //     AOS.init({
 
    //       duration : 2000
    //     });
    //   }
    render() {
       
        return (
            <div className='services pt-100' id='services'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 text-center">
                            <h1>Services We Offer</h1>
                            <p className='text-center fs-17'>Our service portfolio encompasses the whole software design & development life cycle and caters to a wide range of corporate requirements. Apart from that, we also fulfill all your digital marketing needs with our best and effective digital marketing services.</p>
                        </div>
                    </div>
                    <div className="row pt-4">
                        <div className="col-md-4 mt-3">
                        <div class="card"  >
                                    <div className="service_img">
                                    <img src= {service_img1} class="card-img-top" alt="..." />
                                    </div>
                                    <div class="card-body">
                                        <h4 class="card-title">Software Solutions</h4>
                                        <p class="card-text">The creation of dependable and scalable software solutions for any operating system, browser, or device. We combine deep industry knowledge with cutting-edge technology to create personalised solutions and products that exactly meet the demands and behaviours of its consumers.</p>

                                    </div>
                                </div>
                        </div>
                        <div className="col-md-4 mt-3">
                        <div class="card" >
                                    <div className="service_img">
                                    <img src= {service_img2} class="card-img-top" alt="..." />
                                    </div>
                                    <div class="card-body">
                                        <h4 class="card-title">Android Development</h4>
                                        <p class="card-text">Design, development, and enhancement of mobile software that operates on all supported Android OS versions are included in Android app development services. Synvise constantly ensures a durable and flawless mobile experience by targeting Android with native, hybrid, and cross-platform development.
</p>

                                    </div>
                                </div>
                        </div>
                        <div className="col-md-4 mt-3">
                        <div class="card" >
                                   <div className="service_img">
                                   <img src= {service_img3} class="card-img-top" alt="..." />
                                   </div>
                                    <div class="card-body">
                                        <h4 class="card-title">Web Design & Development</h4>
                                        <p class="card-text">All forms of web-based software are designed, built, supported, and evolved using web development services. We create user-friendly and quick websites, web portals, and other web solutions that help businesses alter and improve their workflows.</p>

                                    </div>
                                </div>
                        </div>
                    </div>
                    
                    <div className="row pt-4">
                        <div className="col-md-4 offset-md-2 mt-3">
                        <div class="card" >
                                    <div className="service_img">
                                    <img src= {service_img4} class="card-img-top" alt="..." />
                                    </div>
                                    <div class="card-body">
                                        <h4 class="card-title">Digital Marketing</h4>
                                        <p class="card-text">Synvise is India's best digital marketing firm, with a long list of delighted clients. Synvise's most valuable asset is its happy customers, and we work hard to keep them growing.</p>

                                    </div>
                                </div>
                        </div>
                        <div className="col-md-4 mt-3">
                        <div class="card" >
                                    <div className="service_img">
                                    <img src= {service_img5} class="card-img-top" alt="..." />
                                    </div>
                                    <div class="card-body">
                                        <h4 class="card-title">Brand Identity Design</h4>
                                        <p class="card-text">Improve the look of your business identification and attract new customers. Meet with one of our branding specialists to talk about your brand identity and design needs.

                                       </p>

                                    </div>
                                </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        )
    }
}

export default Services
