import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Icons8Icon from '../components/Icons8Icon';
import RightArrowIcon from '../components/RightArrowIcon';
import './Pages.css';

const DEFAULT_STAFF = [
  {
    id: 1,
    name: 'Dr. Rameshwar Shrestha',
    role: 'Principal & Academic Director',
    category: 'leadership',
    credentials: 'Ph.D. in Educational Leadership, M.Sc. Physics (TU)',
    experience: '24+ Years of Educational Excellence',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=600&fit=crop&crop=faces',
    thoughts: 'True education is not merely the filling of an empty vessel, but the kindling of a lifelong flame of curiosity, integrity, and social purpose in every child.',
    email: 'principal@ashacollege.edu.np'
  },
  {
    id: 2,
    name: 'Prof. Sunita Sharma',
    role: 'Vice Principal (+2 College Stream)',
    category: 'leadership',
    credentials: 'M.Phil in Management Studies, M.B.A.',
    experience: '18+ Years Experience',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=600&fit=crop&crop=faces',
    thoughts: 'We prepare our students not just to succeed in board examinations, but to navigate complex real-world challenges with critical thinking and compassion.',
    email: 'vp.college@ashacollege.edu.np'
  },
  {
    id: 3,
    name: 'Bikram K. Thapa',
    role: 'Head of Science Department (+2)',
    category: 'college',
    credentials: 'M.Sc. Physics (Gold Medalist), TU',
    experience: '14+ Years in Teaching & Research',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=faces',
    thoughts: 'Science is best learned with our hands in the lab and our minds asking "why". My mission is to cultivate scientific rigor and groundbreaking innovation.',
    email: 'physics.hod@ashacollege.edu.np'
  },
  {
    id: 4,
    name: 'Deepa Karki Adhikari',
    role: 'Senior Coordinator (School Level Nursery–10)',
    category: 'school',
    credentials: 'M.Ed. in Child Development & Curriculum',
    experience: '16+ Years in School Pedagogy',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&h=600&fit=crop&crop=faces',
    thoughts: 'Every child blossoms at their own pace. By creating a nurturing, supportive environment, we transform shy questions into confident discoveries.',
    email: 'school.coordinator@ashacollege.edu.np'
  },
  {
    id: 5,
    name: 'Anup Manandhar',
    role: 'Head of Management & Accounts',
    category: 'college',
    credentials: 'FCA (Chartered Accountant), M.B.S.',
    experience: '12+ Years Corporate & Academic Mentorship',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=600&fit=crop&crop=faces',
    thoughts: 'Modern business demands ethical financial stewardship, tech adaptability, and an entrepreneurial mindset. We instill these daily in our classrooms.',
    email: 'accounts.hod@ashacollege.edu.np'
  },
  {
    id: 6,
    name: 'Saraswati Poudel',
    role: 'Senior Faculty - Chemistry & Bio-Tech',
    category: 'college',
    credentials: 'M.Sc. Organic Chemistry, B.Ed.',
    experience: '11+ Years Laboratory Instruction',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&h=600&fit=crop&crop=faces',
    thoughts: 'When students see chemical equations turn into real crystalline reactions before their eyes, a sense of wonder sparks that textbooks alone can never match.',
    email: 'chemistry@ashacollege.edu.np'
  },
  {
    id: 7,
    name: 'Narayan Prasad Bhattarai',
    role: 'Senior Mathematics & SEE Specialist',
    category: 'school',
    credentials: 'M.Sc. Mathematics, B.Ed.',
    experience: '15+ Years SEE Preparation',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=600&fit=crop&crop=faces',
    thoughts: 'Mathematics is not about memorizing formulas; it is about learning how to think clearly and solve puzzles that mirror everyday life.',
    email: 'math.school@ashacollege.edu.np'
  },
  {
    id: 8,
    name: 'Pratima Bajracharya',
    role: 'Director of Student Welfare & Counseling',
    category: 'leadership',
    credentials: 'M.A. Clinical Psychology & Counseling',
    experience: '10+ Years Student Mentorship',
    image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=500&h=600&fit=crop&crop=faces',
    thoughts: 'Academic success and mental well-being go hand-in-hand. We provide an empathetic, safe space where every student feels seen, heard, and supported.',
    email: 'counseling@ashacollege.edu.np'
  }
];

