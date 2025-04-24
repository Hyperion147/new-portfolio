import React from 'react';
import ProjectCard from '../ProjectCard';

const ProjectSection = () => {
    const projects = [
        {
          image: 'ajivak',
          title: 'Project 1',
          description: 'This is a description for Project 1.',
        },
        {
          image: 'portfolio',
          title: 'Project 2',
          description: 'This is a description for Project 2.',
        },
        {
          image: 'https://via.placeholder.com/400',
          title: 'Project 3',
          description: 'This is a description for Project 3.',
        },
      ];

  return (
    <section id='projects' className="py-12 px-4 sm:px-6 lg:px-8 mt-20 mb-60">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;