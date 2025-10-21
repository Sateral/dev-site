import Image from 'next/image';
import React from 'react';

import { Badge } from '@/components/ui/badge';

import type { Project } from '@/types/projects';

interface ProjectProps {
    project: Project;
}

const Project = ({ project }: ProjectProps) => {
    const image = project.image || '/placeholder.jpg';
    return (
        <div className='border border-offwhite/10 rounded-md p-2 hover:scale-[1.01] transition-transform'>
            <Image
                src={image}
                alt={project.title}
                width={640}
                height={480}
                className='h-auto w-auto object-cover rounded-md'
            />
            <h2 className='text-xl font-medium mt-2'>{project.title}</h2>
            <p className='text-sm'>{project.description}</p>
            <div className='flex gap-2'>
                {project.tech.map((tech) => (
                    <Badge
                        key={tech}
                        className='bg-secondary text-primary mt-4'
                    >
                        {tech}
                    </Badge>
                ))}
            </div>
        </div>
    );
};

export default Project;
