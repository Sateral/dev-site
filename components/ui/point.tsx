import * as React from 'react';

import { cn } from '@/lib/utils';

const Point = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
    return (
        <div
            ref={ref}
            data-slot='point'
            className={cn(
                'relative pl-5 text-sm leading-relaxed text-secondary',
                className,
            )}
            {...props}
        >
            <span
                aria-hidden='true'
                className='absolute left-1 top-[0.75em] size-1 -translate-y-1/2 rounded-full bg-secondary'
            />
            <span className='block'>{children}</span>
        </div>
    );
});

Point.displayName = 'Point';

export { Point };
