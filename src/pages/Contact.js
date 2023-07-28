import React, { useState, useEffect } from 'react'
import axios from 'axios'
import $ from 'jquery';
import contact_img from '../assets/images/contact.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Fade } from "react-awesome-reveal";
function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
  

  
    useEffect(() => {

        $("#name").hide()
        $("#email").hide()
      
        $("#phone").hide()
        $("#phoneCheck").hide()
        $("#subject").hide()
        $("#message").hide()

    }, [])
    $(".validate").keypress(function () {
        $("#name").hide()
        $("#email").hide()
      
        $("#phone").hide()
        $("#phoneCheck").hide()
        $("#subject").hide()
        $("#message").hide()
    })
    const sendMessage = () => {
        const regex = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        var data = { name: name, email: email, phone: phone, subject: subject, message: message }
        if (data.name === undefined || data.name === "") {
            $("#name").show()
        }
        else if (data.email === undefined || data.email === "" || regex.test(data.email) === false) {
            $("#email").show()
        }
        else if (data.phone === undefined || data.phone === "") {
            $("#phone").show()
        }
        else if ((data.phone).length < 10 || (data.phone).length > 10) {
            $("#phoneCheck").show()
        }

        else if (data.subject === undefined || data.subject === "") {
            $("#subject").show()
        }
        else if (data.message === undefined || data.message === "") {
            $("#message").show()
        }
       

        else {
            axios.post("https://synviseinfo.tech:3000/send_message", data).then((res) => {
                console.log("response", res)

                
            }).catch((err) => {
                console.log("error while submitting data",err)
            })

            toast.success('Thankyou for contact!', {
                position: "top-center",
                theme:"colored",
                type:"success",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            resetForm()
        }
    }




    const resetForm = () => {
        setName("")
        setEmail("")
        setPhone("")
        setSubject("")
        setMessage("")
    }
    return (
        <div className='contact pt-100' id='contact'>
            <div className="container pb-5">
                <div className="row">
                    <div className="col-md-6">
                       <Fade>
                       <img src={contact_img} alt="" className='img-fluid mt-3' />
                       </Fade>
                    </div>
                    <div className="col-md-6">
                        <div className="contact_area">
                            <div className="row">
                                <div className="col-md-12">
                                    <h2 className=' pt-4'>Get in Touch</h2>
                                </div>
                            </div>
                            <div className="row pt-2">
                                <div className="col-md-6 pt-4">
                                    <input type="text" placeholder="Your Name" className="form-control validate" value={name} onChange={(e) => setName(e.target.value)} required />
                                    <p className='error' id='name'>*Enter your Name</p>
                                </div>
                                <div className="col-md-6 pt-4">
                                    <input type="email" placeholder="Your email address" className="form-control validate" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                    <p className='error' id="email">*Enter valid email</p>
                                    
                                </div>
                                <div className="col-md-12 pt-4">
                                    <input type="number" placeholder="Your phone number" className="form-control validate" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                                    <p className='error' id='phone'>*Enter your phone number </p>
                                    <p className='error' id='phoneCheck'>*Phone number must be 10 digit</p>
                                </div>
                                <div className="col-md-12 pt-4">
                                    <input type="text" placeholder="Your Subject" className="form-control validate" value={subject} onChange={(e) => setSubject(e.target.value)} required />
                                    <p className='error' id='subject'>*Enter your subject</p>
                                </div>
                                <div className="col-md-12 pt-4">
                                    <textarea placeholder="Write your message..." className="form-control validate" value={message} onChange={(e) => setMessage(e.target.value)} required />
                                    <p className='error' id='message'>*Enter your message</p>
                                </div>
                                <div className="col-md-12 pt-5
                                    ">
                                    <button className='btn btn-danger' onClick={sendMessage}>Send Message</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    )
}


export default Contact
