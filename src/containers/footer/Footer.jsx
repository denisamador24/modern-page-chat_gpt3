import logo from '../../assets/logo.svg';
import './footer.css'

const Footer = () => {
  return (
    <footer className='gpt3__footer section__padding'>
      <p className='gpt3__footer-title gradient__text'>Do you want to step in to the future before others</p>
      <div className='gpt3__footer-button'>
        <button>Request Early Access</button>
      </div>
      <div className='gpt3__footer-links'>
        <div className="gpt3__footer-links__content">
          <div className='gpt3__footer-links__logo'>
            <img src={logo} alt="Logo" />
            <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
          </div>
        </div>
        <div className="gpt3__footer-links__content">
          <p>Links</p>
          <ul>
            <li>Overons</li>
            <li>Social Media</li>
            <li>Counters</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="gpt3__footer-links__content">
          <p>Company</p>
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="gpt3__footer-links__content">
          <p>Get in touch</p>
          <ul>
            <li>Crechterwoord K12 182 DK Alknjkcb</li>
            <li>085-132567</li>
            <li>info@payme.net</li>
          </ul>
        </div>
      </div>
      <p className='gpt3__footer-copyright'>© 2023 GPT-3. All rights reserved.</p>
    </footer>
  )
}

export default Footer