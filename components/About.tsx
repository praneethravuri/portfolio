import React from 'react'
import { IconPointFilled } from '@tabler/icons-react'
import HireMeBtn from './ui/hire-me-btn'
import CopyEmailBtn from './ui/copy-email-btn'

const About = () => {
    return (
        <div className="space-y-6">
            <div className="space-y-2">
                <div className="flex items-center gap-4 justify-between">
                    <div>
                        <h1 className="text-4xl font-bold tracking-tight text-zinc-200">Praneeth Ravuri</h1>
                    </div>
                    <div className='inline-flex items-center gap-1.5 bg-green-950/50 text-green-400 px-3 py-1 rounded-full text-sm font-medium'>
                        <IconPointFilled size={14} className="text-green-400" />Available for Work
                    </div>
                </div>
            </div>

            <div>
                <p className="text-zinc-400 leading-relaxed max-w-2xl">
                    I&apos;m a software engineer passionate about building exceptional digital experiences.
                    With expertise in modern web technologies, I create efficient and scalable solutions
                    that make a difference.
                </p>
            </div>

            <div className='flex items-center gap-4'>
                <HireMeBtn />
                <CopyEmailBtn />
            </div>
        </div>
    )
}

export default About