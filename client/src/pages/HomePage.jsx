import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import { School, College } from '../components/SchoolCollege';
import Events from '../components/Events';
import Aiesec from '../components/Aiesec';
import Icons8Icon from '../components/Icons8Icon';
import RightArrowIcon from '../components/RightArrowIcon';
import './Pages.css';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      {/* Hero Section */}
      <Hero />

      {/* About Preview */}
      <About isHomePage={true} />

      {/* School Preview */}
      <School isHomePage={true} />

      {/* College Preview */}
      <College isHomePage={true} />

      {/* Latest Events & Blog */}
      <Events isHomePage={true} limit={3} />

      {/* AIESEC at Asha */}
      <Aiesec isHomePage={true} />

      {/* Quick Enquire / Admissions Callout */}
      <section className="home-cta-banner">
        <div className="container">
          <div className="home-cta-card">
            <div className="home-cta-badge">
              <Icons8Icon name="star" size={14} variant="gold" />
              <span>Admissions Open 2081/82</span>
            </div>
            <h2>Begin Your Academic Journey With Asha</h2>
            <p>
              Join a community committed to excellence, innovation, and character building.
              Explore our modern classrooms, meet experienced faculty, and discover scholarship opportunities.
            </p>
            <div className="home-cta-actions">
              <button type="button" className="btn-gold" onClick={() => navigate('/contact')}>
                <span>Apply for Admission</span>
                <RightArrowIcon size={16} />
              </button>
              <button type="button" className="home-cta-secondary-btn" onClick={() => navigate('/about')}>
                <span>Learn More About Us</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

