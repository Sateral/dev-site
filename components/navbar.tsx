import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className='h-16 w-full flex flex-row justify-between items-center text-offwhite font-sans bg-transparent  border-b border-b-offwhite/10 px-6'>
            <div>[unqanny]</div>
            <div className='flex flex-row gap-6 *:hover:cursor-pointer *:hover:underline lowercase'>
                <Link href='#about'>about</Link>
                <Link href='#projects'>projects</Link>
                <Link href='#resume'>resume</Link>
                <Link href='#contact'>contact</Link>
            </div>
        </nav>
    );
};

export default Navbar;
