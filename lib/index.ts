import type { Project } from '@/types/projects';

export const projects: Project[] = [
    {
        title: 'Portfolio Website',
        description:
            'A personal portfolio website to showcase my projects and skills.',
        tech: ['React', 'TypeScript', 'Tailwind CSS'],
        link: 'https://myportfolio.com',
        github: '',
        image: undefined,
    },
    {
        title: 'Task Manager App',
        description:
            'A web application to manage daily tasks with user authentication and real-time updates.',
        tech: ['Next.js', 'Neon', 'Tailwind CSS', 'Prisma'],
        link: 'https://taskmanager.com',
        github: '',
        image: undefined,
    },
    {
        title: 'Chat App',
        description: 'A web application to chat with friends and family.',
        tech: ['Next.js', 'Neon', 'Tailwind CSS', 'Prisma'],
        link: 'https://chatapp.com',
        github: '',
        image: undefined,
    },
];
