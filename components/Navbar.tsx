import React from 'react'
import HireMeBtn from './ui/hire-me-btn';
import SocialLinks from './ui/social-links';

const Navbar = () => {
    return (
        <div className='bg-neutral-900 rounded-lg shadow-xl ring-1 ring-zinc-300/10 overflow-hidden p-4'>
            <nav className="flex items-center justify-between">
                <div>
                    <SocialLinks />
                </div>
                <div>
                    <HireMeBtn />
                </div>
            </nav>
        </div>
    )
}

export default Navbar