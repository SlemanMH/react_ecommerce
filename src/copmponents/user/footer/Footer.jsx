import React from 'react'
import style from './footer.module.css'
import send from '../../../assets/images/footer/send.svg'
import facebook from '../../../assets/images/social/facebook.svg'
import twitter from '../../../assets/images/social/Twitter.svg'
import instagram from '../../../assets/images/social/Instagram.svg'
import linkedin from '../../../assets/images/social/in.svg'
export default function Footer() {
  return (
   <footer className={style.footer}>
  <div className="container">
    <div className="d-flex gap-5 py-2">
      <div className="footer-Exclusive d-flex flex-column gap-2 py-2">
        <h2 className="fs-5">Exclusive</h2>
        <a href>Subscribe</a>
        <p>Get 10% off your first order</p>
        <div className='position-relative'>
          <input type="text" placeholder="Enter your email" className="w-14 email " />
          <img src={send} alt="send-icon" className={`${style.emailSend} position-absolute`} />
        </div>
      </div>
      <div className="footer-Support d-flex flex-column gap-2">
        <h2 className="fs-5">Support</h2>
        <nav className="d-flex flex-column gap-2">
          <a href>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</a>
          <a href>exclusive@gmail.com</a>
          <a href>+88015-88888-9999</a>
        </nav>
      </div>
      <div className="footer-Account d-flex flex-column gap-2">
        <h2 className="fs-5">Account</h2>
        <nav className="d-flex flex-column gap-2">
          <a href>My Account</a>
          <a href>Login / Register</a>
          <a href>Cart</a>
          <a href>Wishlist</a>
          <a href>Shop</a>
        </nav>
      </div>
      <div className="footer-QuickLink d-flex flex-column gap-2">
        <h2 className="fs-5">Quick Link</h2>
        <nav className="d-flex flex-column gap-2">
          <a href>Privacy Policy</a>
          <a href>Terms Of Use</a>
          <a href>FAQ</a>
          <a href>Contact</a>
        </nav>
      </div>
      <div className="footer-DownloadApp d-flex flex-column gap-2">
        <h2 className="fs-5">Download App</h2>
        <div className="social d-flex gap-2">
          <img src={facebook} alt="facebookLogo" />
          <img src={twitter} alt="TwitterLogo" />
          <img src={instagram} alt="InstagramLogo" />
          <img src={linkedin} alt="LinkedinLogo" />
        </div>
      </div>
    </div>
  </div>
</footer>

  )
}
