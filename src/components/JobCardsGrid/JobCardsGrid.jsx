import React from 'react';
import './JobCardsGrid.scss';

function JobCardsGrid({ finalJobs }) {
  return (
    <div className="jobCardsGrid">
      {finalJobs.map((job, idx) => (
        <div className="jobCardsGrid__card" key={idx}>
          <div className="jobCardsGrid__companyInfo">
            <img
              src={job.companyIcon}
              alt={job.company}
              className="jobCardsGrid__icon"
            />
            <p>{job.company}</p>
          </div>

          <h4>{job.title}</h4>
          <p>{job.city}</p>
          <p>{job.salary}</p>

          <button>Откликнуться</button>
        </div>
      ))}
    </div>
  );
}

export default JobCardsGrid;