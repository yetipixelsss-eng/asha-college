import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import About from '../components/About';
import Icons8Icon from '../components/Icons8Icon';
import RightArrowIcon from '../components/RightArrowIcon';
import chancellorImg from '../assets/chancellor.jpg';
import './Pages.css';

const AboutPage = () => {
  const navigate = useNavigate();

  const coreValues = [
    {
      icon: 'sparkle',
      title: 'Academic Rigor',
      desc: 'High standards of teaching, continuous assessment, and individual mentorship to foster intellectual curiosity.'
    },
    {
      icon: 'target',
      title: 'Moral Integrity',
      desc: 'Instilling ethical values, respect, honesty, and social responsibility across all levels of learning.'
    },
    {
      icon: 'globe',
      title: 'Global Perspective',
      desc: 'Collaborations with international organizations like AIESEC to prepare students for global challenges.'
    },
    {
      icon: 'trophy',
      title: 'Holistic Excellence',
      desc: 'Nurturing talents in sports, debate, cultural arts, science research, and leadership initiatives.'
    }
  ];

  const milestones = [
    { year: '1997', title: 'Foundation', desc: 'Established in Kathmandu-31 with a vision of accessible quality schooling.' },
    { year: '2005', title: 'Campus Expansion', desc: 'Upgraded infrastructure with modern science & computer laboratories.' },
    { year: '2012', title: 'College Inception (+2)', desc: 'Affiliated with NEB offering Science, Management, and Humanities streams.' },
    { year: '2018', title: 'AIESEC Partnership', desc: 'Launched international exchange & youth leadership programs on campus.' },
    { year: '2024', title: 'Smart Innovation Hub', desc: 'Integrated digital smart classrooms, AI labs, and high-speed research facilities.' }
  ];

  return (
    <div className="about-page">
      <PageHeader
        badge="28+ Years of Academic Excellence"
        badgeIcon="trophy"
        title="About Asha School & College"
        subtitle="Pioneering quality education, ethical leadership, and holistic development in Kathmandu-31 since 1997."
        breadcrumb="About Us"
      />

      {/* Main About Component */}
      <About isHomePage={false} />

      {/* Chancellor's Message Section */}
      <section className="page-section chancellor-section bg-cream">
        <div className="container">
          <div className="chancellor-card">
            <div className="chancellor-grid">
              {/* Chancellor Portrait Column */}
              <div className="chancellor-portrait-col">
                <div className="chancellor-photo-frame">
                  <img
                    src={chancellorImg}
                    alt="Bal Mukunda Mainali - Chancellor of Asha School & College"
                    className="chancellor-photo"
                  />
                  <div className="chancellor-photo-badge">
                    <Icons8Icon name="trophy" size={15} variant="accent" glow />
                    <span>Institutional Chancellor</span>
                  </div>
                </div>
                <div className="chancellor-credentials">
                  <h3 className="chancellor-name">Bal Mukunda Mainali</h3>
                  <p className="chancellor-title">Chancellor & Founding Leader</p>
                  <p className="chancellor-affiliation">Asha School & College • Kathmandu-31</p>
                </div>
              </div>

              {/* Chancellor Say / Message Column */}
              <div className="chancellor-content-col">
                <div className="chancellor-header">
                  <p className="section-eyebrow">Leadership Perspective</p>
                  <h2 className="section-title">Message from the Chancellor</h2>
                </div>

                <div className="chancellor-quote-lead">
                  <span className="chancellor-quote-mark">“</span>
                  <p className="chancellor-lead-text">
                    Education at Asha is not simply about academic instruction; it is a life-shaping journey of intellect, moral integrity, and purposeful leadership.
                  </p>
                </div>

                <div className="chancellor-body-text">
                  <p>
                    When we laid the foundation of Asha School & College in 1997, our goal was clear: to establish an academic haven in Kathmandu-31 where every student, regardless of background, can cultivate intellectual curiosity alongside grounded ethical values. Over the past twenty-eight years, watching thousands of our graduates step into the world as doctors, entrepreneurs, engineers, and public servants has been our greatest reward.
                  </p>
                  <p>
                    In this fast-evolving global era, we continuously upgrade our pedagogy—integrating practical science, global exchange partnerships through AIESEC, and digital smart-learning environments. Yet, through all innovation, our core philosophy remains unchanged: character precedes career, and discipline precedes success.
                  </p>
                  <p>
                    I extend a warm welcome to all students, parents, and guardians. Join us as we partner together in nurturing the next generation of visionary thinkers and nation-builders.
                  </p>
                </div>

                <div className="chancellor-signature-block">
                  <div className="chancellor-signature-text">
                    <strong>Bal Mukunda Mainali</strong>
                    <span>Chancellor, Asha School & College</span>
                  </div>
                  <div className="chancellor-tenure-badge">
                    <Icons8Icon name="history" size={16} variant="gold" glow />
                    <span>Serving Since 1997</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="page-section">
        <div className="container">
          <div className="section-head text-center">
            <p className="section-eyebrow">Guiding Principles</p>
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">
              The fundamental pillars that guide our educators, students, and community every single day.
            </p>
          </div>

          <div className="core-values-grid">
            {coreValues.map((v, i) => (
              <div key={i} className="core-value-card">
                <div className="core-value-icon">
                  <Icons8Icon name={v.icon} size={28} variant="accent" glow />
                </div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Historical Milestones */}
      <section className="page-section bg-cream">
        <div className="container">
          <div className="section-head text-center">
            <p className="section-eyebrow">Our Journey</p>
            <h2 className="section-title">Milestones of Excellence</h2>
            <p className="section-subtitle">
              Over nearly three decades, Asha has grown into one of Nepal's most trusted educational institutions.
            </p>
          </div>

          <div className="milestones-timeline">
            {milestones.map((m, i) => (
              <div key={i} className="milestone-item">
                <div className="milestone-year">{m.year}</div>
                <div className="milestone-dot" />
                <div className="milestone-content">
                  <h4>{m.title}</h4>
                  <p>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="page-cta-strip">
        <div className="container">
          <div className="page-cta-inner">
            <div>
              <h3>Ready to Join the Asha Community?</h3>
              <p>Admissions are open for Nursery through Grade 10 and +2 Science, Management & Humanities.</p>
            </div>
            <div className="page-cta-buttons">
              <button className="btn-primary" onClick={() => navigate('/contact')}>
                <span>Apply Now</span>
                <RightArrowIcon size={18} />
              </button>
              <button className="btn-primary" onClick={() => navigate('/school')}>
                <Icons8Icon name="school" size={18} variant="accent" glow />
                <span>Explore School</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

