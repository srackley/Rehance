import React from 'react';

const Project = ({ project }) => (
  <div className="project">
    <a href={project.link}>
      <img className="cover-image" src={project.link} alt={project.title} />
      <div className="title">
        {project.title}
      </div>
    </a>
    <a href={project.ownersLink}>
      <div className="owners">{project.owners}</div>
    </a>
    <a href={project.field}>{project.field}</a>
    <div className="stats" >
      <div>
        {project.appreciate}
      </div>
      <div>
        {project.views}
      </div>
    </div>
    {project.badge ? <div className="badge" /> : null}
  </div>
);

export default Project;
