import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';
import Icons8Icon from './Icons8Icon';
import heroSlide2 from '../assets/hero-slide-2.jpg';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1600&h=900&fit=crop',
    alt: 'Asha School and College graduating students celebrating academic achievement',
    badge: 'EST. 1997 · KATHMANDU, NEPAL',
    titleLine1: 'Building Futures',
    titleLine2Prefix: 'Through ',
    titleHighlight: 'Excellence.',
    description: 'Outstanding education, supportive environment, and a commitment to your success.',
    cta: 'Explore Our Programs',
    path: '/school',
  },
  {
    id: 2,
    image: heroSlide2,
    alt: 'Students enjoying outdoor activities at Asha School and College',
    badge: 'ADMISSIONS OPEN 2081/82',
    titleLine1: 'Your Academic Journey',
    titleLine2Prefix: 'Starts ',
    titleHighlight: 'Here.',
    description: 'Join thousands of students who have built their future with Asha. Apply now for school and +2 programs.',
    cta: 'Apply Now',
    path: '/contact',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=1600&h=900&fit=crop',
    alt: 'Asha School and College campus building',
    badge: 'OUTSTANDING SEE & NEB RESULTS',
    titleLine1: 'A Legacy of',
    titleLine2Prefix: 'Academic ',
    titleHighlight: 'Distinction.',
    description: 'Our students consistently achieve top results with 95% scoring A and A+ in national examinations.',
    cta: 'Learn More',
    path: '/about',
  },
];

const HERO_STATS = [
  { icon: 'users', value: '5,000+', label: 'Students' },
  { icon: 'cap', value: '200+', label: 'Faculty' },
  { icon: 'school', value: '28+', label: 'Years of Excellence' },
  { icon: 'trophy', value: '95%', label: 'Pass Rate' },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();

  const goToSlide = useCallback((nextIndex) => {
    if (isTransitioning || nextIndex === current) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent(nextIndex);
      setIsTransitioning(false);
    }, 220);
  }, [current, isTransitioning]);

  const nextSlide = useCallback(() => {
    goToSlide((current + 1) % slides.length);
  }, [current, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((current - 1 + slides.length) % slides.length);
  }, [current, goToSlide]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <div className="hero-shell">
      <section className="hero" id="hero" aria-label="Featured Highlights">
        {/* Background Slides */}
        <div className="hero__slides" aria-hidden="true">
          {slides.map((s, i) => (
            <div
              key={s.id}
              className={`hero__bg hero__bg--slide-${s.id} ${i === current ? 'hero__bg--active' : ''}`}
            >
              <img
                src={s.image}
                alt={s.alt}
                className="hero__bg-img"
                onError={(e) => {
                  if (e.currentTarget.src !== heroSlide2) {
                    e.currentTarget.src = heroSlide2;
                  }
                }}
              />
            </div>
          ))}
        </div>

        {/* Subtle Left-to-Right Navy Overlay */}
        <div className="hero__overlay" />

        {/* Left-Aligned Hero Content */}
        <div className="hero__inner container">
          <div className={`hero__content ${isTransitioning ? 'hero__content--exit' : 'hero__content--enter'}`}>
            <p className="hero__badge">{slide.badge}</p>
            <h1 className="hero__title">
              <span className="hero__title-line">{slide.titleLine1}</span>
              <span className="hero__title-line">
                {slide.titleLine2Prefix}
                <span className="hero__title-highlight">{slide.titleHighlight}</span>
              </span>
            </h1>
            <p className="hero__desc">{slide.description}</p>
            <div className="hero__actions">
              <button
                type="button"
                className="hero__btn hero__btn--primary"
                onClick={() => navigate(slide.path)}
              >
                {slide.cta}
              </button>
              <button
                type="button"
                className="hero__btn hero__btn--secondary"
                onClick={() => navigate('/contact')}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Unobtrusive Slider Controls */}
        <button
          type="button"
          className="hero__arrow hero__arrow--left"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <Icons8Icon name="chevron-left" size={18} />
        </button>
        <button
          type="button"
          className="hero__arrow hero__arrow--right"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <Icons8Icon name="chevron-right" size={18} />
        </button>

        {/* Minimal Slide Indicators */}
        <div className="hero__dots" role="tablist" aria-label="Hero slides">
          {slides.map((s, i) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={i === current}
              aria-label={`Go to slide ${i + 1}`}
              className={`hero__dot ${i === current ? 'hero__dot--active' : ''}`}
              onClick={() => goToSlide(i)}
            />
          ))}
        </div>
      </section>

      {/* Floating White Statistics Panel overlapping Hero & About */}
      <div className="hero-stats-band">
        <div className="container">
          <div className="hero-stats-card" role="region" aria-label="Institutional Statistics">
            {HERO_STATS.map((stat, idx) => (
              <div className="hero-stats-card__item" key={idx}>
                <div className="hero-stats-card__icon">
                  <Icons8Icon name={stat.icon} size={34} variant="gold" />
                </div>
                <div className="hero-stats-card__text">
                  <strong className="hero-stats-card__value">{stat.value}</strong>
                  <span className="hero-stats-card__label">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
