import React, { useState, useEffect } from 'react';
import { MOCK_PROJECTS } from './MockProjects';
import './index.css';
import Button from '../components/UI/Button/Button';

interface Project {
  id: string;
  name: string;
  description: string;
  stack?: string;
  url?: string;
  imageUrl?: string;
  visible: boolean;
  behaviour?: boolean;
}

function ProjectsPage() {
  const [visibleProjects, setVisibleProjects] = useState<Project[]>(
    MOCK_PROJECTS.map((project) => ({
      ...project,
      key: project.id,
      behaviour: project.behaviour,
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
      <div className='contener'>
        <h1>Last Projects</h1>
        <div className='card-wrapper'>
          {visibleProjects.map((project) => {
            return (
              <div key={project.id}>
                <div className={`card ${project.visible ? 'visible' : ''}`}>
                  <div className='text-wrapper glass'>
                    <span>
                      <em>Project: </em>
                      {project.name}
                    </span>
                    <span>
                      <em>Description: </em>
                      <p>{project.description}</p>
                    </span>
                  </div>
                  <div
                    className='base-card'
                    style={{
                      backgroundImage: project.imageUrl,
                    }}
                  >
                    <h2>Tecnologies: </h2>
                    <p>{project.stack}</p>
                    <div className='url-section'>
                      <h2>Url: </h2>
                      <a href={project.url} className='std' target='_blank'>
                        <span>{project.url}</span>
                      </a>
                    </div>
                    {/* <Button
                      url={project.url}
                      id='project.id'
                      text={project.url}
                      behaviour={project.behaviour}
                    /> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProjectsPage;
