import API from 'api/methods';
import { useQuery } from '@tanstack/react-query';
import useAppStore from 'store/app';
import Project from 'components/Project';

const Projects = () => {
  const { data: assets } = useQuery({ queryKey: ['assets'], queryFn: () => API.getProjectsImgs() });
  const data = useAppStore((store) => store.app_data);

  return (
    <div style={{ paddingTop: '60px' }}>
      {assets &&
        data?.projects.items.map((project: any, idx: number) => (
          <Project
            {...project}
            key={project.name}
            features={project.features.map((feature: string) => data?.projects.features_description[feature])}
            imgs={project.imgs.map((img: string) => assets[img])}
            idx={idx}
          />
        ))}
    </div>
  );
};

export default Projects;
