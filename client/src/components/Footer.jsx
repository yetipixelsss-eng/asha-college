import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../assets/logo.png';
import Icons8Icon from './Icons8Icon';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="container">
          <div className="footer__grid">
            {/* Brand */}
            <div className="footer__brand">
              <Link to="/" className="footer__logo">
                <img src={logo} alt="Asha Logo" />
                <div>
                  <span className="footer__logo-name">ASHA</span>
                  <span className="footer__logo-sub">School / College</span>
                </div>
              </Link>
              <p>Established in 1997 in Kathmandu-31, Asha School/College has been shaping the future of Nepal through quality education, character building, and holistic development.</p>
              <div className="footer__social">
                <a href="https://facebook.com" className="footer__social-link footer__social-link--fb" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Icons8Icon name="facebook" size={19} />
                </a>
                <a href="https://instagram.com" className="footer__social-link footer__social-link--ig" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Icons8Icon name="instagram" size={19} />
                </a>
                <a href="https://youtube.com" className="footer__social-link footer__social-link--yt" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <Icons8Icon name="youtube" size={19} />
                </a>
                <a href="https://twitter.com" className="footer__social-link footer__social-link--tw" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                  <Icons8Icon name="twitter" size={19} />
                </a>
              </div>
            </div>

            {/* Quick links */}
            <div className="footer__links">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/"><Icons8Icon name="arrow-right" size={14} variant="accent" /> Home</Link></li>
                <li><Link to="/about"><Icons8Icon name="arrow-right" size={14} variant="accent" /> About Us</Link></li>
                <li><Link to="/school"><Icons8Icon name="arrow-right" size={14} variant="accent" /> School (Nursery–10)</Link></li>
                <li><Link to="/college"><Icons8Icon name="arrow-right" size={14} variant="accent" /> College (+2)</Link></li>
                <li><Link to="/events"><Icons8Icon name="arrow-right" size={14} variant="accent" /> Events & Blog</Link></li>
                <li><Link to="/aiesec"><Icons8Icon name="arrow-right" size={14} variant="accent" /> AIESEC</Link></li>
                <li><Link to="/community"><Icons8Icon name="arrow-right" size={14} variant="accent" /> Community</Link></li>
                <li><Link to="/gallery"><Icons8Icon name="arrow-right" size={14} variant="accent" /> Gallery</Link></li>
                <li><Link to="/contact"><Icons8Icon name="arrow-right" size={14} variant="accent" /> Contact Us</Link></li>
              </ul>
            </div>

            {/* Programs */}
            <div className="footer__links">
              <h4>Programs</h4>
              <ul>
                <li><Link to="/school"><Icons8Icon name="sprout" size={16} variant="accent" glow /> Nursery & KG</Link></li>
                <li><Link to="/school"><Icons8Icon name="books" size={16} variant="accent" glow /> Primary (Grade 1–5)</Link></li>
                <li><Link to="/school"><Icons8Icon name="cap" size={16} variant="accent" glow /> Secondary (SEE)</Link></li>
                <li><Link to="/college"><Icons8Icon name="microscope" size={16} variant="accent" glow /> +2 Science</Link></li>
                <li><Link to="/college"><Icons8Icon name="chart" size={16} variant="accent" glow /> +2 Management</Link></li>
                <li><Link to="/college"><Icons8Icon name="literature" size={16} variant="accent" glow /> +2 Humanities</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer__contact">
              <h4>Contact</h4>
              <div className="footer__contact-items">
                <div className="footer__contact-item">
                  <Icons8Icon name="location" size={20} variant="accent" glow />
                  <p>Kathmandu-31, Bagmati Province, Nepal</p>
                </div>
                <div className="footer__contact-item">
                  <Icons8Icon name="phone" size={20} variant="accent" glow />
                  <p>+977-01-XXXXXXX</p>
                </div>
                <div className="footer__contact-item">
                  <Icons8Icon name="mail" size={20} variant="accent" glow />
                  <p>info@ashacollege.edu.np</p>
                </div>
                <div className="footer__contact-item">
                  <Icons8Icon name="clock" size={20} variant="accent" glow />
                  <p>Sun–Fri: 7AM – 5PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>© {year} Asha School / College. All Rights Reserved. | Kathmandu-31, Nepal</p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
