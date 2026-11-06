import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Aiesec.css';
import Icons8Icon from './Icons8Icon';
import aiesecLogo from '../assets/aiesec-logo.png';
import RightArrowIcon from './RightArrowIcon';

const getAiesecIcon = (title = '') => {
  if (title.includes('Volunteer')) return 'volunteer';
  if (title.includes('Talent')) return 'briefcase';
  if (title.includes('Teacher')) return 'teacher';
  return 'globe';
};

const Aiesec = ({ isHomePage = false }) => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/api/aiesec')
      .then(r => r.json())
      .then(setData)
      .catch(() => setData({
        title: 'AIESEC at Asha',
        description: "AIESEC is the world's largest youth-run organization, present at Asha College to empower young people through leadership development, international internships, and volunteering opportunities.",
        opportunities: [
          { title: 'Global Volunteer', description: 'Volunteer abroad and make a difference in communities worldwide.', icon: '🌍' },
          { title: 'Global Talent', description: 'Gain international professional experience through paid internships.', icon: '💼' },
          { title: 'Global Teacher', description: 'Teach English and develop leadership skills globally.', icon: '📝' }
        ]
      }));
  }, []);

  if (!data) return null;

  return (
    <section className="aiesec" id="aiesec">
      <div className="aiesec__bg-pattern" />
      <div className="container">
        <div className="aiesec__grid">
          {/* Left content */}
          <div className="aiesec__content">
            <div className="aiesec__logo-wrapper">
              <img src={aiesecLogo} alt="AIESEC Logo" className="aiesec__logo-img" />
            </div>
            <h2 className="section-title aiesec__title">{data.title || 'AIESEC at Asha'}</h2>
            <p className="section-subtitle">{data.description}</p>

            <div className="aiesec__highlights">
              <div className="aiesec__highlight">
                <Icons8Icon name="globe" size={26} variant="accent" glow />
                <strong>120+</strong>
                <span>Countries</span>
              </div>
              <div className="aiesec__highlight">
                <Icons8Icon name="users" size={26} variant="accent" glow />
                <strong>6500+</strong>
                <span>Partner Orgs</span>
              </div>
              <div className="aiesec__highlight">
                <Icons8Icon name="sparkle" size={26} variant="accent" glow />
                <strong>100K+</strong>
                <span>Opportunities</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <button className="btn-primary aiesec__cta" onClick={() => navigate(isHomePage ? '/aiesec' : '/contact')}>
                <span>{isHomePage ? 'Explore AIESEC Programs' : 'Join AIESEC at Asha'}</span>
                <RightArrowIcon size={18} />
              </button>
            </div>
          </div>

          {/* Opportunity cards */}
          <div className="aiesec__opportunities">
            {data.opportunities.map((op, i) => (
              <div className="aiesec__card" key={i} style={{ animationDelay: `${i * 0.15}s` }}>
                <div className="aiesec__card-icon">
                  <Icons8Icon name={getAiesecIcon(op.title)} size={30} variant="accent" glow />
                </div>
                <div className="aiesec__card-content">
                  <h3>{op.title}</h3>
                  <p>{op.description}</p>
                </div>
                <button
                  className="aiesec__card-btn"
                  onClick={() => navigate(isHomePage ? '/aiesec' : '/contact')}
                >
                  <span>{isHomePage ? 'Learn More' : 'Apply'}</span>
                  <Icons8Icon name="arrow-right" size={16} variant="accent" glow />
                </button>
              </div>
            ))}

            <div className="aiesec__info-card">
              <h4>
                <Icons8Icon name="globe" size={22} variant="gold" glow />
                <span>Global Leadership Experience</span>
              </h4>
              <p>Through AIESEC, Asha students can explore the world, develop cross-cultural competencies, and become truly global citizens before graduating.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aiesec;

