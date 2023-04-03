import React from 'react'
import logo from '../../assets/logo.svg'
import './footer.css'

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-title">
        <div className="gpt3__footer-heading">
          <h1 className="gradient__text">
            Do you want to step in to the future before others
          </h1>
        </div>

        <div className="gpt3__footer-btn">
          <a href="#!">Request Early Access</a>
        </div>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={logo} alt="Logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <ul>
            <li>
              <a href="#!">Overons</a>
            </li>
            <li>
              <a href="#!">Social Media</a>
            </li>
            <li>
              <a href="#!">Counters</a>
            </li>
            <li>
              <a href="#!">Contact</a>
            </li>
          </ul>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <ul>
            <li>
              <a href="#!">Terms & Conditions</a>
            </li>
            <li>
              <a href="#!">Privacy Policy</a>
            </li>
            <li>
              <a href="#!">Contact</a>
            </li>
          </ul>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <ul>
            <li>
              <a href="#!">Crechterwoord K12 182 DK Alknjkcb</a>
            </li>
            <li>
              <a href="#!">085-132567</a>
            </li>
            <li>
              <a href="mailto:info@payme.net">info@payme.net</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="gpt3__footer-copyright">
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
