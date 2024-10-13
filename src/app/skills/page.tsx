'use client'
import skillData from '../../data/skillList.json'
import { BackgroundGradient } from '../../components/ui/background-gradient'

interface Skill {
    id: number,
    title: string,
    slug: string,
    description: string,
    proficiency: string,
    experience: string,
    isFeatured: boolean,
}

function Skills() {
    const featuredSkills = skillData.skills.filter((skill: Skill) => skill.isFeatured)

    return (
        <div className='py-12 bg-black h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto md:py-0'>
            <div>
                <div className="text-center mt-28">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">My Skills</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">What I Excel In</p>
                </div>
            </div>
            <div className='mt-10 mx-8'>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {featuredSkills.map((skill: Skill) => (
                        <div key={skill.id} className="flex justify-center">
                            <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                    <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{skill.title}</p>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{skill.description}</p>
                                    <p className="text-sm text-teal-600">Proficiency: {skill.proficiency}</p>
                                    <p className="text-sm text-teal-600">Experience: {skill.experience}</p>
                                </div>
                            </BackgroundGradient>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills
