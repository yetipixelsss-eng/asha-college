import React from 'react';
import PageHeader from '../components/PageHeader';
import Contact from '../components/Contact';
import Icons8Icon from '../components/Icons8Icon';
import './Pages.css';

const ContactPage = () => {
  const faqs = [
    {
      q: 'When do admissions open for School and +2 College?',
      a: 'School admissions (Nursery to Grade 9) open in Chaitra/Baisakh. +2 College admissions (Science, Management, Humanities) open immediately following the announcement of SEE results in Ashadh/Shrawan.'
    },
    {
      q: 'What documents are required for +2 College admission?',
      a: 'Applicants need a copy of their SEE Grade Sheet, Character Certificate, Transfer Certificate, 2 passport-size photographs, and a completed Asha College application form.'
    },
    {
      q: 'Does Asha provide school bus transportation services?',
      a: 'Yes, our fleet of reliable school buses covers major routes across Kathmandu, Lalitpur, and Bhaktapur with dedicated attendants and GPS tracking.'
    },
    {
      q: 'How can students apply for merit scholarships?',
      a: 'Scholarships are awarded based on SEE GPA and the Asha Scholarship Entrance Examination score. Merit forms can be requested at our front office or indicated on your online contact message.'
    }
  ];

  return (
    <div className="contact-page">
      <PageHeader
        badge="Connect With Our Campus"
        badgeIcon="phone"
        title="Contact Us & Admissions Office"
        subtitle="We invite prospective students, parents, and partners to reach out. Our administration is always ready to guide you."
        breadcrumb="Contact Us"
      />

      {/* Main Contact Section */}
      <Contact />

      {/* Frequently Asked Questions */}
      <section className="page-section bg-cream">
        <div className="container">
          <div className="section-head text-center">
            <p className="section-eyebrow">Common Inquiries</p>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Quick answers to the questions parents and students ask most often.
            </p>
          </div>

          <div className="faqs-grid">
            {faqs.map((faq, i) => (
              <div key={i} className="faq-card">
                <div className="faq-question">
                  <Icons8Icon name="check-circle" size={18} variant="primary" glow />
                  <h4>{faq.q}</h4>
                </div>
                <p className="faq-answer">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

