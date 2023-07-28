import React, { Component } from 'react'
import img1 from '../assets/images/training/img1.jpg'
import img2 from '../assets/images/training/img2.png'
import img3 from '../assets/images/training/img3.jpg'
import img4 from '../assets/images/training/img4.jpg'
import img5 from '../assets/images/training/img5.jpg'
import img6 from '../assets/images/training/img6.jpg'
import img7 from '../assets/images/training/img7.jpg'
import img8 from '../assets/images/training/img8.jpg'
import img9 from '../assets/images/training/img9.jpg'
import AOS from "aos";
import "aos/dist/aos.css";
export class Training extends Component {
    componentDidMount() {
        // or simply just AOS.init();
        AOS.init({
          // initialise with other settings
          duration : 2000
        });
      }
    render() {
        return (
            <div className='training pt-100' id='training'>
                <div className="container " >
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className='text-center'>Training</h2>
                            <p className='text-center fs-17'>Synvise has established professional courses that play a critical role in reputable firms to <br></br>transmit knowledge and make students proficient of IT sectors.</p>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-md-4">
                            <div class="card" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                                <img src= {img1} class="card-img-top" alt="..." />
                                <div class="overlay">
                                    <div class="text">PHP Development</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">

                            <div class="card" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                                <img src= {img2} class="card-img-top" alt="..." />
                                <div class="overlay">
                                    <div class="text">Python/Django Development</div>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-4">
                            <div class="card" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                                <img src= {img3} class="card-img-top" alt="..." />
                                <div class="overlay">
                                    <div class="text">Android App Development</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                                <img src= {img4} class="card-img-top" alt="..." />
                                <div class="overlay">
                                    <div class="text">IOS App Development</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                                <img src= {img5} class="card-img-top" alt="..." />
                                <div class="overlay">
                                    <div class="text">Block Chain Development</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                                <img src= {img6} class="card-img-top" alt="..." />
                                <div class="overlay">
                                    <div class="text">Software Testing</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                                <img src= {img7} class="card-img-top" alt="..." />
                                <div class="overlay">
                                    <div class="text">Business Analyst/BDE</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                                <img src= {img8} class="card-img-top" alt="seo" />
                                <div class="overlay">
                                    <div class="text">SEO</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                                <img src= {img9} class="card-img-top" alt="..." />
                                <div class="overlay">
                                    <div class="text">Software Designing</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Training
