import React from 'react';
import { Button } from './Button';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          join the adventure newsletter to recieve our best vacation deals

        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input type="email" name="email" placeholder='your Email' className='footer-input' />
            <Button buttonStyle="btn--oultline">Subscribe</Button>
          </form>

        </div>


      </section>

      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2 >About Us</h2>
            <Link to='/Sign-Up'> How it works</Link>
            <Link to="/Testimonials"> Testimonials</Link>
            <Link to="/Careers"> Careers</Link>
            <Link to="/Investors">Investors</Link>
            <Link to="/Terms of services">Term of services</Link>

          </div>


          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/Sign-Up'> How it works</Link>
            <Link to="/Testimonials"> Testimonials</Link>
            <Link to="/Careers"> Careers</Link>
            <Link to="/Investors">Investors</Link>
            <Link to="/Terms of services">Term of services</Link>

          </div>
        </div>

        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/Sign-Up'> How it works</Link>
            <Link to="/Testimonials"> Testimonials</Link>
            <Link to="/Careers"> Careers</Link>
            <Link to="/Investors">Investors</Link>
            <Link to="/Terms of services">Term of services</Link>

          </div>


          <div className='footer-link-items'>
            <h2>Social media</h2>
            <Link to='/Sign-Up'> How it works</Link>
            <Link to="/Testimonials"> Testimonials</Link>
            <Link to="/Careers"> Careers</Link>
            <Link to="/Investors">Investors</Link>
            <Link to="/Terms of services">Term of services</Link>

          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>TRVL <i className='fab fa-typo3' /></Link>

          </div>

          <small className='website-rights'>TRVL 2020</small>
          <div className='social-icons'>
            <Link className='social-icon-link facebook' to='/' target='_blank' aria-label='Facebook'>
              <i class="fa-brands fa-facebook"></i>
            </Link>

            <Link className='social-icon-link instagram' to='/' target='_blank' aria-label='instagram'>
              <i class="fa-brands fa-instagram"></i>
            </Link>

            <Link className='social-icon-link twitter' to='/' target='_blank' aria-label='twitter'>
              <i class="fa-brands fa-twitter"></i>
            </Link>

            <Link className='social-icon-link linkedin' to='/' target='_blank' aria-label='linkedin'>
              <i class="fa-brands fa-linkedin"></i>
            </Link>


            <Link className='social-icon-link youtube' to='/' target='_blank' aria-label='youtube'>
              <i class="fa-brands fa-youtube"></i>
            </Link>

          </div>
        </div>
      </section>





    </div>
  );
}

export default Footer
