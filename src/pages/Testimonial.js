import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export class Testimonial extends Component {

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay:true
        };
        return (
            <div className='testimonial py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 text-center">
                            <h5> <span className='color-red'>Our Testimonial</span></h5>
                            <h2>What our client's say about us</h2>

                            <div className="testimonial_slide">
                                <Slider {...settings}>
                                    <div>
                                        <h1><i class="fas fa-quote-left"></i></h1>
                                        <p className='desc'>Synvise is one of the leading offshore software development company routed from
                                    Portland, Oregon USA and having its delivery center.</p>
                                        <p className='name'>Darlina</p>
                                        {/* <span className='designation'>Marketing</span> */}
                                    </div>
                                    <div>
                                        <h1><i class="fas fa-quote-left"></i></h1>
                                    <p className='desc'>The freelancer was great, he listened to all our problems and help us find a solution
                                    that works best for everyone. I would definitely work with him again!</p>
                                        <p className='name'>Raymond N.</p>
                                        {/* <span className='designation'>Web Development</span> */}
                                    </div>
                                    <div>
                                        <h1><i class="fas fa-quote-left"></i></h1>
                                    <p className='desc'>They have a great and responsive team, They help you with new ideas and provide good
                                    advice for the project I am always happy to work with them in the future and in new
                                    projects</p>
                                        <p className='name'>Dawood J</p>
                                        {/* <span className='designation'>Web Desiner</span> */}
                                    </div>
                                  
                                </Slider>
                            </div>
                        </div>
                        {/* <div className="col-md-6">
                            <img src="https://wptf.themepul.com/restly/wp-content/uploads/2021/09/testi-1.jpg" alt="" className='img-fluid' />
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Testimonial
