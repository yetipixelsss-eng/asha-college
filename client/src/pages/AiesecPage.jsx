import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Aiesec from '../components/Aiesec';
import Icons8Icon from '../components/Icons8Icon';
import RightArrowIcon from '../components/RightArrowIcon';
import './Pages.css';

const AiesecPage = () => {
  const navigate = useNavigate();

  const leadershipQualities = [
    {
      title: 'Self-Aware',
      desc: 'Understand personal strengths, values, and passions through challenging international environments.',
      icon: 'sparkle'
    },
    {
      title: 'Empowering Others',
      desc: 'Communicate clearly in diverse environments and inspire teammates toward shared social goals.',
      icon: 'users'
    },
    {
      title: 'Solution-Oriented',
      desc: 'Take responsibility, adapt swiftly to unexpected roadblocks, and navigate cross-cultural friction.',
      icon: 'target'
    },
    {
      title: 'World Citizen',
      desc: 'Actively engage with the UN Sustainable Development Goals (SDGs) and global communities.',
      icon: 'globe'
    }
  ];

  return (
    <div className="aiesec-page">
      <PageHeader
        badge="Global Leadership Partner"
        badgeIcon="globe"
        title="AIESEC at Asha College"
        subtitle="Unlocking world-class leadership, cross-cultural competence, and international internship opportunities for Asha students."
        breadcrumb="AIESEC"
      />

      {/* Main AIESEC section */}
      <Aiesec isHomePage={false} />

      {/* Leadership Framework */}
      <section className="page-section bg-cream">
        <div className="container">
          <div className="section-head text-center">
            <p className="section-eyebrow">Leadership Development Model</p>
            <h2 className="section-title">The 4 Qualities We Develop</h2>
            <p className="section-subtitle">
              AIESEC experiences are purpose-built to prepare you for the 21st-century global workforce.
            </p>
          </div>

          <div className="core-values-grid">
            {leadershipQualities.map((item, i) => (
              <div key={i} className="core-value-card">
                <div className="core-value-icon">
                  <Icons8Icon name={item.icon} size={28} variant="accent" glow />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="page-cta-strip">
        <div className="container">
          <div className="page-cta-inner">
            <div>
              <h3>Ready to Experience the World?</h3>
              <p>Sign up for an AIESEC informational session or apply directly with Asha's local committee.</p>
            </div>
            <div className="page-cta-buttons">
              <button className="btn-primary" onClick={() => navigate('/contact')}>
                <span>Join AIESEC Today</span>
                <RightArrowIcon size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiesecPage;

