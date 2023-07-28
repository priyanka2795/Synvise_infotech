import React from 'react'
import blog1 from '../assets/images/blogs/blog1.jpg'
import blog2 from '../assets/images/blogs/blog2.png'
import blog3 from '../assets/images/blogs/blog3.png'
import blog4 from '../assets/images/blogs/blog4.jpeg'
import blog5 from '../assets/images/blogs/blog5.png'
import blog6 from '../assets/images/blogs/blog6.png'
import { Zoom } from "react-awesome-reveal";
function Blog() {
    return (
        <div className='blog ' id='blog'>
            <div className="container pt-100">
                <div className="row">
                    <div className="col-md-12">
                        <div className="heading">
                            <h2 className='text-center'>Our Blogs</h2>
                            <p className='text-center'>LATEST NEWS FROM OUR BLOG</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                        <Zoom>
                        <div className="blog_box">
                            <div className="blog_img">
                                <img src= {blog1} alt="blogimg1" className='img-fluid' />
                            </div>
                            <div class="blog_content">
                            {/* <a href="/" class="blog_date">Sept. 1, 2021</a> */}
                            <a href="/" class="blog_heading">Which Project Is Better: Cardano Or Polk<span class="font-weight-light text-danger" >&nbsp;  </span></a>
                        </div>
                        </div>
                        </Zoom>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                    <Zoom>
                        <div className="blog_box">
                            <div className="blog_img">
                                <img src= {blog2} alt="blogimg1" className='img-fluid' />
                            </div>
                            <div class="blog_content">
                            {/* <a href="/" class="blog_date">Sept. 1, 2021</a> */}
                            <a href="/" class="blog_heading">How blockchain will change organizations<span class="font-weight-light text-danger" >&nbsp;  </span></a>
                        </div>
                        </div>
                        </Zoom>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                    <Zoom>
                        <div className="blog_box">
                            <div className="blog_img">
                                <img src= {blog3} alt="blogimg1" className='img-fluid' />
                            </div>
                            <div class="blog_content">
                            {/* <a href="/" class="blog_date">Sept. 1, 2021</a> */}
                            <a href="/" class="blog_heading">Why is the Binance Smart Chain so popula<span class="font-weight-light text-danger" >&nbsp;  </span></a>
                        </div>
                        </div>
                        </Zoom>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                    <Zoom>
                        <div className="blog_box">
                            <div className="blog_img">
                                <img src= {blog4} alt="blogimg1" className='img-fluid' />
                            </div>
                            <div class="blog_content">
                            {/* <a href="/" class="blog_date">Sept. 1, 2021</a> */}
                            <a href="/" class="blog_heading">How Do You Make Your Own NFT Real Estate<span class="font-weight-light text-danger" >&nbsp;  </span></a>
                        </div>
                        </div>
                        </Zoom>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                    <Zoom>
                        <div className="blog_box">
                            <div className="blog_img">
                                <img src= {blog5} alt="blogimg1" className='img-fluid' />
                            </div>
                            <div class="blog_content">
                            {/* <a href="/" class="blog_date">Sept. 1, 2021</a> */}
                            <a href="/" class="blog_heading">Writting a Good Essay: Planning Your Essa<span class="font-weight-light text-danger" >&nbsp;  </span></a>
                        </div>
                        </div>
                        </Zoom>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                    <Zoom>
                        <div className="blog_box">
                            <div className="blog_img">
                                <img src= {blog6} alt="blogimg1" className='img-fluid' />
                            </div>
                            <div class="blog_content">
                            {/* <a href="/" class="blog_date">Sept. 1, 2021</a> */}
                            <a href="/" class="blog_heading">Enhance Your App Downloads by Shrinking<span class="font-weight-light text-danger" >&nbsp;  </span></a>
                        </div>
                        </div>
                        </Zoom>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog
