import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { School } from '../components/SchoolCollege';
import Icons8Icon from '../components/Icons8Icon';
import RightArrowIcon from '../components/RightArrowIcon';
import './Pages.css';

const SchoolPage = () => {
  const navigate = useNavigate();

  const levels = [
    {
      level: 'Early Childhood Education',
      grades: 'Nursery, LKG, UKG',
      icon: 'sprout',
      highlights: [
        'Montessori-inspired play-based learning environment',
        'Phonics, basic numeracy, and sensory development',
        'Safe indoor play areas and creative arts activities',
        'Caring, certified early childhood instructors'
      ]
    },
    {
      level: 'Primary Level',
      grades: 'Grade 1 – Grade 5',
      icon: 'books',
      highlights: [
        'Solid foundational literacy, English & Nepali fluency',
        'Interactive STEM curriculum and computer fundamentals',
        'Values education, moral science, and civic habits',
        'Continuous assessment and parent-teacher updates'
      ]
    },
    {
      level: 'Lower Secondary',
      grades: 'Grade 6 – Grade 8',
      icon: 'microscope',
      highlights: [
        'Hands-on science experiments in dedicated laboratories',
        'Advanced mathematics, logic, and analytical reasoning',
        'Introductory coding, ICT, and digital citizenship',
        'Debating, creative writing, and group collaboration'
      ]
    },
    {
      level: 'Secondary Level (SEE)',
      grades: 'Grade 9 – Grade 10',
      icon: 'cap',
      highlights: [
        'Rigorous preparation aligned with National Curriculum',
        'Regular model SEE mock examinations & performance tracking',
        'Focused doubt-clearing sessions and personal mentoring',
        'Consistent 95%+ A and A+ national achievement record'
      ]
    }
  ];

  const admissionSteps = [
    { step: '1', title: 'Submit Inquiry', desc: 'Fill out our online contact form or visit our front desk in Kathmandu-31.' },
    { step: '2', title: 'Campus Tour & Assessment', desc: 'Meet our academic counselors and take the age-appropriate entrance test.' },
    { step: '3', title: 'Interview & Counseling', desc: 'Brief interaction with school leadership to align learning goals.' },
    { step: '4', title: 'Confirmed Admission', desc: 'Complete registration, collect books/uniforms, and begin classes.' }
  ];

  return (
    <div className="school-page">
      <PageHeader
        badge="Nursery to Grade 10 (SEE)"
        badgeIcon="school"
        title="Asha School"
        subtitle="Nurturing curiosity, intellect, and moral character from early childhood to national board examinations."
        breadcrumb="School"
      />

      {/* Main School Component */}
      <School isHomePage={false} />

      {/* Educational Levels Detail */}
      <section className="page-section bg-cream">
        <div className="container">
          <div className="section-head text-center">
            <p className="section-eyebrow">Academic Progression</p>
            <h2 className="section-title">Educational Levels at Asha</h2>
            <p className="section-subtitle">
              Every stage of our curriculum is tailored to the cognitive and emotional development of your child.
            </p>
          </div>

          <div className="school-levels-grid">
            {levels.map((lvl, i) => (
              <div key={i} className="school-level-card">
                <div className="school-level-header">
                  <div className="school-level-icon">
                    <Icons8Icon name={lvl.icon} size={26} variant="accent" glow />
                  </div>
                  <div>
                    <span className="school-level-badge">{lvl.grades}</span>
                    <h3>{lvl.level}</h3>
                  </div>
                </div>
                <ul className="school-level-list">
                  {lvl.highlights.map((h, j) => (
                    <li key={j}>
                      <Icons8Icon name="check-circle" size={16} variant="primary" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Steps */}
      <section className="page-section">
        <div className="container">
          <div className="section-head text-center">
            <p className="section-eyebrow">How to Enroll</p>
            <h2 className="section-title">School Admission Process</h2>
            <p className="section-subtitle">
              A transparent, supportive enrollment journey designed to welcome your family to Asha.
            </p>
          </div>

          <div className="steps-grid">
            {admissionSteps.map((s, i) => (
              <div key={i} className="step-card">
                <div className="step-number">{s.step}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <button className="btn-primary" onClick={() => navigate('/contact')}>
              <span>Apply for School Admission</span>
              <RightArrowIcon size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchoolPage;

