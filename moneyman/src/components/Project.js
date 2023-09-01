import React from 'react';

function Project({ title, description, technologies }) {
  return (
    <div className="project">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Technologies used: {technologies.join(', ')}</p>
    </div>
  );
}

export default Project;
