import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';
import Icons8Icon from './Icons8Icon';
import RightArrowIcon from './RightArrowIcon';

const About = ({ isHomePage = false }) => {
  const [data, setData] = useState(null);
  const [counted, setCounted] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/api/about')
      .then(r => r.json())
      .then(setData)
      .catch(() => setData({
        title: 'About Asha School / College',
        description: 'Asha School/College, established in 1997 and located in Kathmandu-31, is a premier educational institution committed to nurturing academic excellence, character development, and holistic growth in every student.',
        mission: 'To provide quality education that empowers students to become responsible, innovative, and globally competitive individuals.',
        vision: 'To be the leading educational institution in Nepal, recognized for academic excellence and character building.',
        stats: [
          { label: 'Students Enrolled', value: '5000+' },
          { label: 'Expert Faculty', value: '200+' },
          { label: 'Years of Excellence', value: '28+' },
          { label: 'Alumni Network', value: '20000+' }
        ]
      }));
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted && data) {
          setCounted(true);
          animateCounts();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [data, counted]);

  const animateCounts = () => {
    const targets = [5000, 200, 28, 20000];
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      setCounts(targets.map(t => Math.floor(t * eased)));
      if (step >= steps) clearInterval(timer);
    }, interval);
  };

  if (!data) return null;

  const displayCounts = counted
    ? [counts[0].toLocaleString(), counts[1], counts[2], counts[3].toLocaleString()]
    : ['0', '0', '0', '0'];

  return (
    <section className="about" id="about" ref={sectionRef}>
      <div className="container">
        <div className="about__grid">
          {/* Images mosaic */}
          <div className="about__images">
            <div className="about__img-main">
              <img src="https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop" alt="Campus" />
            </div>
            <div className="about__img-secondary">
              <img src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=300&h=200&fit=crop" alt="Students" />
              <img src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=300&h=200&fit=crop" alt="Classroom" />
            </div>
            <div className="about__badge-float">
              <strong>Est.</strong>
              <span>1997</span>
            </div>
          </div>

          {/* Text content */}
          <div className="about__content">
            <p className="about__eyebrow">Who We Are</p>
            <h2 className="section-title">{data.title}</h2>
            <p className="section-subtitle">{data.description}</p>

            <div className="about__cards">
              <div className="about__card about__card--mission">
                <div className="about__card-icon">
                  <Icons8Icon name="target" size={26} variant="primary" glow />
                </div>
                <div>
                  <h4>Our Mission</h4>
                  <p>{data.mission}</p>
                </div>
              </div>
              <div className="about__card about__card--vision">
                <div className="about__card-icon">
                  <Icons8Icon name="bulb" size={26} variant="primary" glow />
                </div>
                <div>
                  <h4>Our Vision</h4>
                  <p>{data.vision}</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="about__stats">
              {data.stats.map((stat, i) => {
                const statIcons = ['users', 'teacher', 'history', 'trophy'];
                return (
                  <div className="about__stat" key={i}>
                    <Icons8Icon name={statIcons[i] || 'star'} size={24} variant="accent" glow />
                    <strong>
                      {displayCounts[i]}{stat.value.includes('+') ? '+' : ''}
                    </strong>
                    <span>{stat.label}</span>
                  </div>
                );
              })}
            </div>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <button className="btn-primary" onClick={() => navigate(isHomePage ? '/about' : '/school')}>
                <span>{isHomePage ? 'Learn More About Us' : 'Explore Academic Programs'}</span>
                <Icons8Icon name="arrow-right" size={18} variant="accent" glow />
              </button>
              {isHomePage && (
                <button className="btn-primary" onClick={() => navigate('/contact')}>
                  <span>Admissions Inquiry</span>
                  <RightArrowIcon size={17} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

