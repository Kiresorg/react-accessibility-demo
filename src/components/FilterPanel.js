import React from "react";

function FilterPanel() {
  return (
    <div className="filter-panel">
      <div className="filter-group">
        <h3>Category</h3>
        <div>
          <input type="checkbox" id="tech" />
          <label htmlFor="tech">Tech</label>
        </div>
        <div>
          <input type="checkbox" id="design" />
          <label htmlFor="design">Design</label>
        </div>
      </div>
      <div className="filter-group">
        <h3>Location</h3>
        <div>
          <input type="checkbox" id="remote" />
          <label htmlFor="remote">Remote</label>
        </div>
        <div>
          <input type="checkbox" id="sf" />
          <label htmlFor="sf">San Francisco</label>
        </div>
      </div>
    </div>
  );
}

export default FilterPanel;