import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';
import Icons8Icon from './Icons8Icon';
import RightArrowIcon from './RightArrowIcon';
import heroSlide2 from '../assets/hero-slide-2.jpg';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=1600&h=900&fit=crop',
    title: 'Welcome to Asha School / College',
    subtitle: 'Nurturing Excellence Since 1997',
    description: 'Empowering students with knowledge, values, and skills to shape a brighter future for Nepal and beyond.',
    cta: 'Explore Programs',
    path: '/school'
  },
  {
    id: 2,
    image: heroSlide2,
    title: 'Admissions Open 2081/82',
    subtitle: 'Your Journey Starts Here',
    description: 'Join thousands of students who have built their future with Asha. Apply now for school and +2 programs.',
    cta: 'Apply Now',
    path: '/contact'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1600&h=900&fit=crop',
    title: 'Academic Excellence',
    subtitle: 'Outstanding SEE & NEB Results',
    description: 'Our students consistently achieve top results with 95% scoring A and A+ in national examinations.',
    cta: 'Learn More',
    path: '/about'
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      setIsAnimating(false);
    }, 300);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
      setIsAnimating(false);
    }, 300);
  };

  const handleAction = (path) => {
    if (path) navigate(path);
  };

  const slide = slides[current];

  return (
    <section className="hero" id="hero">
      {/* Background slides */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={`hero__bg hero__bg--slide-${s.id} ${i === current ? 'hero__bg--active' : ''}`}
          style={{ backgroundImage: `url(${s.image})` }}
        />
      ))}

      {/* Overlay */}
      <div className="hero__overlay" />

      {/* Content */}
      <div className={`hero__content container ${isAnimating ? 'hero__content--exit' : 'hero__content--enter'}`}>
        <div className="hero__badge">
          <Icons8Icon name="star" size={15} variant="gold" glow />
          <span>Est. 1997 • Kathmandu-31, Nepal</span>
        </div>
        <h1 className="hero__title">{slide.title}</h1>
        <p className="hero__subtitle">{slide.subtitle}</p>
        <p className="hero__desc">{slide.description}</p>
        <div className="hero__actions">
          <button className="btn-primary hero__btn" onClick={() => handleAction(slide.path)}>
            <span>{slide.cta}</span>
            <RightArrowIcon size={19} />
          </button>
          <button className="btn-primary hero__btn" onClick={() => handleAction('/contact')}>
            <Icons8Icon name="contact" size={19} variant="accent" glow />
            <span>Contact Us</span>
          </button>
        </div>
      </div>

      {/* Stats bar */}
      <div className="hero__stats">
        <div className="container">
          <div className="hero__stats-grid">
            <div className="hero__stat">
              <Icons8Icon name="users" size={24} variant="accent" glow />
              <strong>5000+</strong>
              <span>Students</span>
            </div>
            <div className="hero__stat">
              <Icons8Icon name="teacher" size={24} variant="accent" glow />
              <strong>200+</strong>
              <span>Faculty</span>
            </div>
            <div className="hero__stat">
              <Icons8Icon name="history" size={24} variant="accent" glow />
              <strong>28+</strong>
              <span>Years of Excellence</span>
            </div>
            <div className="hero__stat">
              <Icons8Icon name="trophy" size={24} variant="gold" glow />
              <strong>95%</strong>
              <span>Pass Rate</span>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <button className="hero__arrow hero__arrow--left" onClick={prevSlide} aria-label="Previous slide">
        <Icons8Icon name="chevron-left" size={22} />
      </button>
      <button className="hero__arrow hero__arrow--right" onClick={nextSlide} aria-label="Next slide">
        <Icons8Icon name="chevron-right" size={22} />
      </button>

      {/* Dots */}
      <div className="hero__dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero__dot ${i === current ? 'hero__dot--active' : ''}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;

