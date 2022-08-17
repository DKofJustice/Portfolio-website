import React from 'react';
import EmailIcon from '../../Assets/Icons/eva_email-outline.svg';
import FacebookIcon from '../../Assets/Icons/dashicons_facebook-alt.svg';
import LinkedinIcon from '../../Assets/Icons/akar-icons_linkedin-box-fill.svg';
import DribbbleIcon from '../../Assets/Icons/akar-icons_dribbble-fill.svg';

export default function Footer() {

  //Setup input values using state

  /*
    const [inputData, setInputData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
    });
  */


  //Handling form submission
  
  /*
    const submitForm = (e) => {
    e.preventDefault();

    console.log(inputData)
    
    };
  */

  //Assigning values from inputs
  /*
    const inputChange = (e) => {
    setInputData({...inputData, [e.target.name]: e.target.value});
    console.log(inputData)
    };
  */


  return (
    <footer id='footer'>
      <h2>Contact</h2>

      <p>Get in touch me with the following contact details:</p>

      <div className='contact-list'>
        <div className='contact-email'>
          <img src={EmailIcon} alt="email-icon" />
          <p>bussiness@alexbenta.com</p>
        </div>
      </div>

      <div className='social-list'>
        <a href="https://www.facebook.com/alex.benta.56"
        target='_blank' rel='noreferrer'>
          <div className='facebook-link'>
            <img src={FacebookIcon} alt="facebook-icon" />
          </div>
        </a>

        <a href="https://www.linkedin.com/in/alex-benta-4718a3143/"
        target='_blank' rel='noreferrer'>
          <div className='linkedin-link'>
            <img src={LinkedinIcon} alt="linkedin-link" />
          </div>
        </a>

        <a href="https://dribbble.com/tahu2332/"
        target='_blank' rel='noreferrer'>
          <div className='dribbble-link'>
            <img src={DribbbleIcon} alt="dribbble-link" />
          </div>
        </a>
      </div>

      {/*
      <p className='form-success-message'>Message was sent succesfully, I will contact you as soon as possible</p>
      <form action="" id='contact-form' onSubmit={submitForm}>
        <input type="text" name="name" id="name-field" 
        placeholder='Name' onChange={inputChange} required/>
        <input type="email" name="email" id="email-field" 
        placeholder='Email' onChange={inputChange} required/>
        <input type="text" name="subject" id="subject-field" 
        placeholder='Subject' onChange={inputChange} required/>
        <textarea name="message" id="message-field" cols="30" rows="10"
        placeholder='Enter Message' onChange={inputChange}></textarea>

        <button type="submit">Send Message</button>
      </form>
      */}
    </footer>
  )
}
