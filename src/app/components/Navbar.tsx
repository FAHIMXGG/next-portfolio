import React from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
            <MaxWidthWrapper>
                <div className="flex h-14 items-center justify-between border-b border-zinc-200">
                    <Link  href="/" className="flex z-40 font-semibold">Logo</Link>
                    <div className="h-full flex items-center space-x-4">
                        <Link href="/">Home</Link>
                        <Link href="/">About</Link>
                        <Link href="/">Skill</Link>
                        <Link href="/">Projects</Link>
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    );
};

export default Navbar;