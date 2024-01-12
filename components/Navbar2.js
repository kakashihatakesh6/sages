import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";


const Navbar2 = ({ handleSignOut }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [userMenu, setUserMenu] = useState(false);


    const [isAcademicOpen, setAcademicOpen] = useState(false);
    const [isAdministrationOpen, setAdministrationOpen] = useState(false);
    const [isActivitiesOpen, setActivitiesOpen] = useState(false);
    const [isAdmissionOpen, setAdmissionOpen] = useState(false);
    const [isHelpDeskOpen, setHeloDeskOpen] = useState(false);
    const [isabout, setisabout] = useState(false)
    const [user, setUser] = useState()

    const router = useRouter();
    const [navbarDecrease, setnavbarDecrease] = useState(false)

    useEffect(() => {

        const navbarUp = () => {
            const scrollY = window.scrollY;
            if (scrollY > 300) {
                setnavbarDecrease(true);
            }
            else if (scrollY === 0) {
                setnavbarDecrease(false)
            }
        }

        window.addEventListener('scroll', navbarUp);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', navbarUp);
        }

    }, [])



    useEffect(() => {

        const token = localStorage.getItem('token');

        if (token) {

            const fetchUser = async () => {
                const endpoint = `${process.env.NEXT_PUBLIC_HOST}/api/getuser`;
                const data = { token: token }
                try {
                    let axiosConfig = {
                        headers: {
                            'Content-Type': 'application/json;charset=UTF-8',
                            "Access-Control-Allow-Origin": "*",
                        }
                    };
                    const res = await axios.post(endpoint, { data: data }, axiosConfig);
                    const result = await res.data;
                    console.log(user)
                    if (result.success) {
                        setUser(result.user);
                    }
                } catch (error) {
                    console.log({ error: "Some Error Occurred" });
                }

            }

            fetchUser();
        }



    }, [router])

    return (
        <>
            <nav className="navbar items-center flex flex-col border-gray-200 bg-slate-100 shadow-lg rounded-b-2xl md:fixed w-[100%] z-40 top-0">

                <div className="w-[100%] flex flex-col md:flex-row space-x-5 items-center justify-between">

                    {/*======= logo =============*/}
                    <Link href={"/"}
                        className="flex items-center pl-10 py-2 rtl:space-x-reverse"
                    >
                        <img src='/logo/logo-header.jpg' style={{ width: "290px", height: "50px" }} alt="image" />
                    </Link>

                    <div className="flex items-center justify-between md:px-8 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">


                        <div className="flex flex-row w-screen justify-between items-center md:w-fit">

                            {/*========== HAMBURGER ICON =============== */}
                            <button
                                data-collapse-toggle="navbar-user"
                                type="button"
                                onClick={() => { setSidebarOpen(!isSidebarOpen) }}
                                className="inline-flex items-center p-2 my-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                aria-controls="navbar-user"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 17 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M1 1h15M1 7h15M1 13h15"
                                    />
                                </svg>
                            </button>


                            {/*=========== Login Button ============*/}
                            {user === undefined && <div>
                                <Link href={'/author/login'} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 
                            font-medium rounded-lg text-sm mx-6 md:mx-0 px-4 py-2 md:px-5 md:py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700
                             focus:outline-none dark:focus:ring-blue-800">Login</Link>
                            </div>
                            }

                            {/*=========== ADMIN DIV =============*/}

                            {user && <div
                                className=""
                                onMouseEnter={() => { setUserMenu(true) }}
                                onMouseLeave={() => { setUserMenu(false) }}
                            >

                                {/*========= User Admin Button ============= */}
                                <Link href={'/'}
                                    type="button"
                                    className="flex p-2 text-sm bg-white rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                                    id="user-menu-button"
                                    aria-expanded="false"
                                    data-dropdown-toggle="user-dropdown"
                                    data-dropdown-placement="bottom"
                                >
                                    <span className="sr-only">Open user menu</span>
                                    <img
                                        className="w-8 h-8 rounded-full"
                                        src={user.image}
                                        alt="user photo"
                                    />
                                </Link>

                                {/* <!-- Dropdown Admin menu --> */}
                                {userMenu &&
                                    <div
                                        className="z-50 my-4 fixed top-[6rem] right-0 md:right-4 md:top-10 py-3 px-6 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                                        id="user-dropdown"
                                    >
                                        <div className="px-4 py-3">
                                            <span className="block text-sm text-gray-900 dark:text-white">
                                                {user?.name}
                                            </span>
                                            <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                                                {user?.email}
                                            </span>
                                        </div>

                                        <ul className="py-2" aria-labelledby="user-menu-button">
                                            <li>
                                                <Link
                                                    href="/author"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                >
                                                    Dashboard
                                                </Link>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                >
                                                    Settings
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                >
                                                    Earnings
                                                </a>
                                            </li>
                                            <li>
                                                <button
                                                    onClick={handleSignOut}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                >
                                                    Sign out
                                                </button>
                                            </li>
                                        </ul>

                                    </div>
                                }
                            </div>
                            }
                        </div>

                    </div>

                    {/* Nav Menu Items ${isSidebarOpen ? '' : 'hidden'}  */}
                    <div
                        className={`items-center md:pr-28 justify-between w-full md:flex md:w-auto md:order-1
                         transition-transform z-50 md:relative md:top-0 md:left-0 md:transform-none
                         fixed top-24 -left-6 ${isSidebarOpen ? 'translate-none' : '-translate-x-full'} `}
                        id="navbar-user"
                    >
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

                            <li>
                                <Link
                                    href={"/"}
                                    className={`block py-2 px-3 rounded md:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 
                                    md:p-0 md:dark:text-blue-500 ${router.pathname === '/' ? 'md:text-blue-500 bg-blue-700 text-white' : 'md:text-gray-900 text-gray-900'}`}
                                    aria-current="page"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"/about"}
                                    className={`block py-2 px-3 rounded 
                                    md:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 
                                    md:p-0 md:dark:text-blue-500
                                    hover:bg-blue-400 hover:text-white md:hover:bg-slate-100
                                    ${router.pathname === '/about' ? 'md:text-blue-500 bg-blue-700 text-white' : 'md:text-gray-900 text-gray-900'}`}
                                    aria-current="page"
                                >
                                    About Us
                                </Link>
                            </li>

                            <li onMouseEnter={() => { setAcademicOpen(true) }} onMouseLeave={() => setAcademicOpen(false)}>

                                <button href={"#"}
                                    id="dropdownNavbarLink"
                                    data-dropdown-toggle="dropdownNavbar"
                                    className={`flex items-center justify-between w-full py-2 px-3 hover:bg-gray-100 
                                    md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto 
                                     md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 
                                     md:dark:hover:bg-transparent ${router.pathname === '/affiliation' ? 'md:text-blue-500 bg-blue-700 text-white' : 'md:text-gray-900 text-gray-900'}`}
                                >
                                    Academic{" "}
                                </button>

                                {/* <!-- Dropdown menu Administration --> */}

                                {isAcademicOpen && <div
                                    id="dropdownNavbar"
                                    className="z-10 font-normal fixed py-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                                >
                                    <ul
                                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                        aria-labelledby="dropdownLargeButton"
                                    >

                                        <li>
                                            <Link href={"/academic/affiliation"}
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                Affiliation
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={"/academic/feestructure"}
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                Fee Structure
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={"/academic/gallery"}
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                Gallery
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={"/academic/schooluniform"}
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                School Uniform
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={"/academic/syllabus"}
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                Syllabus
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={"/academic/onlinelecture"}
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                Online Lectures
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={"/academic/results"}
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                Result
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={"/academic/ebooks"}
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                E-Books
                                            </Link>
                                        </li>


                                    </ul>

                                </div>
                                }

                            </li>

                            <li onMouseEnter={() => { setAdministrationOpen(true) }} onMouseLeave={() => setAdministrationOpen(false)}>

                                <button
                                    id="dropdownNavbarLink"
                                    data-dropdown-toggle="dropdownNavbar"
                                    className="flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 
                                    md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white
                                     md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 
                                     md:dark:hover:bg-transparent "
                                >
                                    Admininstration{" "}

                                    {/* <svg
                                        className="w-2.5 h-2.5 ms-2.5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 10 6"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m1 1 4 4 4-4"
                                        />
                                    </svg> */}

                                </button>

                                {/* <!-- Dropdown menu Administration --> */}

                                {isAdministrationOpen && <div
                                    id="dropdownNavbar"
                                    className="z-10 font-normal fixed py-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                                >
                                    <ul
                                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                        aria-labelledby="dropdownLargeButton"
                                    >

                                        <li aria-labelledby="dropdownNavbarLink" >
                                            <Link href={"/administration/faculty"}
                                                id="doubleDropdownButton"
                                                data-dropdown-toggle="doubleDropdown"
                                                data-dropdown-placement="right-start"
                                                type="button"
                                                className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                Faculty
                                                <svg
                                                    className="w-2.5 h-2.5 ms-2.5"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 10 6"
                                                >
                                                    <path
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="m1 1 4 4 4-4"
                                                    />
                                                </svg>
                                            </Link>

                                            <div
                                                id="doubleDropdown"
                                                className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                                            >
                                                <ul
                                                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                                    aria-labelledby="doubleDropdownButton"
                                                >
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                        >
                                                            Overview
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                        >
                                                            My downloads
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                        >
                                                            Billing
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                        >
                                                            Rewards
                                                        </a>
                                                    </li>
                                                </ul>

                                            </div>

                                        </li>

                                        <li>
                                            <Link
                                                href="/administration/schoolmanagement"
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                School Management
                                            </Link>
                                        </li>

                                        <li>
                                            <a
                                                href="/administration/studentcouncil"
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                Student's Council
                                            </a>
                                        </li>
                                    </ul>

                                </div>
                                }

                            </li>

                            <li onMouseEnter={() => { setActivitiesOpen(true) }} onMouseLeave={() => setActivitiesOpen(false)}>

                                <button
                                    id="dropdownNavbarLink"
                                    data-dropdown-toggle="dropdownNavbar"
                                    className="flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 
                                    md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white
                                     md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 
                                     md:dark:hover:bg-transparent "
                                >
                                    Activities{" "}


                                </button>

                                {/* <!-- Dropdown menu Administration --> */}

                                {isActivitiesOpen && <div
                                    id="dropdownNavbar"
                                    className="z-10 font-normal fixed py-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                                >
                                    <ul
                                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                        aria-labelledby="dropdownLargeButton"
                                    >

                                        <li>
                                            <Link href={"/activities/cocircullaractivity"}
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                Co-Circullar Activities
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={"/activities/dailyactivity"}
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                Daily Activities
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={"/activities/summeractivity"}
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                Summer Activities
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={"/activities/annualactivity"}
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                Annaul Activities
                                            </Link>
                                        </li>

                                    </ul>

                                </div>
                                }

                            </li>

                            <li onMouseEnter={() => { setAdmissionOpen(true) }} onMouseLeave={() => setAdmissionOpen(false)}>

                                <button
                                    id="dropdownNavbarLink"
                                    data-dropdown-toggle="dropdownNavbar"
                                    className="flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 
                                    md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white
                                     md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 
                                     md:dark:hover:bg-transparent "
                                >
                                    Admission{" "}


                                </button>

                                {/* <!-- Dropdown menu Administration --> */}

                                {isAdmissionOpen && <div
                                    id="dropdownNavbar"
                                    className="z-10 font-normal fixed py-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                                >
                                    <ul
                                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                        aria-labelledby="dropdownLargeButton"
                                    >

                                        <li>
                                            <Link href={"/admission/admissiononline"}
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                Apply Online
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={"/admission/admissionnotice"}
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                Admission Notice
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={"/admission/admissionprocedure"}
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                Admission Procedure
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={"/admission/applicationstatus"}
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                Application Status
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={"/academic/feestructure"}
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                Fee Structure
                                            </Link>
                                        </li>


                                    </ul>

                                </div>
                                }

                            </li>
                            <li onMouseEnter={() => { setHeloDeskOpen(true) }} onMouseLeave={() => setHeloDeskOpen(false)}>

                                <button
                                    id="dropdownNavbarLink"
                                    data-dropdown-toggle="dropdownNavbar"
                                    className="flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 
                                    md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white
                                     md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 
                                     md:dark:hover:bg-transparent "
                                >
                                    Help Desk{" "}


                                </button>

                                {/* <!-- Dropdown menu Administration --> */}

                                {isHelpDeskOpen && <div
                                    id="dropdownNavbar"
                                    className="z-10 font-normal fixed py-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                                >
                                    <ul
                                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                        aria-labelledby="dropdownLargeButton"
                                    >

                                        <li>
                                            <Link href={"#"}
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                P.T.M
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={"/contact"}
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                Contact Us
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={"#"}
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                Feedback
                                            </Link>
                                        </li>


                                    </ul>

                                </div>
                                }

                            </li>


                        </ul>
                    </div>

                </div>

                {/*========== BREADSCRUMB ============= */}
                <div className={`flex flex-row w-full ${navbarDecrease ? 'hidden' : ''} bg-slate-400 flex-center items-start`}>
                    <h3 className="flex mx-auto">
                        {router.pathname !== '/' ? (
                            // `Home / ${router.pathname.split('/')[1]}`
                            `Home / ${router.pathname.split('/')[1]} / ${router.pathname.split('/')[2]}`
                        ) : (
                            `Home / Sages Bhopalpatnam`
                        )}
                    </h3>
                </div>

            </nav>
        </>
    );
};

export default Navbar2;


