import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import './App.css';

// Navigation & Layout
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTopOnMount from './components/ScrollToTopOnMount';
import Icons8Icon from './components/Icons8Icon';

// Dedicated Pages for Multi-Page Application
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SchoolPage from './pages/SchoolPage';
import CollegePage from './pages/CollegePage';
import EventsPage from './pages/EventsPage';
import AiesecPage from './pages/AiesecPage';
import CommunityPage from './pages/CommunityPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

// Floating Scroll-to-Top Button
const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      className={`scroll-to-top ${visible ? 'scroll-to-top--visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
    >
      <Icons8Icon name="arrow-up" size={20} variant="accent" glow />
    </button>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        {/* Automatically scroll to top when changing route */}
        <ScrollToTopOnMount />

        {/* Global Multi-Page Navbar */}
        <Navbar />

        {/* Route Views */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/school" element={<SchoolPage />} />
            <Route path="/college" element={<CollegePage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/aiesec" element={<AiesecPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Fallback redirect */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Multi-Page Footer */}
        <Footer />

        {/* Floating Scroll to Top */}
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
