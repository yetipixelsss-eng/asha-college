import React from 'react';
import { Link } from 'react-router-dom';
import './PageHeader.css';
import Icons8Icon from './Icons8Icon';

const PageHeader = ({
  badge = 'Asha Institution',
  badgeIcon = 'star',
  title,
  subtitle,
  breadcrumb = title
}) => {
  return (
    <div className="page-header">
      <div className="page-header__overlay" />
      <div className="container page-header__inner">
        {/* Breadcrumb */}
        <nav className="page-header__breadcrumb" aria-label="Breadcrumb">
          <Link to="/" className="page-header__breadcrumb-link">
            <Icons8Icon name="school" size={14} variant="accent" />
            <span>Home</span>
          </Link>
          <span className="page-header__breadcrumb-sep">/</span>
          <span className="page-header__breadcrumb-current">{breadcrumb}</span>
        </nav>

        {/* Badge */}
        {badge && (
          <div className="page-header__badge">
            <Icons8Icon name={badgeIcon} size={15} variant="gold" glow />
            <span>{badge}</span>
          </div>
        )}

        {/* Title */}
        <h1 className="page-header__title">{title}</h1>

        {/* Subtitle */}
        {subtitle && <p className="page-header__subtitle">{subtitle}</p>}
      </div>
    </div>
  );
};

export default PageHeader;

