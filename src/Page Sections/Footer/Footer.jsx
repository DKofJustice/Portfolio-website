import React from 'react';
import EmailIcon from '../../Assets/Icons/eva_email-outline.svg';
import FacebookIcon from '../../Assets/Icons/dashicons_facebook-alt.svg';
import LinkedinIcon from '../../Assets/Icons/akar-icons_linkedin-box-fill.svg';

export default function Footer() {
  return (
    <footer id='footer'>
      <h2>Contact</h2>

      <h3>Get in touch me with the following contact details</h3>

      <div className='contact-list'>
        <div className='contact-email'>
          <img src={EmailIcon} alt="email-icon" />
          <p>alexbenta20@gmail.com</p>
        </div>
      </div>

      <div className='social-list'>
        <div className='facebook-link'>
          <img src={FacebookIcon} alt="facebook-icon" />
        </div>

        <div className='linkedin-link'>
          <img src={LinkedinIcon} alt="linkedin-link" />
        </div>
      </div>

      <form action="">
        <input type="text" name="name-field" id="name-field" placeholder='Name'/>
        <input type="email" name="email-field" id="email-field" placeholder='Email'/>
        <input type="text" name="subject-field" id="subject-field" placeholder='Subject'/>
        <textarea name="message-field" id="message-field" cols="30" rows="10"></textarea>

        <button type="submit">Send Message</button>
      </form>
    </footer>
  )
}
