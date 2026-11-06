import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SchoolCollege.css';
import Icons8Icon from './Icons8Icon';
import RightArrowIcon from './RightArrowIcon';

const mapProgramToIcon = (name = '', rawIcon = '') => {
  if (name.includes('Early Childhood') || rawIcon === '🌱') return 'sprout';
  if (name.includes('Primary') || rawIcon === '📚') return 'books';
  if (name.includes('Lower Secondary') || name.includes('Science') || rawIcon === '🔬') return 'microscope';
  if (name.includes('Secondary') || name.includes('SEE') || rawIcon === '🎓') return 'cap';
  if (name.includes('Management') || rawIcon === '📊') return 'chart';
  if (name.includes('Humanities') || rawIcon === '📖') return 'literature';
  return 'books';
};

const ProgramCard = ({ program }) => (
  <div className="program-card">
    <span className="program-icon">
      <Icons8Icon name={mapProgramToIcon(program.name, program.icon)} size={24} variant="accent" glow />
    </span>
    <div>
      <strong>{program.name}</strong>
      {program.subjects && <p>{program.subjects}</p>}
    </div>
  </div>
);

const School = ({ isHomePage = false }) => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/api/school')
      .then(r => r.json())
      .then(setData)
      .catch(() => setData({
        name: 'Asha School', tagline: 'Nurturing Young Minds Since 1997',
        description: 'Asha School offers quality education from Nursery to Grade 10 (SEE). Our curriculum blends academic rigor with creative development, sports, and moral values.',
        programs: [
          { name: 'Early Childhood Education (Nursery–KG)', icon: '🌱' },
          { name: 'Primary Level (Grade 1–5)', icon: '📚' },
          { name: 'Lower Secondary (Grade 6–8)', icon: '🔬' },
          { name: 'Secondary Level (Grade 9–10/SEE)', icon: '🎓' }
        ],
        facilities: ['Modern Classrooms', 'Science Labs', 'Computer Lab', 'Library', 'Playground', 'Cafeteria']
      }));
  }, []);

  if (!data) return null;

  return (
    <section className="sc-section sc-section--school" id="school">
      <div className="container">
        <div className="sc-grid">
          <div className="sc-content">
            <div className="sc-label-wrap">
              <span className="sc-label">
                <Icons8Icon name="school" size={17} variant="primary" glow />
                <span>For School</span>
              </span>
            </div>
            <h2 className="section-title sc-title">{data.name}</h2>
            <p className="sc-tagline">{data.tagline}</p>
            <p className="section-subtitle">{data.description}</p>

            <div className="sc-programs">
              <h4>Academic Programs</h4>
              {data.programs.map((p, i) => <ProgramCard key={i} program={p} />)}
            </div>

            <div className="sc-facilities">
              <h4>Facilities</h4>
              <div className="sc-facilities-grid">
                {data.facilities.map((f, i) => (
                  <span key={i} className="sc-facility">
                    <Icons8Icon name="check-circle" size={16} variant="primary" />
                    <span>{f}</span>
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <button className="btn-primary" onClick={() => navigate(isHomePage ? '/school' : '/contact')}>
                <span>{isHomePage ? 'Explore School Details' : 'Enquire for School Admission'}</span>
                <Icons8Icon name="arrow-right" size={18} variant="accent" glow />
              </button>
              {isHomePage && (
                <button className="btn-primary" onClick={() => navigate('/contact')}>
                  <span>Apply Now</span>
                  <RightArrowIcon size={17} />
                </button>
              )}
            </div>
          </div>

          <div className="sc-images">
            <div className="sc-img-top">
              <img src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=380&fit=crop" alt="School Building" />
            </div>
            <div className="sc-img-row">
              <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=280&h=190&fit=crop" alt="Students Learning" />
              <img src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=280&h=190&fit=crop" alt="Classroom" />
            </div>
            <div className="sc-highlight">
              <strong>95%</strong>
              <span>SEE Pass Rate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const College = ({ isHomePage = false }) => {
  const [data, setData] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/api/college')
      .then(r => r.json())
      .then(setData)
      .catch(() => setData({
        name: 'Asha College', tagline: 'Your Gateway to Higher Education',
        description: 'Asha College provides +2 level education affiliated with the National Examination Board (NEB). We offer Science, Management, and Humanities faculties with experienced faculty and excellent infrastructure.',
        programs: [
          { name: 'Science (+2)', subjects: 'Physics, Chemistry, Biology/Math, Computer', icon: '🔬' },
          { name: 'Management (+2)', subjects: 'Accountancy, Economics, Business Studies, Finance', icon: '📊' },
          { name: 'Humanities (+2)', subjects: 'English, Nepali, Social Studies, Philosophy', icon: '📖' }
        ],
        facilities: ['Modern Lecture Halls', 'Physics & Chemistry Labs', 'Computer Lab', 'Library & Reading Room', 'Sports Complex', 'Counseling Center']
      }));
  }, []);

  if (!data) return null;

  return (
    <section className="sc-section sc-section--college" id="college">
      <div className="container">
        <div className="sc-grid sc-grid--reverse">
          <div className="sc-images">
            <div className="sc-img-top">
              <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=380&fit=crop" alt="College Campus" />
            </div>
            <div className="sc-img-row">
              <img src="https://images.unsplash.com/photo-1532094349884-543559053f46?w=280&h=190&fit=crop" alt="Lab" />
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=280&h=190&fit=crop" alt="Library" />
            </div>
            <div className="sc-highlight">
              <strong>NEB</strong>
              <span>Affiliated</span>
            </div>
          </div>

          <div className="sc-content">
            <div className="sc-label-wrap">
              <span className="sc-label">
                <Icons8Icon name="cap" size={17} variant="primary" glow />
                <span>For College</span>
              </span>
            </div>
            <h2 className="section-title sc-title">{data.name}</h2>
            <p className="sc-tagline">{data.tagline}</p>
            <p className="section-subtitle">{data.description}</p>

            {/* Tabs for programs */}
            <div className="sc-tabs">
              <div className="sc-tab-buttons">
                {data.programs.map((p, i) => (
                  <button
                    key={i}
                    className={`sc-tab-btn ${activeTab === i ? 'active' : ''}`}
                    onClick={() => setActiveTab(i)}
                  >
                    <Icons8Icon
                      name={mapProgramToIcon(p.name, p.icon)}
                      size={18}
                      variant={activeTab === i ? 'accent' : 'primary'}
                      glow={activeTab === i}
                    />
                    <span>{p.name}</span>
                  </button>
                ))}
              </div>
              <div className="sc-tab-content">
                <p><strong>Subjects:</strong> {data.programs[activeTab].subjects}</p>
              </div>
            </div>

            <div className="sc-facilities">
              <h4>Facilities</h4>
              <div className="sc-facilities-grid">
                {data.facilities.map((f, i) => (
                  <span key={i} className="sc-facility">
                    <Icons8Icon name="check-circle" size={16} variant="primary" />
                    <span>{f}</span>
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <button className="btn-primary" onClick={() => navigate(isHomePage ? '/college' : '/contact')}>
                <span>{isHomePage ? 'Explore College Details' : 'Apply for +2 Level'}</span>
                <Icons8Icon name="arrow-right" size={18} variant="accent" glow />
              </button>
              {isHomePage && (
                <button className="btn-primary" onClick={() => navigate('/contact')}>
                  <Icons8Icon name="contact" size={17} variant="accent" glow />
                  <span>Get Prospectus</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { School, College };

