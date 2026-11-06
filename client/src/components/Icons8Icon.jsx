import React from 'react';
import './Icons8Icon.css';

/**
 * Icons8 Glyph Neue Icon System
 * Authentic, handcrafted solid silhouette glyphs with high optical visibility,
 * precise negative-space cutouts, and rich contrast matching #00064F and #54D6FF.
 */
const GLYPH_NEUE_ICONS = {
  // Education & Institution
  school: (
    <svg viewBox="0 0 24 24">
      {/* Neoclassical pediment, entablature, pillars, and stylobate */}
      <path d="M12 2L1 7.5v2h22v-2L12 2zm0 2.45L17.5 6.5H6.5L12 4.45zM3 11v8h3v-8H3zm6 0v8h3v-8H9zm6 0v8h3v-8h-3zm6 0v8h1v-8h-1zM1 20v2h22v-2H1z" />
    </svg>
  ),

  college: (
    <svg viewBox="0 0 24 24">
      {/* Classic Mortarboard Cap & Academic Ribbon */}
      <path d="M12 2.5L0.5 8.25l11.5 5.75 9.5-4.75v5.5h2v-6.5L12 2.5zm0 13.5l-8-4v5.25c0 2.9 3.58 5.25 8 5.25s8-2.35 8-5.25v-5.25l-8 4z" />
    </svg>
  ),

  cap: (
    <svg viewBox="0 0 24 24">
      {/* Bold Graduation Cap Silhouette */}
      <path d="M12 2.5L1 8l11 5.5 8.5-4.25v5.5h2v-6.5L12 2.5zm0 13.25l-7.5-3.75v4.5C4.5 19.5 7.86 21.5 12 21.5s7.5-2 7.5-5v-4.5l-7.5 3.75z" />
    </svg>
  ),

  about: (
    <svg viewBox="0 0 24 24">
      {/* Solid Info Badge */}
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
    </svg>
  ),

  calendar: (
    <svg viewBox="0 0 24 24">
      {/* Solid Calendar Pad with Ring Bindings and Date Grid */}
      <path d="M19 3h-1V1.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5V3H9V1.5C9 .67 8.33 0 7.5 0S6 .67 6 1.5V3H5C3.34 3 2 4.34 2 6v14c0 1.66 1.34 3 3 3h14c1.66 0 3-1.34 3-3V6c0-1.66-1.34-3-3-3zm1 17c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V9h16v11z" />
    </svg>
  ),

  events: (
    <svg viewBox="0 0 24 24">
      {/* Calendar with Event Star Indicator */}
      <path d="M19 3h-1V1.5C18 .67 17.33 0 16.5 0S15 .67 15 1.5V3H9V1.5C9 .67 8.33 0 7.5 0S6 .67 6 1.5V3H5C3.34 3 2 4.34 2 6v14c0 1.66 1.34 3 3 3h14c1.66 0 3-1.34 3-3V6c0-1.66-1.34-3-3-3zm1 17c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V9h16v11zm-8-9l1.45 2.94 3.25.47-2.35 2.29.55 3.23-2.9-1.53-2.9 1.53.55-3.23-2.35-2.29 3.25-.47L12 11z" />
    </svg>
  ),

  blog: (
    <svg viewBox="0 0 24 24">
      {/* Solid Document / Editorial Article with Page Corner Fold */}
      <path d="M14 2H5C3.34 2 2 3.34 2 5v14c0 1.66 1.34 3 3 3h14c1.66 0 3-1.34 3-3V10l-8-8zm-2 15H6v-2h6v2zm6-4H6v-2h12v2zm0-4H6V7h12v2zm-4-4.5V9h5.5L14 4.5z" />
    </svg>
  ),

  globe: (
    <svg viewBox="0 0 24 24">
      {/* Solid Planet Earth with Latitude/Longitude Meridian Lines */}
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm6.93 6h-2.95a15.65 15.65 0 00-1.38-3.56A8.03 8.03 0 0118.93 8zM12 4.07c.83 1.2 1.48 2.53 1.91 3.93h-3.82c.43-1.4 1.08-2.73 1.91-3.93zM4.07 14c-.05-.66-.07-1.32-.07-2s.02-1.34.07-2h3.29c-.06.66-.09 1.32-.09 2s.03 1.34.09 2H4.07zm1.37 2h2.95c.36 1.28.84 2.49 1.38 3.56A8.03 8.03 0 015.44 16zm2.95-8H5.44A8.03 8.03 0 019.77 4.44C9.23 5.51 8.75 6.72 8.39 8zm3.61 11.93c-.83-1.2-1.48-2.53-1.91-3.93h3.82c-.43 1.4-1.08 2.73-1.91 3.93zM14.34 14H9.66c-.08-.66-.12-1.32-.12-2s.04-1.34.12-2h4.68c.08.66.12 1.32.12 2s-.04 1.34-.12 2zm1.27 5.56c.54-1.07 1.02-2.28 1.38-3.56h2.95a8.03 8.03 0 01-4.33 3.56zM16.64 14c.06-.66.09-1.32.09-2s-.03-1.34-.09-2h3.29c.05.66.07 1.32.07 2s-.02 1.34-.07 2h-3.29z" />
    </svg>
  ),

  contact: (
    <svg viewBox="0 0 24 24">
      {/* Solid Post Envelope */}
      <path d="M20 4H4C2.34 4 1 5.34 1 7v10c0 1.66 1.34 3 3 3h16c1.66 0 3-1.34 3-3V7c0-1.66-1.34-3-3-3zm-.4 3L12 12.25 4.4 7h15.2zM3 16.5V8.2l8.44 5.86c.34.24.78.24 1.12 0L21 8.2v8.3c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1z" />
    </svg>
  ),

  phone: (
    <svg viewBox="0 0 24 24">
      {/* Solid Curved Ergonomic Handset */}
      <path d="M19.95 15.65l-3.3-1.4c-.45-.19-1-.07-1.32.28l-1.63 2c-2.43-1.22-4.41-3.2-5.63-5.63l2-1.63c.35-.32.47-.87.28-1.32L8.95 4.65C8.75 4.17 8.27 3.87 7.74 3.9L4.2 4.14C3.52 4.19 3 4.74 3 5.42 3 14.58 10.42 22 19.58 22c.68 0 1.23-.52 1.28-1.2l.24-3.54c.03-.53-.27-1.01-.75-1.21z" />
    </svg>
  ),

  location: (
    <svg viewBox="0 0 24 24">
      {/* Solid Map Pin with Clean Center Aperture */}
      <path d="M12 2C7.58 2 4 5.58 4 10c0 5.25 7.15 12.35 7.45 12.65a.78.78 0 001.1 0c.3-.3 7.45-7.4 7.45-12.65 0-4.42-3.58-8-8-8zm0 11.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7z" />
    </svg>
  ),

  clock: (
    <svg viewBox="0 0 24 24">
      {/* Solid Circular Chronometer Dial at 10:10 */}
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 11h-4c-.55 0-1-.45-1-1s.45-1 1-1h3V6c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1z" />
    </svg>
  ),

  mail: (
    <svg viewBox="0 0 24 24">
      {/* Solid Correspondence Letter Envelope */}
      <path d="M20 4H4C2.34 4 1 5.34 1 7v10c0 1.66 1.34 3 3 3h16c1.66 0 3-1.34 3-3V7c0-1.66-1.34-3-3-3zm-.4 3L12 12.25 4.4 7h15.2zM3 16.5V8.2l8.44 5.86c.34.24.78.24 1.12 0L21 8.2v8.3c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1z" />
    </svg>
  ),

  // Strategy & Purpose
  target: (
    <svg viewBox="0 0 24 24">
      {/* Solid Bullseye Target with Crisp Concentric Apertures */}
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c3.87 0 7 3.13 7 7s-3.13 7-7 7-7-3.13-7-7 3.13-7 7-7zm0 2.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm0 2.5a2 2 0 110 4 2 2 0 010-4z" />
    </svg>
  ),

  bulb: (
    <svg viewBox="0 0 24 24" fill="none">
      {/* Lightbulb: Plain white silhouette with theme color border and base */}
      <path
        data-bulb-body="true"
        d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7z"
        style={{ fill: '#FFFFFF', stroke: 'currentColor', strokeWidth: '1.8px', strokeLinejoin: 'round' }}
      />
      <path
        d="M9.6 10a2.4 2.4 0 0 1 4.8 0c0 1.2-1 1.7-1.3 2.5"
        style={{ fill: 'none', stroke: 'currentColor', strokeWidth: '1.5px', strokeLinecap: 'round' }}
      />
      <circle cx="12" cy="14" r="0.8" style={{ fill: 'currentColor' }} />
      <path
        d="M9 18h6M9.5 20.2h5M10.5 22.2h3"
        style={{ fill: 'none', stroke: 'currentColor', strokeWidth: '1.8px', strokeLinecap: 'round' }}
      />
    </svg>
  ),

  sparkle: (
    <svg viewBox="0 0 24 24">
      {/* Bold 4-Point Precision Starburst */}
      <path d="M12 1L9 9 1 12l8 3 3 8 3-8 8-3-8-3zM4.5 19.5L6 16l-3.5-1.5L6 13l1.5-3.5L9 13l3.5 1.5L9 16l-1.5 3.5zm13-11L19 5l3.5-1.5L19 2l-1.5-3.5L16 2l-3.5 1.5L16 5l1.5 3.5z" />
    </svg>
  ),

  users: (
    <svg viewBox="0 0 24 24">
      {/* Solid Community Trio */}
      <path d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
    </svg>
  ),

  teacher: (
    <svg viewBox="0 0 24 24">
      {/* Solid Instructor Presentation Board */}
      <path d="M21 3H3C1.9 3 1 3.9 1 5v11c0 1.1.9 2 2 2h6v2H7c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1h-2v-2h6c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H3V5h18v11zM7 7h10v2H7V7zm0 4h7v2H7v-2z" />
    </svg>
  ),

  history: (
    <svg viewBox="0 0 24 24">
      {/* Solid Legacy Hourglass of Excellence */}
      <path d="M6 2v4.5c0 1.5 1 2.8 2.4 3.3L10.5 11l-2.1 1.2C7 12.7 6 14 6 15.5V20c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-4.5c0-1.5-1-2.8-2.4-3.3L13.5 11l2.1-1.2c1.4-.5 2.4-1.8 2.4-3.3V2c0-1.1-.9-2-2-2H8C6.9 0 6 .9 6 2zm10 2v3c0 .5-.3.9-.7 1.1L12 9.9 8.7 8.1C8.3 7.9 8 7.5 8 7V4h8zm-8 16v-3c0-.5.3-.9.7-1.1l3.3-1.8 3.3 1.8c.4.2.7.6.7 1.1v3H8z" />
    </svg>
  ),

  trophy: (
    <svg viewBox="0 0 24 24">
      {/* Solid Victor Cup with Sculpted Handles and Pedestal */}
      <path d="M19 3h-2.5V1h-9v2H5C3.34 3 2 4.34 2 6v1c0 2.76 2.24 5 5 5h.2c.73 1.76 2.3 3.07 4.2 3.42V18H8c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1h-3.4v-2.58c1.9-.35 3.47-1.66 4.2-3.42h.2c2.76 0 5-2.24 5-5V6c0-1.66-1.34-3-3-3zm-12 7c-1.65 0-3-1.35-3-3V6c0-.55.45-1 1-1h2v5H7zm13-3c0 1.65-1.35 3-3 3h-2V5h2c.55 0 1 .45 1 1v1z" />
    </svg>
  ),

  // Academic Disciplines
  sprout: (
    <svg viewBox="0 0 24 24">
      {/* Solid Botanical Sprout of Early Nurturing */}
      <path d="M21 2c-4.42 0-8 3.58-8 8v1.17A6.98 6.98 0 009 10C4.58 10 1 13.58 1 18h8v4h2v-8h1.17C12.72 17.61 16.03 20 20 20h2v-2c0-4.42-3.58-8-8-8h-1V9.83A6.98 6.98 0 0117 9c4.42 0 4-7 4-7z" />
    </svg>
  ),

  books: (
    <svg viewBox="0 0 24 24">
      {/* Solid Stack of Encyclopedic Volumes */}
      <path d="M4 6H2v14c0 1.66 1.34 3 3 3h15v-2H5c-.55 0-1-.45-1-1V6zm16-4H8C6.34 2 5 3.34 5 5v12c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3zm-1 9H9V9h10v2zm-3 4H9v-2h7v2zm3-8H9V5h10v2z" />
    </svg>
  ),

  microscope: (
    <svg viewBox="0 0 24 24">
      {/* Solid Precision Laboratory Microscope */}
      <path d="M19 19h2v2H3v-2h2c0-3.31 2.69-6 6-6h1V8.92c-.62-.35-1.12-.9-1.38-1.57l-2.83.76-.52-1.93 2.83-.76C10.05 4.75 10.45 4 11 4V1h2v3c.55 0 .95.75.9 1.42l2.83.76-.52 1.93-2.83-.76c-.26.67-.76 1.22-1.38 1.57V13h1c4.42 0 8 3.58 8 8zm-8-3c-1.66 0-3 1.34-3 3h6c0-1.66-1.34-3-3-3z" />
    </svg>
  ),

  chart: (
    <svg viewBox="0 0 24 24">
      {/* Solid Ascending Triple Financial Analytics Bars */}
      <path d="M4 9h3v11H4V9zm6-5h4v16h-4V4zm7 8h3v8h-3v-8zM2 22h20v2H2v-2z" />
    </svg>
  ),

  literature: (
    <svg viewBox="0 0 24 24">
      {/* Solid Open Humanities Grimoire */}
      <path d="M21 4c-1.52-.33-3.15-.5-4.5-.5-2.2 0-4.6.45-6.5 1.5C8.1 3.95 5.7 3.5 3.5 3.5 2.15 3.5.52 3.67-1 4v15.5c0 .55.45 1 1 1 .1 0 .2 0 .3-.05C2.1 19.95 4.3 19.5 6 19.5c2.2 0 4.6.5 6 1.5 1.4-1 3.8-1.5 6-1.5 1.7 0 3.9.45 5.7 1c.1.05.2.05.3.05.55 0 1-.45 1-1V4zm-2 13.5c-1.3-.25-2.9-.5-4.5-.5-2.1 0-4.4.5-5.5 1.4V6.5c1.1-.9 3.4-1.5 5.5-1.5 1.6 0 3.2.25 4.5.5v12z" />
    </svg>
  ),

  // Global Opportunities
  volunteer: (
    <svg viewBox="0 0 24 24">
      {/* Solid Compassionate Heart Silhouette */}
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  ),

  briefcase: (
    <svg viewBox="0 0 24 24">
      {/* Solid Executive Portfolio with Center Latch */}
      <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4C2.89 6 2 6.89 2 8v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2zm2 7H8v-2h8v2z" />
    </svg>
  ),

  // Navigation & Directionals
  rocket: (
    <svg viewBox="0 0 24 24">
      {/* Solid Aerodynamic Spacecraft with Porthole Aperture */}
      <path d="M14.5 2.5C11.8 4.7 10 8 10 11.5L4 17.5v4h4l6-6c3.5 0 6.8-1.8 9-4.5C23.2 8.5 21 4.5 14.5 2.5zm4 7c-.83 0-1.5-.67-1.5-1.5S17.67 6.5 18.5 6.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM2 22l4-1-3-3-1 4z" />
    </svg>
  ),

  send: (
    <svg viewBox="0 0 24 24">
      {/* Solid Origami Supersonic Dart */}
      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
    </svg>
  ),

  'arrow-right': (
    <svg viewBox="0 0 24 24">
      {/* Solid Bold Directional Right */}
      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
    </svg>
  ),

  'arrow-left': (
    <svg viewBox="0 0 24 24">
      {/* Solid Bold Directional Left */}
      <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
    </svg>
  ),

  'arrow-up': (
    <svg viewBox="0 0 24 24">
      {/* Solid Bold Zenith Up */}
      <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
    </svg>
  ),

  'chevron-down': (
    <svg viewBox="0 0 24 24">
      <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
    </svg>
  ),

  'chevron-left': (
    <svg viewBox="0 0 24 24">
      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
    </svg>
  ),

  'chevron-right': (
    <svg viewBox="0 0 24 24">
      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
    </svg>
  ),

  check: (
    <svg viewBox="0 0 24 24">
      <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
    </svg>
  ),

  'check-circle': (
    <svg viewBox="0 0 24 24">
      {/* Solid Verified Badge */}
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
  ),

  'alert-circle': (
    <svg viewBox="0 0 24 24">
      {/* Solid Warning Notification Badge */}
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
    </svg>
  ),

  star: (
    <svg viewBox="0 0 24 24">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  ),

  filter: (
    <svg viewBox="0 0 24 24">
      {/* Solid Symmetrical Funnel Filter */}
      <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" />
    </svg>
  ),

  search: (
    <svg viewBox="0 0 24 24">
      {/* Solid Search Lens */}
      <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
    </svg>
  ),

  user: (
    <svg viewBox="0 0 24 24">
      {/* Solid User Silhouette */}
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
  ),

  quote: (
    <svg viewBox="0 0 24 24">
      {/* Solid Typographic Quotation Mark */}
      <path d="M6 17h3l2-4V7H5v6h3l-2 4zm8 0h3l2-4V7h-6v6h3l-2 4z" />
    </svg>
  ),

  camera: (
    <svg viewBox="0 0 24 24">
      {/* Solid Camera Glyph */}
      <path d="M9 3L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-3.17L15 3H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
    </svg>
  ),

  image: (
    <svg viewBox="0 0 24 24">
      {/* Solid Photo Frame */}
      <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
    </svg>
  ),

  spinner: (
    <svg viewBox="0 0 24 24">
      <path d="M12 4V1C5.92 1 1 5.92 1 12h3a8 8 0 018-8z" />
    </svg>
  ),

  // Social Channels
  facebook: (
    <svg viewBox="0 0 24 24">
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.5C10 7.02 11.48 5.65 13.75 5.65c1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.23 0-1.61.76-1.61 1.54V12h2.77l-.44 3h-2.33v6.8c4.56-.93 8-4.96 8-9.8z" />
    </svg>
  ),

  instagram: (
    <svg viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  ),

  youtube: (
    <svg viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 00-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  ),

  twitter: (
    <svg viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),

  // Icons8 Attribution
  icons8: (
    <svg viewBox="0 0 32 32">
      <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm0 4c5.523 0 10 4.477 10 10s-4.477 10-10 10S6 21.523 6 16 10.477 6 16 6zm-3 5a3 3 0 100 6 3 3 0 000-6zm6 0a3 3 0 100 6 3 3 0 000-6zm-6 8a3 3 0 100 6 3 3 0 000-6zm6 0a3 3 0 100 6 3 3 0 000-6z" />
    </svg>
  )
};

/**
 * Icons8Icon (Glyph Neue Edition)
 * High-visibility solid vectors matching #00064F and #54D6FF with frosted glass aesthetics.
 */
export const Icons8Icon = ({
  name = 'star',
  size = 20,
  color,
  glow = false,
  variant,
  className = '',
  style = {},
  ...props
}) => {
  const iconSvg = GLYPH_NEUE_ICONS[name] || GLYPH_NEUE_ICONS.star;

  const classNames = [
    'icons8-icon',
    'icons8-glyph-neue',
    glow ? 'icons8-icon--glow' : '',
    variant ? `icons8-icon--${variant}` : '',
    className
  ]
    .filter(Boolean)
    .join(' ');

  const iconStyle = {
    width: `${size}px`,
    height: `${size}px`,
    minWidth: `${size}px`,
    minHeight: `${size}px`,
    ...(color ? { color } : {}),
    ...style
  };

  return (
    <span
      className={classNames}
      style={iconStyle}
      aria-hidden="true"
      data-icons8-glyph={name}
      {...props}
    >
      {iconSvg}
    </span>
  );
};

export default Icons8Icon;
