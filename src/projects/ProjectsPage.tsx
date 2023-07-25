import React, { useState, useEffect } from 'react';
import { MOCK_PROJECTS } from './MockProjects';
import './index.css';

interface Project {
  id: string;
}

function ProjectsPage() {
  const [visibleProjects, setVisibleProjects] = useState<Project[]>([]);

  useEffect(() => {
    let projectCounter = 0;
    const intervalId = setInterval(() => {
      if (projectCounter < MOCK_PROJECTS.length) {
        const project = MOCK_PROJECTS[projectCounter];
        if (project) {
          setVisibleProjects((oldArray) => [
            ...oldArray,
            {
              ...project,
              id: project.id ? project.id.toString() : '',
            },
          ]);
        }
        projectCounter++;
      } else {
        clearInterval(intervalId);
      }
    }, 500);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <h1>Projects</h1>
      <div className='card-wrapper'>
        {visibleProjects.map((project) => {
          return (
            <div className='card visible' key={project.id}>
              <span>{JSON.stringify(project, null)}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ProjectsPage;
