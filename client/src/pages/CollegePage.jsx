import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { College } from '../components/SchoolCollege';
import Icons8Icon from '../components/Icons8Icon';
import RightArrowIcon from '../components/RightArrowIcon';
import './Pages.css';

const CollegePage = () => {
  const navigate = useNavigate();

  const streams = [
    {
      name: 'Science Stream (+2)',
      badge: 'Medical • Engineering • Tech',
      icon: 'microscope',
      subjects: ['Physics', 'Chemistry', 'Biology / Mathematics', 'Computer Science', 'English & Nepali'],
      careers: 'Medicine (MBBS/BDS), Engineering (IOE/TU/PU), Computer Science & IT, Pharmacy, Biotechnology.',
      features: 'Dedicated experimental workstations, digital microscopes, regular laboratory viva training.'
    },
    {
      name: 'Management Stream (+2)',
      badge: 'Business • CA • FinTech',
      icon: 'chart',
      subjects: ['Accountancy', 'Economics', 'Business Studies', 'Hotel Management / Computer', 'Finance'],
      careers: 'Chartered Accountancy (ICAN/ICAI), BBA, BBM, Banking & Financial Services, Hospitality Leadership.',
      features: 'Practical accounting software workshops, industrial visits, business pitch competitions.'
    },
    {
      name: 'Humanities Stream (+2)',
      badge: 'Law • Media • Civil Service',
      icon: 'literature',
      subjects: ['English & Nepali', 'Sociology', 'Mass Communication & Journalism', 'Political Science', 'Psychology'],
      careers: 'Law (BALLB), Journalism, Public Policy, Diplomatic Services, Social Work (BSW), Civil Administration.',
      features: 'Field research methodology, mock parliamentary debates, editorial publication projects.'
    }
  ];

  const scholarships = [
    { title: 'SEE Board Merit Award', discount: 'Up to 100% Tuition Waiver', desc: 'Awarded to students scoring GPA 3.8+ in SEE examinations.' },
    { title: 'Asha Entrance Top Scorer', discount: '75% Tuition Waiver', desc: 'Conferred to top rank holders in the Asha College Scholarship Entrance Test.' },
    { title: 'Sports & Talents Scheme', discount: '50% Tuition Waiver', desc: 'Dedicated to national and district level athletes, debate champions, and artists.' },
    { title: 'Need-Based Educational Aid', discount: 'Special Fee Concession', desc: 'Reserved for diligent students from marginalized and remote regions.' }
  ];

  return (
    <div className="college-page">
      <PageHeader
        badge="NEB Affiliated +2 Program"
        badgeIcon="cap"
        title="Asha College (+2 Level)"
        subtitle="Your Gateway to Premier Higher Education in Nepal. Exceptional Science, Management, and Humanities Programs."
        breadcrumb="College"
      />

      {/* Main College Component */}
      <College isHomePage={false} />

      {/* Stream Deep Dive */}
      <section className="page-section bg-cream">
        <div className="container">
          <div className="section-head text-center">
            <p className="section-eyebrow">Faculties & Streams</p>
            <h2 className="section-title">Academic Streams Offered</h2>
            <p className="section-subtitle">
              Comprehensive curricula designed to prepare students for top universities in Nepal and abroad.
            </p>
          </div>

          <div className="college-streams-grid">
            {streams.map((st, i) => (
              <div key={i} className="college-stream-card">
                <div className="college-stream-header">
                  <div className="college-stream-icon">
                    <Icons8Icon name={st.icon} size={28} variant="accent" glow />
                  </div>
                  <div>
                    <span className="college-stream-badge">{st.badge}</span>
                    <h3>{st.name}</h3>
                  </div>
                </div>

                <div className="college-stream-body">
                  <h4>Core Subjects:</h4>
                  <div className="subject-tags">
                    {st.subjects.map((sub, j) => (
                      <span key={j} className="subject-tag">{sub}</span>
                    ))}
                  </div>

                  <h4>Career Pathways:</h4>
                  <p className="stream-career">{st.careers}</p>

                  <h4>Facilities & Practical:</h4>
                  <p className="stream-feature">{st.features}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section className="page-section">
        <div className="container">
          <div className="section-head text-center">
            <p className="section-eyebrow">Supporting Talent</p>
            <h2 className="section-title">Scholarships & Merit Awards</h2>
            <p className="section-subtitle">
              We ensure financial barriers never hinder ambitious minds from pursuing excellence.
            </p>
          </div>

          <div className="scholarships-grid">
            {scholarships.map((sc, i) => (
              <div key={i} className="scholarship-card">
                <div className="scholarship-badge">
                  <Icons8Icon name="trophy" size={16} variant="gold" glow />
                  <span>{sc.discount}</span>
                </div>
                <h4>{sc.title}</h4>
                <p>{sc.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <button className="btn-primary" onClick={() => navigate('/contact')}>
              <span>Apply for College +2 Admission</span>
              <RightArrowIcon size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CollegePage;

