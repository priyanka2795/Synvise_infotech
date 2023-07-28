import React, { Component } from 'react'


import logo from '../assets/images/synrise.png'
import $ from 'jquery';
export class Header extends Component {
   



    render() {
        $(window).scroll(function(){
            if ($(window).scrollTop() >= 140) {
                $('nav').addClass('fixed-header');
               
            }
            else {
                $('nav').removeClass('fixed-header');
              
            }
        });

        // $(document).ready(function(){
        //     $('nav ul li a').click(function(){
        //       $('li a').removeClass("active");
        //       $(this).addClass("active");
        //   });
        //   });
     
      
        return (
            <div className='' id='home'>
                {/* ========topbar start======== */}
              
               <div className="topbar ">
                    <div className="container">
                    <div className="row">
                       
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12 px-0">
                                <div className="top_left">
                                    <ul className=''>
                                        <li><a href="/"><span><i class="fas fa-phone-alt"></i></span>&nbsp;8909433333,
                                        +447393679043(UK)
                                            </a></li>
                                            <li><a href="/" className='pl-2'><span><i class="far fa-envelope"></i></span>&nbsp;Synviseinfotech@gmail.com</a></li>
                                    </ul>
                                    {/* <div className="contact">
                                        <p><span><i class="fas fa-phone-alt"></i></span>&nbsp; 8909433333<br/>
                                            +447868678273 (UK)</p>
                                    </div>
                                    <div className="email">
                                        <p><span><i class="far fa-envelope"></i></span>&nbsp; Synviseinfotech@gmail.com</p>
                                    </div> */}
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div className="top_right">
                                    <div className="social_icon">
                                        <ul>
                                            <li><a href="https://www.facebook.com/Synvise-Infotech-105839175337384"><i class="fab fa-facebook-f"></i></a></li>
                                            <li><a href="https://www.instagram.com/synviseinfotech/"><i class="fab fa-instagram"></i></a></li>
                                            <li><a href="https://www.linkedin.com/company/synvise-infotech/"><i class="fab fa-linkedin-in"></i></a></li>
                                            <li><a href="https://twitter.com/synvise"><i class="fab fa-twitter"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div> 
                 
                    </div>
                </div> 
                {/* ========topbar end======== */}

                {/* ========navbar start======== */}
                <div className="header" >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <nav class="navbar navbar-expand-lg"  >
                                    <a class="navbar-brand logo" href="/">
                                        <img src={logo} alt="logo" />&nbsp;&nbsp;
                                        <span className='logoname'>Synvise</span>
                                    </a>
                                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"><i class="fas fa-bars"></i></span>
                                    </button>

                                    <div class="collapse navbar-collapse" id="navbarSupportedContent" >
                                        <ul class="navbar-nav ml-auto" >
                                            <li class="nav-item ">
                                                <a  class="nav-link" href="#home">HOME <span class="sr-only">(current)</span></a>
                                            </li>
                                            <li class="nav-item">
                                                <a  class="nav-link" href="#about_us">ABOUT</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#services">SERVICE</a>
                                            </li>
                                            <li class="nav-item">
                                                <a  class="nav-link" href="#training">TRAINING</a>
                                            </li>
                                            <li class="nav-item">
                                                <a  class="nav-link" href="#resource">RESOURCES</a>
                                            </li>
                                            <li class="nav-item">
                                                <a  class="nav-link" href="#blog">BLOG</a>
                                            </li>
                                            <li class="nav-item">
                                                <a  class="nav-link" href="#team">TEAM</a>
                                            </li>
                                            <li class="nav-item">
                                                <a  class="nav-link" href="#contact">CONTACT US</a>
                                            </li>


                                        </ul>
                                        {/* <form class="form-inline my-2 my-lg-0">
                                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                        </form> */}
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ========navbar end======== */}

            </div>
        )
    }
}

export default Header
