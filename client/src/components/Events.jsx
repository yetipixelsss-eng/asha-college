import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Events.css';
import Icons8Icon from './Icons8Icon';

const Events = ({ isHomePage = false, limit }) => {
  const [events, setEvents] = useState([]);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/api/events')
      .then(r => r.json())
      .then(data => { setEvents(data); setLoading(false); })
      .catch(() => {
        setEvents([
          { id: 1, type: 'event', title: 'Annual Cultural Festival 2081', displayDate: 'Bhadra 15, 2081', description: 'Join us for a vibrant celebration of culture, arts, and talent showcased by our students.', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop', category: 'Cultural' },
          { id: 2, type: 'event', title: 'Science Exhibition & Innovation Fair', displayDate: 'Ashwin 1, 2081', description: 'Students present their innovative projects and scientific discoveries at the annual exhibition.', image: 'https://images.unsplash.com/photo-1532094349884-543559053f46?w=400&h=250&fit=crop', category: 'Academic' },
          { id: 3, type: 'blog', title: 'Admission Open for 2081/82', displayDate: 'Shrawan 20, 2081', description: 'Admissions are now open for Grade 1 to 12 and +2 Science, Management, and Humanities streams.', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=250&fit=crop', category: 'Announcement' },
          { id: 4, type: 'blog', title: 'SEE Result: Asha Students Shine', displayDate: 'Shrawan 10, 2081', description: 'Our students achieved outstanding results in the SEE examinations with 95% scoring A and A+ grades.', image: 'https://images.unsplash.com/photo-1627556704302-624286467c65?w=400&h=250&fit=crop', category: 'Achievement' },
          { id: 5, type: 'event', title: 'Sports Week 2081', displayDate: 'Ashwin 15, 2081', description: 'An exciting week of athletic competitions, teamwork, and sportsmanship across all grades.', image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=250&fit=crop', category: 'Sports' },
          { id: 6, type: 'blog', title: 'New Computer Lab Inaugurated', displayDate: 'Ashadh 25, 2081', description: 'State-of-the-art computer lab with 60 high-end systems inaugurated to enhance digital learning.', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=250&fit=crop', category: 'Infrastructure' },
        ]);
        setLoading(false);
      });
  }, []);

  const filtered = filter === 'all' ? events : events.filter(e => e.type === filter);
  const displayItems = limit ? filtered.slice(0, limit) : filtered;

  return (
    <section className="events" id="events">
      <div className="container">
        <div className="events__header">
          <div>
            <p className="events__eyebrow">Stay Updated</p>
            <h2 className="section-title">Events & Blog</h2>
            <p className="section-subtitle">
              Stay informed about the latest happenings, achievements, and announcements at Asha School/College.
            </p>
          </div>
          <div className="events__filters">
            {[
              { id: 'all', label: 'All', icon: 'filter' },
              { id: 'event', label: 'Events', icon: 'calendar' },
              { id: 'blog', label: 'Blog', icon: 'blog' }
            ].map(f => (
              <button
                key={f.id}
                className={`events__filter-btn ${filter === f.id ? 'active' : ''}`}
                onClick={() => setFilter(f.id)}
              >
                <Icons8Icon name={f.icon} size={16} variant={filter === f.id ? 'accent' : 'primary'} glow={filter === f.id} />
                <span>{f.label}</span>
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="events__loading">
            {[1, 2, 3].map(i => <div key={i} className="events__skeleton" />)}
          </div>
        ) : (
          <>
            <div className="events__grid">
              {displayItems.map((item, idx) => (
                <div
                  className="events__card"
                  key={item.id}
                  style={{ animationDelay: `${idx * 0.08}s` }}
                >
                  <div className="events__card-img">
                    <img src={item.image} alt={item.title} loading="lazy" />
                    <div className="events__card-type">
                      <Icons8Icon name={item.type === 'event' ? 'calendar' : 'blog'} size={16} variant="accent" glow />
                      <span>{item.type === 'event' ? 'Event' : 'Blog'}</span>
                    </div>
                  </div>
                  <div className="events__card-body">
                    <div className="events__card-meta">
                      <span className={`badge badge-${item.category.toLowerCase()}`}>{item.category}</span>
                      <span className="events__card-date">
                        <Icons8Icon name="events" size={15} variant="primary" />
                        <span>{item.displayDate}</span>
                      </span>
                    </div>
                    <h3 className="events__card-title">{item.title}</h3>
                    <p className="events__card-desc">{item.description}</p>
                    <button
                      className="events__card-btn"
                      onClick={() => setSelectedEvent(item)}
                    >
                      <span>Read More</span>
                      <Icons8Icon name="arrow-right" size={16} variant="accent" glow />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {isHomePage && (
              <div style={{ textAlign: 'center', marginTop: '48px' }}>
                <button
                  className="btn-primary"
                  onClick={() => navigate('/events')}
                  style={{ padding: '14px 38px', fontSize: '1rem' }}
                >
                  <span>View All Events & Campus Articles</span>
                  <Icons8Icon name="arrow-right" size={18} variant="accent" glow />
                </button>
              </div>
            )}
          </>
        )}

        {/* Modal for detail view */}
        {selectedEvent && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0, 6, 79, 0.75)',
              backdropFilter: 'blur(8px)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px'
            }}
            onClick={() => setSelectedEvent(null)}
          >
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                maxWidth: '600px',
                width: '100%',
                overflow: 'hidden',
                boxShadow: '0 24px 64px rgba(0, 6, 79, 0.5)',
                position: 'relative',
                animation: 'fadeInUp 0.3s ease'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                style={{ width: '100%', height: '260px', objectFit: 'cover' }}
              />
              <div style={{ padding: '28px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span className={`badge badge-${selectedEvent.category.toLowerCase()}`}>{selectedEvent.category}</span>
                  <span style={{ fontSize: '0.85rem', color: '#666', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Icons8Icon name="calendar" size={15} variant="primary" />
                    <span>{selectedEvent.displayDate}</span>
                  </span>
                </div>
                <h3 style={{ fontSize: '1.45rem', color: '#00064F', marginBottom: '12px', fontFamily: 'var(--font-serif)', fontWeight: 600 }}>
                  {selectedEvent.title}
                </h3>
                <p style={{ color: '#4A5568', lineHeight: 1.7, fontSize: '0.95rem', marginBottom: '24px' }}>
                  {selectedEvent.description}
                </p>
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                  <button
                    className="btn-primary"
                    onClick={() => setSelectedEvent(null)}
                    style={{ padding: '10px 24px' }}
                  >
                    <span>Close</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Events;

