import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Icons8Icon from '../components/Icons8Icon';
import './Pages.css';

const DEFAULT_MEMORIES = [
  {
    id: 1,
    title: 'Annual Cultural Grand Showcase',
    category: 'cultural',
    date: 'Bhadra 2081',
    description: 'Students celebrating Nepal’s rich cultural heritage through traditional dance, musical ensembles, and dramatic performances.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&h=800&fit=crop'
  },
  {
    id: 2,
    title: 'Advanced Robotics & Science Fair',
    category: 'science',
    date: 'Ashwin 2081',
    description: 'Innovative scientific models, automated robotics projects, and sustainable environmental solutions presented by Asha inventors.',
    image: 'https://images.unsplash.com/photo-1532094349884-543559053f46?w=1200&h=800&fit=crop'
  },
  {
    id: 3,
    title: 'SEE & NEB Convocation & Graduation',
    category: 'graduation',
    date: 'Shrawan 2081',
    description: 'Proud graduating scholars receiving academic honors, merit awards, and stepping into bright higher education pathways.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=800&fit=crop'
  },
  {
    id: 4,
    title: 'Inter-House Sports Champions Meet',
    category: 'sports',
    date: 'Ashwin 2081',
    description: 'Spirited athletics, football championship finals, and basketball tournaments fostering teamwork and sportsmanship.',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200&h=800&fit=crop'
  },
  {
    id: 5,
    title: 'Digital Smart Classroom Session',
    category: 'campus',
    date: 'Baisakh 2081',
    description: 'Interactive smart boards and collaborative digital workstations empowering daily engaging classroom experiences.',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&h=800&fit=crop'
  },
  {
    id: 6,
    title: 'AIESEC Global Youth Leadership Summit',
    category: 'cultural',
    date: 'Jestha 2081',
    description: 'Cross-cultural discussions, SDG workshop roundtables, and international exchange presentations on campus.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=800&fit=crop'
  },
  {
    id: 7,
    title: 'Modern Chemistry Research Laboratory',
    category: 'campus',
    date: 'Ashadh 2081',
    description: 'Hands-on practical experiments with modern scientific equipment under expert teacher guidance.',
    image: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?w=1200&h=800&fit=crop'
  },
  {
    id: 8,
    title: 'Annual Art & Literature Exhibition',
    category: 'cultural',
    date: 'Magh 2080',
    description: 'Expressive student paintings, calligraphic arts, and literary anthologies published by the creative writing club.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop'
  },
  {
    id: 9,
    title: 'Campus Central Library & Reading Lounge',
    category: 'campus',
    date: 'Falgun 2080',
    description: 'A serene sanctuary housing over 15,000 academic titles, periodicals, and private research study carrels.',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&h=800&fit=crop'
  }
];

