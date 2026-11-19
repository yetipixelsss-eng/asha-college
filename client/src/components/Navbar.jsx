import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';
import Icons8Icon from './Icons8Icon';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [schoolDropdown, setSchoolDropdown] = useState(false);
  const [isDropdownHeld, setIsDropdownHeld] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 36);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMobileOpen(false);
    setSchoolDropdown(false);
    setIsDropdownHeld(false);
    setMobileDropdown(false);
  }, [location.pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setSchoolDropdown(false);
        setIsDropdownHeld(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { id: 'about', label: 'About Us', path: '/about' },
    { id: 'school-college', label: 'School / College', hasDropdown: true },
    { id: 'gallery', label: 'Gallery', path: '/gallery' },
    { id: 'aiesec', label: 'AIESEC', path: '/aiesec' },
    { id: 'contact', label: 'Contact Us', path: '/contact' },
  ];

  const isDropdownActive = location.pathname === '/school' || location.pathname === '/college';

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''} ${isMobileOpen ? 'navbar--mobile-open' : ''}`}>
      <div className="navbar__inner container">
        {/* Actual Asha Logo */}
        <Link to="/" className="navbar__logo" aria-label="Asha School / College Home">
          <img src={logo} alt="Asha School / College Logo" />
          <div className="navbar__logo-text">
            <span className="navbar__logo-title">ASHA</span>
            <span className="navbar__logo-sub">School / College</span>
          </div>
        </Link>

        {/* Centered Desktop Navigation */}
        <ul className="navbar__links">
          {navLinks.map((link) => {
            const isActive = link.hasDropdown ? isDropdownActive : location.pathname === link.path;

            return (
              <li
                key={link.id}
                ref={link.hasDropdown ? dropdownRef : null}
                className={`navbar__item ${link.hasDropdown ? 'navbar__item--dropdown' : ''} ${link.hasDropdown && schoolDropdown ? 'navbar__item--open' : ''} ${isActive ? 'active' : ''}`}
                onMouseEnter={() => link.hasDropdown && setSchoolDropdown(true)}
                onMouseLeave={() => link.hasDropdown && !isDropdownHeld && setSchoolDropdown(false)}
              >
                {link.hasDropdown ? (
                  <button
                    type="button"
                    className={`navbar__link ${isActive ? 'active' : ''} ${schoolDropdown ? 'navbar__link--open' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (isDropdownHeld) {
                        setIsDropdownHeld(false);
                        setSchoolDropdown(false);
                      } else {
                        setIsDropdownHeld(true);
                        setSchoolDropdown(true);
                      }
                    }}
                    aria-expanded={schoolDropdown}
                    aria-haspopup="true"
                  >
                    <span>{link.label}</span>
                    <span className={`navbar__arrow ${schoolDropdown ? 'navbar__arrow--open' : ''}`}>
                      <Icons8Icon name="chevron-down" size={14} />
                    </span>
                  </button>
                ) : (
                  <Link
                    to={link.path}
                    className={`navbar__link ${isActive ? 'active' : ''}`}
                  >
                    {link.label}
                  </Link>
                )}

                {link.hasDropdown && (
                  <div className={`navbar__dropdown ${schoolDropdown ? 'navbar__dropdown--open' : ''}`}>
                    <Link
                      to="/school"
                      className={`navbar__dropdown-item ${location.pathname === '/school' ? 'active' : ''}`}
                      onClick={() => {
                        setSchoolDropdown(false);
                        setIsDropdownHeld(false);
                      }}
                    >
                      <Icons8Icon name="school" size={18} variant="gold" />
                      <div>
                        <span className="navbar__dropdown-title">Asha School</span>
                        <span className="navbar__dropdown-meta">Nursery – Grade 10 (SEE)</span>
                      </div>
                    </Link>
                    <Link
                      to="/college"
                      className={`navbar__dropdown-item ${location.pathname === '/college' ? 'active' : ''}`}
                      onClick={() => {
                        setSchoolDropdown(false);
                        setIsDropdownHeld(false);
                      }}
                    >
                      <Icons8Icon name="cap" size={18} variant="gold" />
                      <div>
                        <span className="navbar__dropdown-title">Asha College</span>
                        <span className="navbar__dropdown-meta">+2 Level (NEB)</span>
                      </div>
                    </Link>
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        {/* Right Gold CTA */}
        <button
          type="button"
          className="navbar__cta"
          onClick={() => navigate('/contact')}
        >
          <span>Apply Now</span>
        </button>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className={`navbar__hamburger ${isMobileOpen ? 'open' : ''}`}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Responsive Mobile Drawer */}
      <div className={`navbar__mobile ${isMobileOpen ? 'navbar__mobile--open' : ''}`}>
        <Link
          to="/"
          className={`navbar__mobile-link ${location.pathname === '/' ? 'active' : ''}`}
          onClick={() => {
            setIsMobileOpen(false);
            setMobileDropdown(false);
          }}
        >
          <span>Home</span>
        </Link>
        {navLinks.map((link) => (
          <div key={link.id} className="navbar__mobile-item">
            {link.hasDropdown ? (
              <div className="navbar__mobile-dropdown-wrapper">
                <button
                  type="button"
                  className={`navbar__mobile-link navbar__mobile-dropdown-btn ${isDropdownActive ? 'active' : ''} ${mobileDropdown ? 'open' : ''}`}
                  onClick={() => setMobileDropdown((prev) => !prev)}
                  aria-expanded={mobileDropdown}
                >
                  <span>{link.label}</span>
                  <span className={`navbar__arrow ${mobileDropdown ? 'navbar__arrow--open' : ''}`}>
                    <Icons8Icon name="chevron-down" size={15} />
                  </span>
                </button>
                <div className={`navbar__mobile-sub-menu ${mobileDropdown ? 'navbar__mobile-sub-menu--open' : ''}`}>
                  <Link
                    to="/school"
                    className={`navbar__mobile-sub ${location.pathname === '/school' ? 'active' : ''}`}
                    onClick={() => {
                      setIsMobileOpen(false);
                      setMobileDropdown(false);
                    }}
                  >
                    <Icons8Icon name="school" size={16} variant="gold" />
                    <span>School (Nursery – Grade 10)</span>
                  </Link>
                  <Link
                    to="/college"
                    className={`navbar__mobile-sub ${location.pathname === '/college' ? 'active' : ''}`}
                    onClick={() => {
                      setIsMobileOpen(false);
                      setMobileDropdown(false);
                    }}
                  >
                    <Icons8Icon name="cap" size={16} variant="gold" />
                    <span>College (+2 Level)</span>
                  </Link>
                </div>
              </div>
            ) : (
              <Link
                to={link.path}
                className={`navbar__mobile-link ${location.pathname === link.path ? 'active' : ''}`}
                onClick={() => {
                  setIsMobileOpen(false);
                  setMobileDropdown(false);
                }}
              >
                <span>{link.label}</span>
              </Link>
            )}
          </div>
        ))}
        <button
          type="button"
          className="navbar__mobile-cta"
          onClick={() => {
            setIsMobileOpen(false);
            setMobileDropdown(false);
            navigate('/contact');
          }}
        >
          <span>Apply Now</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
