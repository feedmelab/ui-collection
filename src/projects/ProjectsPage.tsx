import { MOCK_PROJECTS } from './MockProjects';

function ProjectsPage() {
  return (
    <>
      <h1>Projects</h1>
      {MOCK_PROJECTS.map((project) => {
        return <pre>{JSON.stringify(project, null, '')}</pre>;
      })}
    </>
  );
}

export default ProjectsPage;
