import React from "react"
import { blog } from "../../dummydata"
import "./footer.css"

const Footer = () => {
  return (
    <>
      
      <footer>
        <div className='container padding'>
          <div className='box'>
            <h1>Simpl<span style={{color:"#915eff"}}>Byte</span></h1>
            <span className="kid">ONLINE EDUCATION & LEARNING</span>
            <p>We are committed to making your virtual internship experience a success. Our goal is to help you build a strong foundation for your future, and we are dedicated to providing the support and resources you need to achieve your goals.</p>
            <div className="logos">
                <i className='fab fa-facebook-f icon'></i>
                <i className='fab fa-twitter icon'></i>
                <i className='fab fa-instagram icon'></i>
            </div>
            
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#service">Services</a></li>
              <li><a href="#internship">Internships</a></li>
              <li><a href="#contact">Contact</a></li>
              
            </ul>
          </div>
          <div className='box link'>
            <h3>Internship</h3>
            <ul>
              <li><a href="#web">Web Development</a></li>
              <li><a href="#app">App Development</a></li>
              <li><a href="#graphic">Graphic Design</a></li>
              <li><a href="#java">Java Internship</a></li>
              <li><a href="#marketing">Social-Media-Marketin</a></li>
              <li><a href="#data">Data Science</a></li>
            </ul>
          </div>
          
          
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright © 2023 Simpl<span 
          style={{color:"#915eff",
          fontWeight:"bolder"
        
        }}>Byte</span>.tech Pvt.Ltd. All rights reserved.
        </p>
      </div>
    </>
  )
}

export default Footer