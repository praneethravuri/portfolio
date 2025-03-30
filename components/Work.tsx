import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent
} from './ui/accordion'
import { Badge } from './ui/badge'

const Work = () => {
    const work = [
        {
            id: 1,
            companyName: 'Prodapt North America',
            location: 'Richardson, TX, USA',
            position: 'Software Engineer',
            year: '2024-2025',
            tagline:
                'Developing and maintaining software applications for clients in the financial industry.',
            description: [
                'Developed and maintained software applications for clients in the financial industry.',
                'Worked in a team of 10+ developers to deliver high-quality software solutions.',
                'Implemented new features and conducted code reviews for other developers.',
                'Participated in daily stand-ups and sprint planning meetings.'
            ],
            tags: ['Golang/Go', 'React/Next.js', 'PostgreSQL', 'Docker', 'Kubernetes', 'AWS']
        }
    ]

    return (
        <section className="mx-auto max-w-2xl px-4 text-white">
            {/* Heading & Intro */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">My Works</h1>
                <p className="text-zinc-400">
                    Discover my portfolio, where purposeful interfaces meet captivating design. My work
                    strives to enhance experiences and inspire.
                </p>
            </div>

            {/* Accordion Container */}
            <Accordion type="single" collapsible>
                {work.map((item) => (
                    <AccordionItem
                        key={item.id}
                        value={item.id.toString()}
                        className="mb-2 rounded-lg bg-zinc-800"
                    >
                        {/* Accordion Trigger */}
                        <AccordionTrigger className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left hover:bg-zinc-700">
                            <div className="flex items-center space-x-4">
                                {/* Circle Icon (first letter) */}
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-600 text-sm font-bold uppercase">
                                    {item.companyName.charAt(0)}
                                </div>
                                {/* Company + Position */}
                                <div>
                                    <p className="text-base font-semibold">{item.companyName}</p>
                                    <p className="text-xs text-zinc-400">
                                        {item.position} &middot; {item.year}
                                    </p>
                                </div>
                            </div>
                        </AccordionTrigger>

                        {/* Accordion Content */}
                        <AccordionContent className="rounded-b-lg bg-zinc-900 px-4 py-3 text-sm">
                            <p className="mb-2 text-zinc-300">{item.tagline}</p>

                            <ul className="mb-3 list-disc list-inside space-y-1 text-zinc-400">
                                {item.description.map((desc, index) => (
                                    <li key={index}>{desc}</li>
                                ))}
                            </ul>

                            {/* Tag Pills */}
                            <div className="flex flex-wrap gap-2">
                                {item.tags.map((tag, index) => (
                                    //   <span
                                    //     key={index}
                                    //     className="rounded-full bg-purple-600/20 px-2 py-1 text-xs text-purple-400"
                                    //   >
                                    //     {tag}
                                    //   </span>
                                    <div key={index}>
                                        <Badge variant="purple" >{tag}</Badge>
                                    </div>

                                ))}
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    )
}

export default Work
