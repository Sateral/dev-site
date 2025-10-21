import About from '@/app/_sections/about';
import Projects from '@/app/_sections/projects';
import Resume from '@/app/_sections/resume';

export default function Home() {
    return (
        <div className='font-sans min-h-screen'>
            <main className='flex flex-col p-6 gap-6'>
                <section id='about'>
                    <About />
                </section>
                <section id='projects'>
                    <Projects />
                </section>
                <section id='resume'>
                    <Resume />
                </section>
            </main>
        </div>
    );
}
