import React from 'react';
import PageHeader from '../components/PageHeader';
import Events from '../components/Events';
import Icons8Icon from '../components/Icons8Icon';
import './Pages.css';

const EventsPage = () => {
  const upcomingHighlights = [
    { date: 'Bhadra 15, 2081', event: 'Annual Cultural Festival & Talent Extravaganza', type: 'Cultural' },
    { date: 'Ashwin 1, 2081', event: 'Inter-College Science Exhibition & Innovation Fair', type: 'Academic' },
    { date: 'Ashwin 15, 2081', event: 'Asha Sports Meet 2081 (Athletics, Football & Cricket)', type: 'Sports' },
    { date: 'Kartik 20, 2081', event: 'SEE & NEB First Terminal Examinations', type: 'Exams' }
  ];

  return (
    <div className="events-page">
      <PageHeader
        badge="News & Campus Life"
        badgeIcon="events"
        title="Events & Academic Blog"
        subtitle="Stay connected with vibrant activities, scientific discoveries, artistic festivals, and milestones at Asha."
        breadcrumb="Events / Blog"
      />

      {/* Main Events Feed */}
      <Events isHomePage={false} />

      {/* Upcoming Dates Strip */}
      <section className="page-section bg-cream">
        <div className="container">
          <div className="section-head text-center">
            <p className="section-eyebrow">Mark Your Calendar</p>
            <h2 className="section-title">Upcoming Academic Highlights</h2>
            <p className="section-subtitle">
              Key dates for upcoming events, term examinations, and parent-teacher conferences.
            </p>
          </div>

          <div className="highlights-timeline-grid">
            {upcomingHighlights.map((item, i) => (
              <div key={i} className="highlight-schedule-card">
                <div className="highlight-date-badge">
                  <Icons8Icon name="calendar" size={16} variant="primary" glow />
                  <span>{item.date}</span>
                </div>
                <h4>{item.event}</h4>
                <span className={`badge badge-${item.type.toLowerCase()}`}>{item.type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;

