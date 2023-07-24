import { MOCK_PROJECTS } from './MockProjects';

function ProjectsPage() {
  return (
    <>
      <h1>Projects</h1>
      {MOCK_PROJECTS.map((project) => {
        return (
          <pre key={project.id}>
            <span>{JSON.stringify(project, null)}</span>
          </pre>
        );
      })}
    </>
  );
}

export default ProjectsPage;
