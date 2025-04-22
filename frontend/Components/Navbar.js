import React from 'react';
import Link from 'next/link';

export default  function Navbar(){
    return (
        <nav className='md:block bg-primaryDark text-white sticky top-0 z-50 bg-green-700'>
            <div className="bg-primaryDark absolute md:static py-1.5 px-6 left-0 w-full md:w-auto mx-auto">
                {/* <ul className=" md:flex md:justify-around">
                    <span>Hello there!</span>
                    <div>
                        <ul className='space-x-10 text-lg'>
                            <Link href="/About" className='text-white'>About</Link>
                            <Link href="/Contact" className='text-white'>Contact</Link>
                        </ul>
                    </div>
                </ul> */}

                
            </div>
        </nav>
    )
}