import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'    

const Navbar = () => {
    const [isStudent, setisStudent] = useState(false);
    const [isAbout, setisAbout] = useState(false);
    const [isAdministration, setIsAdministration] = useState(false);

    return (
        <div>

            <div className="navbar flex flex-col md:flex-row justify-around items-center py-3 z-40 top-0 bg-slate-100 shadow-lg rounded-3xl relative md:fixed w-[100%] ">
                <div className="logo">
                    <Image src='/logo/logo-header.jpg' width={290} height={60} />
                </div>
                <div className="nevmenu px-2 py-2">
                    <nav>
                        <ul className='flex md:flex-row flex-wrap justify-center space-x-2 md:space-x-6 font-semibold text-lg transition-all ease-in-out'>
                            <li className='hover:text-blue-400'><Link href={''}>Home</Link></li>
                            <li onMouseEnter={() => { setisAbout(true) }} onMouseLeave={() => setisAbout(false)}>
                                <Link className='hover:text-blue-400'
                                    href={''}>About Us</Link>

                                {isAbout && <ul className='absolute left-[-2] top-12 space-y-2 text-md bg-slate-100 shadow-sm px-1 rounded-lg py-6 w-[13rem]' >
                                    <li className='p-2 hover:bg-blue-400 hover:text-white'><Link href={''}>History of Sages</Link></li>
                                    <li className='p-2 hover:bg-blue-400 hover:text-white'><Link href={''}>Management Speak</Link></li>
                                    <li className='p-2 hover:bg-blue-400 hover:text-white'><Link href={''}>Campus Tour</Link></li>

                                </ul>}

                            </li>
                            <li onMouseEnter={() => { setisStudent(true) }} onMouseLeave={() => { setisStudent(false) }}>
                                <Link className='hover:text-blue-400'
                                    href={''}>Student</Link>

                                {isStudent && <ul className='absolute left-[-2] top-12 space-y-2 text-md bg-slate-100 shadow-sm px-1 rounded-lg py-6 w-[13rem]'>
                                    <li className='p-2 hover:bg-blue-400 hover:text-white'><Link href={''}>Student Login</Link></li>
                                    <li className='p-2 hover:bg-blue-400 hover:text-white'><Link href={''}>Facilites</Link></li>
                                    <li className='p-2 hover:bg-blue-400 hover:text-white'><Link href={''}>Bus Routes</Link></li>
                                    <li className='p-2 hover:bg-blue-400 hover:text-white'><Link href={''}>Activity Clubs</Link></li>
                                    <li className='p-2 hover:bg-blue-400 hover:text-white'><Link href={''}>Admission</Link></li>
                                </ul>}
                            </li>
                            <li className='hover:text-blue-400'>
                                <Link href={''}>Admininstration</Link>

                                <ul>
                                    <li>

                                    </li>
                                </ul>
                            </li>
                            <li className='hover:text-blue-400'><Link href={''}>Scholastic</Link></li>
                            <li className='hover:text-blue-400'><Link href={''}>Co-Scholastic</Link></li>
                            <li className='hover:text-blue-400'><Link href={''}>Admission</Link></li>
                            <li className='hover:text-blue-400'><Link href={''}>Downloads</Link></li>
                            <li className='hover:text-blue-400'><Link href={''}>Contact</Link></li>
                        </ul>
                    </nav>
                </div>

                <div>
                    <Link href="#" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Login</Link>
                    <Link href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign up</Link>
                </div>



            </div>



        </div>
    )
}

export default Navbar