const CommunityPage = () => {
  const [staff, setStaff] = useState(DEFAULT_STAFF);
  const [filter, setFilter] = useState('all');
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/api/community')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setStaff(data);
        }
      })
      .catch(() => {
        // Fallback to initial state
      });
  }, []);

  const filteredStaff = filter === 'all' ? staff : staff.filter((s) => s.category === filter);

  const filters = [
    { id: 'all', label: 'All Faculty & Staff', icon: 'users' },
    { id: 'leadership', label: 'Leadership & Administration', icon: 'sparkle' },
    { id: 'school', label: 'School Faculty (Nursery–10)', icon: 'school' },
    { id: 'college', label: 'College Faculty (+2)', icon: 'cap' }
  ];

  return (
    <div className="community-page">
      <PageHeader
        badge="Mentors & Staff"
        badgeIcon="users"
        title="Our Community & Faculty"
        subtitle="Meet the visionary educators, department leaders, and dedicated staff shaping future generations at Asha."
        breadcrumb="Community"
      />

      {/* Community Statistics Bar */}
      <section className="community-stats-bar">
        <div className="container">
          <div className="community-stats-grid">
            <div className="community-stat-item">
              <strong>200+</strong>
              <span>Full-Time Faculty</span>
            </div>
            <div className="community-stat-item">
              <strong>15:1</strong>
              <span>Student-Teacher Ratio</span>
            </div>
            <div className="community-stat-item">
              <strong>95%</strong>
              <span>Advanced Degree Holders</span>
            </div>
            <div className="community-stat-item">
              <strong>28+</strong>
              <span>Years Legacy</span>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Cards Section */}
      <section className="page-section">
        <div className="container">
          <div className="section-head text-center">
            <p className="section-eyebrow">Dedicated Educators</p>
            <h2 className="section-title">Faculty & Staff Directory</h2>
            <p className="section-subtitle">
              Passionate professionals committed to student success, ethical values, and holistic learning.
            </p>

            {/* Filter Tabs */}
            <div className="events__filters community__filters" style={{ marginTop: '28px' }}>
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

          {/* Staff Cards Grid */}
          <div className="staff-cards-grid">
            {filteredStaff.map((member) => (
              <div key={member.id} className="staff-card">
                {/* Photo Header */}
                <div className="staff-card__img-wrapper">
                  <img src={member.image} alt={member.name} loading="lazy" />
                  <span className="staff-card__role-tag">{member.role}</span>
                </div>

                {/* Card Content */}
                <div className="staff-card__body">
                  <h3 className="staff-card__name">{member.name}</h3>
                  <p className="staff-card__credentials">{member.credentials}</p>
                  <div className="staff-card__exp-badge">
                    <Icons8Icon name="history" size={14} variant="primary" />
                    <span>{member.experience}</span>
                  </div>

                  {/* Perspective / Thoughts Quote */}
                  <div className="staff-card__thoughts">
                    <div className="staff-card__quote-icon">
                      <Icons8Icon name="quote" size={18} variant="primary" />
                    </div>
                    <blockquote>"{member.thoughts}"</blockquote>
                  </div>

                  {/* Footer / Touchpoint */}
                  <div className="staff-card__footer">
                    <a
                      href={`mailto:${member.email}`}
                      className="staff-card__email-btn"
                      title={`Email ${member.name}`}
                    >
                      <Icons8Icon name="mail" size={15} variant="primary" />
                      <span>{member.email}</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Philosophy Callout */}
      <section className="page-section bg-cream">
        <div className="container">
          <div className="community-philosophy-card">
            <div className="community-philosophy-icon">
              <Icons8Icon name="sparkle" size={32} variant="accent" glow />
            </div>
            <h2>"Every Teacher a Mentor, Every Student a Leader"</h2>
            <p>
              At Asha School & College, our faculty members are not just subject teachers—they serve as counselors,
              project guides, and character coaches. Through personalized attention, office hours, and individualized
              mentoring, we ensure no student is left behind and every talent is discovered.
            </p>
            <button className="btn-primary" onClick={() => navigate('/about')}>
              <Icons8Icon name="school" size={18} variant="accent" glow />
              <span>Learn About Our Educational Model</span>
            </button>
          </div>
        </div>
      </section>

      {/* Join Our Team Callout */}
      <section className="page-cta-strip">
        <div className="container">
          <div className="page-cta-inner">
            <div>
              <h3>Interested in Joining Our Faculty?</h3>
              <p>We are always looking for passionate, certified educators and mentors to join our growing campus family.</p>
            </div>
            <div className="page-cta-buttons">
              <button className="btn-primary" onClick={() => navigate('/contact')}>
                <span>Send Your Resume</span>
                <RightArrowIcon size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunityPage;

