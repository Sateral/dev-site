import About from '@/app/_sections/about';
import Projects from '@/app/_sections/projects';

export default function Home() {
    return (
        <div className='font-sans min-h-screen'>
            <main className='flex flex-col p-6 gap-6'>
                <About />
                <Projects />
            </main>
        </div>
    );
}
