'use client'
import projectData from '../../data/projectData.json'
import { BackgroundGradient } from '../../components/ui/background-gradient'

interface Project {
    id: number,
    title: string,
    slug: string,
    description: string,
    techStack: string[],
    githubLink: string,
    liveDemo: string,
    isFeatured: boolean,
}

function Projects() {
    const featuredProjects = projectData.projects.filter((project: Project) => project.isFeatured)

    return (
        <div className='py-12 bg-black h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto md:py-0'>
            <div>
                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">My Projects</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">What I've Built</p>
                </div>
            </div>
            <div className='mt-10 mx-8'>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {featuredProjects.map((project: Project) => (
                        <div key={project.id} className="flex justify-center">
                            <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                    <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{project.title}</p>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{project.description}</p>
                                    <p className="text-sm text-teal-600">Tech Stack: {project.techStack.join(', ')}</p>
                                    <div className="mt-4">
                                        <a href={project.githubLink} target="_blank" className="text-blue-500 hover:underline mr-4">GitHub</a>
                                        <a href={project.liveDemo} target="_blank" className="text-blue-500 hover:underline">Live Demo</a>
                                    </div>
                                </div>
                            </BackgroundGradient>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects
