import React, { Component } from 'react'
import { Slide } from "react-awesome-reveal";
export class HeroSlider extends Component {
    render() {
        return (
            <div className='hero_slide ' >
                <div className="container-fluid ">
                    <div className="row mt-9">
                        <div className="col-md-12 px-0">
                            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active banner">
                                        <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" class="d-block w-100" alt="img1" />
                                        <div className="row">
                                            <div className="carousel-content ">
                                                <Slide>
                                                <h1 className=''>India's Leading Software Development and Consulting Firm</h1>
                                                <p className=''>This has been the case since 2022. We help organisations transition by providing powerful and adaptive digital solutions that meet today's needs while also enabling tomorrow's prospects.</p>
                                                <p>We create solutions for both new and existing enterprises. </p>
                                                </Slide>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item banner">
                                        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" class="d-block w-100" alt="img2" />
                                        <div className="row">
                                            <div className="carousel-content ">
                                            <Slide>
                                            <h1 className=''>Provide Small and Medium-Sized Businesses with Effective Solutions.</h1>
                                                <p className=''>This has been the case since 2022. We help organisations transition by providing powerful and adaptive digital solutions that meet today's needs while also enabling tomorrow's prospects.</p>
                                                <p>We create solutions for both new and existing enterprises. </p>
                                                </Slide>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item banner">
                                        <img src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=906&q=80" class="d-block w-100" alt="img3" />
                                        <div className="row">
                                            <div className="carousel-content">
                                            <Slide>
                                            <h1 className=''>End-to-end application development and management solutions .</h1>
                                                <p className=''>This has been the case since 2022. We help organisations transition by providing powerful and adaptive digital solutions that meet today's needs while also enabling tomorrow's prospects.</p>
                                                <p>We create solutions for both new and existing enterprises. </p>
                                                </Slide>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HeroSlider
