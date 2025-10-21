import React from 'react';

import { projects } from '@/lib/index';

import Project from '@/components/project';

const Projects = () => {
    return (
        <div className='text-offwhite'>
            <h1 className='text-2xl font-medium'>Projects</h1>
            <div className='grid grid-cols-2 gap-4 py-4 items-center justify-center'>
                {projects.map((project) => (
                    <Project project={project} key={project.title} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
