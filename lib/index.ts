import type { Project } from '@/types/projects';
import type { ResumeEntry } from '@/types/resume-entries';

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

export const resumeEntries: ResumeEntry[] = [
    {
        title: 'Software Developer - Solutions Development',
        company: 'Independent Electricity System Operator',
        location: 'Mississauga, ON',
        startDate: 'January 2025',
        endDate: 'April 2025',
        description: [
            'Integrated and standardized Anaconda package management across company-wide Python environments, reducing non-compliant packages by over 80% and ensuring adherence to cybersecurity and CVE standards.',
            'Developed an auto-refresh web dashboard using HTML, CSS, and JavaScript with Tableau’s Embed API, providing real-time data updates across several dashboards in the IESO control room.',
            'Designed a database schema and implemented ETL scripts to migrate an IT taxonomy catalog from Excel to a relational database using Python, PL/SQL, and Toad, ingesting over 10,000 records with 100% data integrity.',
        ],
        skills: [
            'Python',
            'PL/SQL',
            'Toad',
            'Tableau',
            'HTML',
            'CSS',
            'JavaScript',
        ],
    },
    {
        title: 'Data & Automation Developer',
        company: 'AutoTrader',
        location: 'Toronto, ON',
        startDate: 'May 2024',
        endDate: 'September 2024',
        description: [
            'Developed automation scripts that fetched data from Redash to generate performance reports for +1000 dealerships across Canada.',
            'Worked with cross-functional teams to develop customized performance reports for individual dealerships, enabling targeted insights and strategies.',
            'Optimized automation scripts to extract OEM incentive and residual data from PDFs and send it to an API, reducing data generation time by up to 50%.',
        ],
        skills: ['Python', 'Redash', 'PDF', 'API'],
    },
    {
        title: 'Full-Stack Developer',
        company: 'Aurore de la Vie',
        location: 'Georgetown, ON',
        startDate: 'June 2023',
        endDate: 'August 2023',
        description: [
            'Designed and developed a full-stack web application using Figma, NextJS, TypeScript, HTML, Tailwind CSS, ensuring a responsive UI/UX.',
            'Leveraged Prisma and Neon to develop an admin dashboard integrated with a functional REST API, enabling real-time updates to modify the website’s listings.',
            'Improved website performance and leveraged SEO optimization techniques to improve website visibility on search engines, resulting in an increase in traffic by over 300%.',
        ],
        skills: [
            'NextJS',
            'TypeScript',
            'HTML',
            'Tailwind CSS',
            'Prisma',
            'Neon',
            'REST API',
        ],
    },
];
