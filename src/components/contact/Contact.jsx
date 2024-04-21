import React, { useRef } from 'react';
import emailjs, { send } from '@emailjs/browser';
import Back from "../common/back/Back"
import "./contact.css"

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    

    emailjs.sendForm('service_zwsauc3', 'template_mbnb2tb', form.current, 'SxrPpbX2q4bDrf7xo')
      .then((result) => {
          alert(result.text);
      }, (error) => {
          alert(error.text);
      });
      // e.target.reset;
  };
  
  
  const map = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d904726.6131739549!2d85.24565535!3d27.65273865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1652535615693!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" '
  return (
    <>
      <Back title='Contact us' />
      <section className='contacts padding' id="contact">
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe src={map}></iframe>
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>198 West 21th Street, Suite 721 New York NY 10016</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> info@yoursite.com</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p> + 1235 2355 98</p>
              </div>
            </div>

            <form ref={form} onSubmit={sendEmail}>
              <div className='flexSB'>
                <input type='text' placeholder='Name' name="from_name" />
                <input type='email' placeholder='Email'name="from_email" />
              </div>
              <input type='text' placeholder='Subject' name='from_subject' />
              <textarea cols='30' rows='10' name="message">
                Create a message here...
              </textarea>
              <button type ="submit" className='primary-btn' value="send">SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact;