import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';
import Icons8Icon from './Icons8Icon';
import { API_BASE_URL } from '../config/api';
import heroSlide2 from '../assets/hero-slide-2.jpg';

const DEFAULT_ABOUT_DATA = {
  title: 'About Asha School / College',
  description:
    'Asha School/College, established in 1997 and located in Kathmandu-31, is a premier educational institution committed to nurturing academic excellence, character development, and holistic growth in every student. With a legacy spanning over two decades, we have shaped thousands of bright minds and future leaders of Nepal.',
  mission:
    'To provide quality education that empowers students to become responsible, innovative, and globally competitive individuals.',
  vision:
    'To be the leading educational institution in Nepal, recognized for academic excellence and character building.',
};

const CAMPUS_IMAGE_URL =
  'https://images.unsplash.com/photo-1562774053-701939374585?w=1200&h=850&fit=crop';

const About = ({ isHomePage = false }) => {
  const [data, setData] = useState(DEFAULT_ABOUT_DATA);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/about`)
      .then((r) => {
        if (!r.ok) throw new Error('Failed to fetch');
        return r.json();
      })
      .then((fetched) => {
        if (fetched && fetched.description) {
          setData((prev) => ({ ...prev, ...fetched }));
        }
      })
      .catch(() => {
        // Retain default verified institutional content
      });
  }, []);

  /* ── Redesigned Minimalist Homepage About Section ── */
  if (isHomePage) {
    return (
      <section className="about about--home" id="about">
        <div className="container">
          <div className="about-home__grid">
            {/* Left Column: Text */}
            <div className="about-home__content">
              <div className="about-home__accent-line" aria-hidden="true" />
              <h2 className="about-home__heading">
                About <span className="about-home__heading-navy">Asha College</span>
              </h2>
              <p className="about-home__desc">{data.description}</p>
              <div className="about-home__actions">
                <button
                  type="button"
                  className="btn-primary about-home__btn"
                  onClick={() => navigate('/about')}
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Right Column: Large Campus Photograph */}
            <div className="about-home__media">
              <div className="about-home__image-frame">
                <img
                  src={CAMPUS_IMAGE_URL}
                  alt="Asha School and College Campus"
                  className="about-home__image"
                  onError={(e) => {
                    if (e.currentTarget.src !== heroSlide2) {
                      e.currentTarget.src = heroSlide2;
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  /* ── Dedicated About Page View (Preserves Mission & Vision Cards) ── */
  return (
    <section className="about about--page" id="about">
      <div className="container">
        <div className="about__grid">
          <div className="about__content">
            <div className="about-home__accent-line" aria-hidden="true" />
            <h2 className="about-home__heading">
              About <span className="about-home__heading-navy">Asha College</span>
            </h2>
            <p className="about-home__desc">{data.description}</p>

            <div className="about__cards">
              <div className="about__card about__card--mission">
                <div className="about__card-icon">
                  <Icons8Icon name="target" size={24} variant="primary" />
                </div>
                <div>
                  <h4>Our Mission</h4>
                  <p>{data.mission}</p>
                </div>
              </div>
              <div className="about__card about__card--vision">
                <div className="about__card-icon">
                  <Icons8Icon name="bulb" size={24} variant="primary" />
                </div>
                <div>
                  <h4>Our Vision</h4>
                  <p>{data.vision}</p>
                </div>
              </div>
            </div>

            <div className="about-home__actions">
              <button
                type="button"
                className="btn-primary"
                onClick={() => navigate('/school')}
              >
                Explore Academic Programs
              </button>
            </div>
          </div>

          <div className="about-home__media">
            <div className="about-home__image-frame">
              <img
                src={CAMPUS_IMAGE_URL}
                alt="Asha School and College Campus"
                className="about-home__image"
                onError={(e) => {
                  if (e.currentTarget.src !== heroSlide2) {
                    e.currentTarget.src = heroSlide2;
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
