import React, { useState } from "react";
import FilterPanel from "./components/FilterPanel";
import JobCard from "./components/JobCard";
import Pagination from "./components/Pagination";
import "./App.css";

const jobsData = [
  { id: 1, title: "Frontend Developer", location: "Remote", category: "Tech" },
  { id: 2, title: "Backend Developer", location: "San Francisco", category: "Tech" },
  { id: 3, title: "UX Designer", location: "New York", category: "Design" },
];

function App() {
  const [jobs, setJobs] = useState(jobsData);

  return (
    <div className="app">
      <h1>Job Board</h1>
      <FilterPanel />
      <div className="job-grid">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
      <Pagination />
    </div>
  );
}

export default App;