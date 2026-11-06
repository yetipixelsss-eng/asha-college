import React from 'react';
import rightArrowPng from '../assets/right-arrow-3094.png';
import './RightArrowIcon.css';

/**
 * Right Arrow Icon (PNG format from iconpacks.net/free-icon/right-arrow-3094.html)
 * Rendered as a PNG image with responsive sizing and theme-adaptive contrast.
 */
const RightArrowIcon = ({ size = 18, className = '', alt = '' }) => {
  return (
    <img
      src={rightArrowPng}
      alt={alt}
      width={size}
      height={size}
      className={`btn-arrow-icon ${className}`.trim()}
    />
  );
};

export { rightArrowPng };
export default RightArrowIcon;

