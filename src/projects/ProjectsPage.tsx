import React, { useState, useEffect } from 'react';
import { MOCK_PROJECTS } from './MockProjects';
import './index.css';

interface Project {
  id: string;
  visible: boolean;
}

function ProjectsPage() {
  const [visibleProjects, setVisibleProjects] = useState<Project[]>(
    MOCK_PROJECTS.map((project) => ({
      ...project,
      id: project.id ? project.id.toString() : '',
      visible: false,
    }))
  );
  const [projectCounter, setProjectCounter] = useState(0); // Use useState to keep track of projectCounter

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (projectCounter < visibleProjects.length) {
        setVisibleProjects((projects) =>
          projects.map((project, index) => {
            return index === projectCounter
              ? { ...project, visible: true }
              : project;
          })
        );
        setProjectCounter((prevCounter) => prevCounter + 1); // Use setProjectCounter to update the value
      } else {
        clearInterval(intervalId);
      }
    }, 200);

    return () => {
      clearInterval(intervalId);
    };
  }, [visibleProjects.length, projectCounter]); // Don't forget to include projectCounter in the dependency list

  return (
    <>
      {console.log(visibleProjects.length)}
      <div className='container'>
        <h1>Projects</h1>
        <div className='card-wrapper'>
          {visibleProjects.map((project) => {
            return (
              <div
                className={`card ${project.visible ? 'visible' : ''}`}
                key={project.id}
              >
                <span>{JSON.stringify(project, null)}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProjectsPage;
