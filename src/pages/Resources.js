import React, { Component } from 'react'
import resource1 from '../assets/images/resources/resource1.png'
import resource2 from '../assets/images/resources/resource2.png'
import resource3 from '../assets/images/resources/resource3.png'
import resource4 from  '../assets/images/resources/resource4.png'
import resource5 from '../assets/images/resources/resource5.png'
export class Resources extends Component {
    render() {
        return (
            <div className='resource pt-100' id='resource'>
                <div className="container ">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className='text-center'>Our Resouces</h2>
                            <p className='text-center fs-17'>To learn more about our Synvise Softwares, Visit here. Here's where you can find everything you need to know about it.</p>
                        </div>
                        </div>
                        <div className="row ">
                            <div className="col-md-4 col-lg-4">
                                <div class="card" >
                                <div className='card-img-box'>
                                       <img src= {resource1} class="card-img-top" alt="..." />
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">how can we help</h5>
                                        <p class="card-text">We recognise the need of project preparation before doing anything. We essentially produce a plan documentation by having an expert team of business analysts who can communicate with clients and customers and reduce the intricacies of the needs.
</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4">
                                <div class="card" >
                                <div className='card-img-box'>
                                       <img src= {resource2} class="card-img-top" alt="..." />
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">grow your business idea</h5>
                                        <p class="card-text">Share your ideas with our team, and we guarantee that they will be kept private and confidential. We also guarantee that we will support all proposals to improve and groom the ideas based on our experience and skills.</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4">
                                <div class="card" >
                                <div className='card-img-box'>
                                       <img src={resource3} class="card-img-top" alt="..." />
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">business communications</h5>
                                        <p class="card-text">
Any business owner needs to be able to communicate effectively. Your ability to communicate effectively can mean the difference between closing a transaction and missing out on a lucrative opportunity. In order to attain your objectives, it is critical to communicate well during negotiations.
</p>

                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="row ">
                            <div className="col-md-6 col-lg-6 ">
                                <div class="card" >
                                    <div className='card-img-box'>
                                       <img src={resource4} class="card-img-top" alt="..." />
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">quality assurance</h5>
                                        <p class="card-text">To assure the best quality of our outputs, Synvise used an Integrated Quality Assurance process. We've created a QA & Testing strategy and methodology that effortlessly integrates into the development lifecycle while maintaining the critical distinction between development and software quality assurance procedures.</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <div class="card" >
                                <div className='card-img-box'>
                                       <img src= {resource5} class="card-img-top" alt="..." />
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">our work process</h5>
                                        <p class="card-text">Through a continuous recovery process, Synvise tries to provide on-time, high-quality solutions to our valued customers. We provide clients with custom software development services to meet their unique company needs. We have well-defined procedures in place in a controlled environment to track, evaluate, and assimilate all software development and deployment activities.</p>

                                    </div>
                                </div>
                            </div>
                         
                            
                        </div>
                    </div>
               
            </div>
        )
    }
}

export default Resources
