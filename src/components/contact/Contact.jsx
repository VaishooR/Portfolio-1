import React from 'react';
import './Contact.css'

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className='mini-icons'>
        <div title="Github"><a href="https://github.com/VaishooR" target="_blank"><i class="fa-brands fa-github"></i></a></div>
        <div title="LinkedIn"><a href="https://www.linkedin.com/in/vaishnavi-r-bb1177159/" target="_blank"><span class="material-symbols-outlined">diversity_3</span></a></div>
        <div title="Netlify"><a href="https://app.netlify.com/teams/vaishoor/sites" target="_blank"><i class="fa-solid fa-diamond"></i></a></div>
      </div>
      <div className="contact-left">
        <div className="contact-form">
          <div>Contact Me</div>
          <form action="">
            <input type="text" placeholder='Contact Number'/>
            <input type="email" placeholder='Email Address'/>
            <textarea name="" id="" cols="20" rows="5" placeholder="Type here . . ."></textarea>
            <input type="submit" className='submitbutton'/>
          </form>
        </div>
      </div>
      <div className="contact-right">
        <img src="assets/skill-icons/services5.jpg" alt="" />
      </div>
    </div>
  )
}
