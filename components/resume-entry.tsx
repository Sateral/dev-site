import React from 'react';

import { Point } from '@/components/ui/point';

import type { ResumeEntry } from '@/types/resume-entries';

interface ResumeEntryProps {
    entry: ResumeEntry;
}

const ResumeEntry = ({ entry }: ResumeEntryProps) => {
    return (
        <div className='border border-offwhite/10 rounded-md p-4 hover:scale-[1.01] transition-transform'>
            <div className='flex gap-2 items-center justify-between'>
                <h2 className='text-xl font-medium'>{entry.title}</h2>
                <p className='text-sm'>
                    {entry.startDate} - {entry.endDate}
                </p>
            </div>
            <div className='flex gap-2 items-center justify-between text-xs pb-2 italic'>
                <p>{entry.company}</p>
                <p>{entry.location}</p>
            </div>
            <div className='flex flex-col gap-2'>
                {entry.description.map((point, index) => (
                    <Point className='text-offwhite text-xs' key={index}>
                        {point}
                    </Point>
                ))}
            </div>
        </div>
    );
};

export default ResumeEntry;