const GalleryPage = () => {
  const [memories, setMemories] = useState(DEFAULT_MEMORIES);
  const [filter, setFilter] = useState('all');
  const [activePhoto, setActivePhoto] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/api/gallery')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setMemories(data);
        }
      })
      .catch(() => {
        // Fallback to initial memories
      });
  }, []);

  const filteredMemories = filter === 'all' ? memories : memories.filter((m) => m.category === filter);

  const filters = [
    { id: 'all', label: 'All Photos & Memories', icon: 'camera' },
    { id: 'campus', label: 'Campus & Facilities', icon: 'school' },
    { id: 'cultural', label: 'Cultural & Arts', icon: 'sparkle' },
    { id: 'sports', label: 'Sports & Athletics', icon: 'trophy' },
    { id: 'science', label: 'Science & Innovation', icon: 'microscope' },
    { id: 'graduation', label: 'Graduation & SEE', icon: 'cap' }
  ];

  const handleNextPhoto = (e) => {
    e.stopPropagation();
    if (!activePhoto) return;
    const currentIndex = filteredMemories.findIndex((m) => m.id === activePhoto.id);
    const nextIndex = (currentIndex + 1) % filteredMemories.length;
    setActivePhoto(filteredMemories[nextIndex]);
  };

  const handlePrevPhoto = (e) => {
    e.stopPropagation();
    if (!activePhoto) return;
    const currentIndex = filteredMemories.findIndex((m) => m.id === activePhoto.id);
    const prevIndex = (currentIndex - 1 + filteredMemories.length) % filteredMemories.length;
    setActivePhoto(filteredMemories[prevIndex]);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!activePhoto) return;
      if (e.key === 'Escape') setActivePhoto(null);
      if (e.key === 'ArrowRight') {
        const idx = filteredMemories.findIndex((m) => m.id === activePhoto.id);
        setActivePhoto(filteredMemories[(idx + 1) % filteredMemories.length]);
      }
      if (e.key === 'ArrowLeft') {
        const idx = filteredMemories.findIndex((m) => m.id === activePhoto.id);
        setActivePhoto(filteredMemories[(idx - 1 + filteredMemories.length) % filteredMemories.length]);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhoto, filteredMemories]);

  return (
    <div className="gallery-page">
      <PageHeader
        badge="Photo Archives & Memories"
        badgeIcon="camera"
        title="Campus Memories & Gallery"
        subtitle="A visual retrospective of vibrant celebrations, athletic triumphs, scientific discoveries, and daily student life at Asha."
        breadcrumb="Gallery"
      />

      {/* Main Gallery Section */}
      <section className="page-section">
        <div className="container">
          <div className="section-head text-center">
            <p className="section-eyebrow">Moments That Matter</p>
            <h2 className="section-title">Life at Asha in Pictures</h2>
            <p className="section-subtitle">
              Click on any photograph to view the full resolution memory, event story, and date archive.
            </p>

            {/* Filter Buttons */}
            <div className="events__filters gallery__filters" style={{ marginTop: '28px' }}>
              {filters.map((f) => (
                <button
                  key={f.id}
                  className={`events__filter-btn ${filter === f.id ? 'active' : ''}`}
                  onClick={() => setFilter(f.id)}
                >
                  <Icons8Icon
                    name={f.icon}
                    size={16}
                    variant={filter === f.id ? 'accent' : 'primary'}
                    glow={filter === f.id}
                  />
                  <span>{f.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Photo Grid */}
          <div className="gallery-grid">
            {filteredMemories.map((photo, idx) => (
              <div
                key={photo.id}
                className="gallery-card"
                style={{ animationDelay: `${idx * 0.06}s` }}
                onClick={() => setActivePhoto(photo)}
                role="button"
                tabIndex={0}
                aria-label={`View ${photo.title}`}
              >
                <div className="gallery-card__img-box">
                  <img src={photo.image} alt={photo.title} loading="lazy" />
                  <div className="gallery-card__overlay">
                    <span className="gallery-card__zoom-btn">
                      <Icons8Icon name="search" size={20} variant="white" glow />
                    </span>
                  </div>
                  <div className="gallery-card__date-pill">
                    <Icons8Icon name="calendar" size={13} variant="white" />
                    <span>{photo.date}</span>
                  </div>
                </div>

                <div className="gallery-card__meta">
                  <span className="gallery-card__cat-tag">{photo.category}</span>
                  <h3 className="gallery-card__title">{photo.title}</h3>
                  <p className="gallery-card__desc">{photo.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          className="gallery-lightbox"
          onClick={() => setActivePhoto(null)}
          role="dialog"
          aria-modal="true"
        >
          {/* Controls */}
          <button
            className="gallery-lightbox__close"
            onClick={() => setActivePhoto(null)}
            aria-label="Close photo preview"
          >
            ✕
          </button>

          <button
            className="gallery-lightbox__arrow gallery-lightbox__arrow--left"
            onClick={handlePrevPhoto}
            aria-label="Previous photo"
          >
            <Icons8Icon name="chevron-left" size={22} variant="white" />
          </button>

          <button
            className="gallery-lightbox__arrow gallery-lightbox__arrow--right"
            onClick={handleNextPhoto}
            aria-label="Next photo"
          >
            <Icons8Icon name="chevron-right" size={22} variant="white" />
          </button>

          {/* Modal Container */}
          <div
            className="gallery-lightbox__container"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="gallery-lightbox__img-box">
              <img src={activePhoto.image} alt={activePhoto.title} />
            </div>

            <div className="gallery-lightbox__details">
              <div className="gallery-lightbox__tags">
                <span className="badge badge-academic">{activePhoto.category}</span>
                <span className="gallery-lightbox__date">
                  <Icons8Icon name="calendar" size={14} variant="primary" />
                  <span>{activePhoto.date}</span>
                </span>
              </div>
              <h3>{activePhoto.title}</h3>
              <p>{activePhoto.description}</p>
              <div className="gallery-lightbox__footer">
                <button
                  className="btn-primary"
                  onClick={() => setActivePhoto(null)}
                  style={{ padding: '8px 24px', fontSize: '0.88rem' }}
                >
                  <span>Close Preview</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Alumni / Parent Memory Submission */}
      <section className="page-cta-strip">
        <div className="container">
          <div className="page-cta-inner">
            <div>
              <h3>Have Photos or Memories From Asha?</h3>
              <p>We invite alumni, students, and parents to contribute photographs to our official commemorative archive.</p>
            </div>
            <div className="page-cta-buttons">
              <button className="btn-primary" onClick={() => navigate('/contact')}>
                <Icons8Icon name="camera" size={18} variant="accent" glow />
                <span>Share a Campus Memory</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;

