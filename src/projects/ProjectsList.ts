import PropTypes from 'prop-types';
import { Project } from './Project';

function ProjectList({ projects: [] }) {
  return `<pre>{JSON.parse(projects, null, '')}</pre>`;
}

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.instanceOf(Project)).isRequired,
};

export default ProjectList;
