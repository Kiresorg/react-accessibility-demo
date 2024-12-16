import React from "react";

function JobCard({ job }) {
  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <p>Location: {job.location}</p>
      <p>Category: {job.category}</p>
    </div>
  );
}

export default JobCard;