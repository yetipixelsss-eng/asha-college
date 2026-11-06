import React, { useState, useEffect } from 'react';
import './Contact.css';
import Icons8Icon from './Icons8Icon';

const Contact = () => {
  const [contactInfo, setContactInfo] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [status, setStatus] = useState(null); // 'loading' | 'success' | 'error'
  const [errors, setErrors] = useState({});

  useEffect(() => {
    fetch('http://localhost:5000/api/contact')
      .then(r => r.json())
      .then(setContactInfo)
      .catch(() => setContactInfo({
        address: 'Kathmandu-31, Bagmati Province, Nepal',
        phone: '+977-01-XXXXXXX',
        email: 'info@ashacollege.edu.np',
        socialMedia: { facebook: '#', instagram: '#', youtube: '#', twitter: '#' }
      }));
  }, []);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Invalid email';
    if (!form.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setStatus('loading');
    try {
      const res = await fetch('http://localhost:5000/api/contact/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setForm({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact__header">
          <p className="contact__eyebrow">Get In Touch</p>
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Have questions about admissions, programs, or anything else? We're here to help. Reach out to us!
          </p>
        </div>

        <div className="contact__grid">
          {/* Info panel */}
          <div className="contact__info">
            <h3>Reach Us At</h3>

            <div className="contact__info-items">
              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <Icons8Icon name="location" size={22} variant="primary" glow />
                </div>
                <div>
                  <strong>Address</strong>
                  <p>{contactInfo?.address || 'Kathmandu-31, Nepal'}</p>
                </div>
              </div>
              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <Icons8Icon name="phone" size={22} variant="primary" glow />
                </div>
                <div>
                  <strong>Phone</strong>
                  <p>{contactInfo?.phone || '+977-01-XXXXXXX'}</p>
                </div>
              </div>
              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <Icons8Icon name="mail" size={22} variant="primary" glow />
                </div>
                <div>
                  <strong>Email</strong>
                  <p>{contactInfo?.email || 'info@ashacollege.edu.np'}</p>
                </div>
              </div>
              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <Icons8Icon name="clock" size={22} variant="primary" glow />
                </div>
                <div>
                  <strong>Office Hours</strong>
                  <p>Sunday – Friday: 7:00 AM – 5:00 PM</p>
                </div>
              </div>
            </div>

            {/* Social media */}
            <div className="contact__social">
              <strong>Follow Us</strong>
              <div className="contact__social-links">
                <a href={contactInfo?.socialMedia?.facebook || '#'} className="contact__social-btn contact__social-btn--fb" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Icons8Icon name="facebook" size={20} />
                </a>
                <a href={contactInfo?.socialMedia?.instagram || '#'} className="contact__social-btn contact__social-btn--ig" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Icons8Icon name="instagram" size={20} />
                </a>
                <a href={contactInfo?.socialMedia?.youtube || '#'} className="contact__social-btn contact__social-btn--yt" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <Icons8Icon name="youtube" size={20} />
                </a>
                <a href={contactInfo?.socialMedia?.twitter || '#'} className="contact__social-btn contact__social-btn--tw" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                  <Icons8Icon name="twitter" size={20} />
                </a>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="contact__map">
              <iframe
                title="Asha Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56515.42693803484!2d85.28457655!3d27.7008887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb978392a66ade8ba!2sKathmandu%2031%2C%20Nepal!5e0!3m2!1sen!2snp!4v1700000000000"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <div className="contact__form-wrapper">
            <h3>Send a Message</h3>
            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              <div className="contact__form-row">
                <div className="contact__field">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={errors.name ? 'error' : ''}
                  />
                  {errors.name && <span className="contact__error">{errors.name}</span>}
                </div>
                <div className="contact__field">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && <span className="contact__error">{errors.email}</span>}
                </div>
              </div>
              <div className="contact__form-row">
                <div className="contact__field">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+977-XXXXXXXXXX"
                  />
                </div>
                <div className="contact__field">
                  <label>Subject</label>
                  <select name="subject" value={form.subject} onChange={handleChange}>
                    <option value="">Select a subject</option>
                    <option value="Admission Inquiry">Admission Inquiry</option>
                    <option value="School Programs">School Programs</option>
                    <option value="College Programs">College Programs</option>
                    <option value="AIESEC">AIESEC</option>
                    <option value="General Query">General Query</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div className="contact__field">
                <label>Message *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows={5}
                  className={errors.message ? 'error' : ''}
                />
                {errors.message && <span className="contact__error">{errors.message}</span>}
              </div>

              {status === 'success' && (
                <div className="contact__alert contact__alert--success">
                  <Icons8Icon name="check-circle" size={20} />
                  <span>Thank you! Your message has been sent successfully. We will get back to you soon.</span>
                </div>
              )}
              {status === 'error' && (
                <div className="contact__alert contact__alert--error">
                  <Icons8Icon name="alert-circle" size={20} />
                  <span>Failed to send message. Please try again or contact us directly.</span>
                </div>
              )}

              <button
                type="submit"
                className="btn-primary contact__submit"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? (
                  <>
                    <Icons8Icon name="spinner" size={20} className="icons8-icon--spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Icons8Icon name="send" size={20} variant="accent" glow />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

