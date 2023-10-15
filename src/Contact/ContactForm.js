import React from 'react'
import './contactform.css'
import img1 from '../assets/btn.png'
import img2 from '../assets/conim.png'

function ContactForm() {
  return (
    <div className='contact-form'>
        <div className='contact-text'>
            <h1>We Would Love To Hear <br/>About Your Next Project</h1>
            <div>
            <label>Name</label><br/>
            <input type='text' placeholder='Tell Us Your Name'/>
            </div>
           <div>
           <label>Email</label><br/>
            <input type='text' placeholder='How Can We Contact You?'/>
           </div>
           <div>
           <label>Phone Number</label><br/>
            <input type='text' placeholder='How Can We Contact You?'/>
           </div>
           <div>
           <label>Your Message</label><br/>
            <input type='textarea' placeholder='What Would You Like To Talk To Us About?'/>
           </div>
           <button>Send Message <img src={img1}/></button>
        </div>
        <div className='contact-image'>
            <img src={img2}/>
        </div>
    </div>
  )
}

export default ContactForm