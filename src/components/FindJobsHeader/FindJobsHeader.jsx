import React from 'react';
import { Link } from 'react-router-dom';
import './FindJobsHeader.scss';

function FindJobsHeader({ logo, companySearch, setCompanySearch }) {
  return (
    <div className="findJobsHeader">
      <img src={logo} alt="Job Logo" className="findJobsHeader__logo" />
      <Link to="/" className="findJobsHeader__companyName">
        Моя работа
      </Link>

      <div className="findJobsHeader__searchInput">
        <input
          type="text"
          placeholder="Поиск по названию компании"
          value={companySearch}
          onChange={(e) => setCompanySearch(e.target.value)}
        />
      </div>
    </div>
  );
}

export default FindJobsHeader;