import React from 'react';

import { resumeEntries } from '@/lib/index';

import ResumeEntry from '@/components/resume-entry';

const Resume = () => {
    return (
        <div className='text-offwhite'>
            <h1 className='text-2xl font-medium'>Resume</h1>
            <div className='flex flex-col gap-4 py-4 items-center justify-center'>
                {resumeEntries.map((entry) => (
                    <ResumeEntry key={entry.title} entry={entry} />
                ))}
            </div>
        </div>
    );
};

export default Resume;
