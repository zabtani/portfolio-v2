import Project from '../../components/Project';

import { PROJECTS } from './data';

const Projects = () => {
  return (
    <div style={{ overflow: 'hidden', paddingTop: '60px' }}>
      {PROJECTS.map((props, idx) => (
        <Project idx={idx} {...props} />
      ))}
    </div>
  );
};

export default Projects;
