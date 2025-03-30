import React from 'react'
import { IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-react';
import Link from 'next/link';

const SocialLinks = () => {
    return (
        <div className="flex items-center gap-4 text-zinc-400">
            <Link href="https://www.linkedin.com/in/prav25/" target='_blank'>
                <IconBrandLinkedin />
            </Link>
            <Link href="https://github.com/praneethravuri" target='_blank'>
                <IconBrandGithub />
            </Link>
        </div>
    )
}

export default SocialLinks