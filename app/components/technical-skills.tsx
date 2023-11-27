import Image from "next/image";
import MainHeading from "./main-heading";

const skills = [
    {
        title: 'NodeJS',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
    },
    {
        title: 'Python',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
    },

    {
        title: 'PHP',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg'
    },
    {
        title: 'Linux',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg'
    },
    {
        title: 'Bash',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg'
    },
    {
        title: 'ReactJS',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    {
        title: 'Laravel',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg'
    },
    {
        title: 'NestJS',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg'
    },
    {
        title: 'NextJS',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg'
    },
    {
        title: 'ExpressJS',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
    },
    {
        title: 'GIT',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
    },
    {
        title: 'WordPress',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg'
    },
    {
        title: 'Docker',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
    },
    {
        title: 'AWS',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg'
    },
    {
        title: 'Java',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
    },

]

export default function TechnicalSkills() {
    return (
        <>
            <MainHeading>Technical Skills</MainHeading>

            <div className="flex flex-wrap justify-center items-center gap-12 mx-12 my-8 print:mx-8">

                {skills.map(skill => (
                    <div key={skill.title} className="relative">
                        <span
                            className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0  dark:bg-inherit hover:opacity-100 bg-opacity-90 duration-300 font-bold">
                            <h1 className="text-sm dark:bg-black bg-opacity-60 rounded-md px-1 py-0.5 cursor-default">{skill.title}</h1>
                        </span>
                        <span className="relative" >
                            <div className="flex flex-col flex-wrap content-center">
                                <Image width={48} height={48} src={skill.iconUrl}
                                    className="mx-auto" alt={skill.title + 'icon'} />
                                <p className="hidden print:block print:text-center print:text-4 pt-1 text-xs">{skill.title}</p>
                            </div>
                        </span>
                    </div>
                ))}
            </div>
        </>
    )
}