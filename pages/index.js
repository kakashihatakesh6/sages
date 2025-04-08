import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import Carousel2 from '@/components/Carousel';
import { FiExternalLink, FiCalendar, FiClock, FiAward, FiUsers, FiBookOpen, FiBriefcase } from "react-icons/fi";
import dynamic from 'next/dynamic';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Dynamically import framer-motion with SSR disabled
const motion = dynamic(() => import('framer-motion').then(mod => mod.motion), { ssr: false });

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCreative, EffectCards } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/effect-creative';
import 'swiper/css/effect-cards';
import { useEffect, useState } from 'react';
import axios from 'axios';
import mongoose from 'mongoose';
import HeroSlider from '@/components/HeroSlider';
// import Notice from '@/models/Notice';


export default function Home({ nLinks }) {


    const images = [
        "https://www.davschool.org/3/img/slider/best-schools-in-rajendra-nagar-patna.png",
        "https://www.davschool.org/3/img/gallery/2.jpg",
        "https://www.davschool.org/3/img/gallery/3.jpg",
        "https://www.davschool.org/3/img/gallery/4.jpg",
        // "https://img.etimg.com/thumb/msid-93051525,width-1070,height-580,imgsize-2243475,overlay-economictimes/photo.jpg",
        // "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/PD23/Launches/Updated_ingress1242x550_3.gif",
        // "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Books/BB/JULY/1242x550_Header-BB-Jul23.jpg",

    ];

    const [isVisible, setIsVisible] = useState(false);
    const [activeTab, setActiveTab] = useState('classX');
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        // Set current date only on client-side
        setCurrentDate(new Date().toLocaleDateString());

        // Initialize AOS
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 1000,
                once: false,
                easing: 'ease-in-out',
                delay: 100,
            });
        }

        // Add a scroll event listener to track the scroll position
        const handleScroll = () => {
            const scrollY = window.scrollY;
            // Show the button if the user scrolls down more than 300 pixels
            setIsVisible(scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scroll animation
        });
    };


    const [EventList, setEventList] = useState([]);
    useEffect(() => {
        const fetchEvents = async () => {
            const endpoint = `${process.env.NEXT_PUBLIC_HOST}/api/event/getevents`;
            try {
                const res = await axios.get(endpoint);
                const result = await res.data;
                if (result.success) {
                    setEventList(result.EventList);
                }
            } catch (error) {
                console.log({ error: "Some Error Occurred" });
            }

        }

        fetchEvents();
        const currdate = new Date().toLocaleDateString();
        console.log(currdate)
        // console.log("first ", currdate.toLocaleTimeString())
    }, [])



    const [NoticeList, setNoticeList] = useState([]);
    useEffect(() => {
        const fetchEvents = async () => {
            const endpoint = `${process.env.NEXT_PUBLIC_HOST}/api/notice/getnotice`;
            try {
                const res = await axios.get(endpoint);
                const result = await res.data;
                if (result.success) {
                    setNoticeList(result.NoticeList);
                }
            } catch (error) {
                console.log({ error: "Some Error Occurred" });
            }

        }

        fetchEvents();
    }, [])

    console.log("Notice =.>", NoticeList)


    const spanStyle = {
        padding: '20px',
        background: 'transparent',
        color: 'white'
    }

    const divStyle = {
        display: 'flex',
        alignItems: 'end',
        justifyContent: 'center',
        backgroundSize: 'cover',
    }

    const slideImages = [
        {
            url: '/slider/aatma.png',
            caption: 'Sages Bhopalpatanam'
        },
        {
            url: '/slider/aatma2.png',
            caption: 'Sages Bhopalpatanam'
        },
        {
            url: '/slider/aatma3.png',
            caption: 'Sages Bhopalpatanam'
        },
        {
            url: '/slider/aatma4.png',
            caption: 'Sages Bhopalpatanam'
        },
    ];



    return (
        <>
            <Head>
                <title>SAGES, Bhopalpatnam</title>
                <meta name="description" content="SAGES Bhopalpatnam - A premier educational institution committed to academic excellence and holistic development" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className='min-h-screen overflow-x-hidden bg-white'>

                {/* Hero Section */}
                <section data-aos="fade-in">
                    <HeroSlider />
                </section>

                {/* Welcome Message Section*/}
                <section className="welcome py-16 bg-gradient-to-b from-white to-blue-50" data-aos="fade-up">
                    <div className="container mx-auto px-4">
                        <div className="section-heading text-center mb-10">
                            <h2 className={styles.sectionTitle}>Welcome to Sages <br />Bhopalpatnam</h2>
                        </div>

                        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="md:flex">
                                <div className="md:shrink-0 hidden md:block">
                                    <img className="h-full w-60 object-cover" src="/slider/aatma.png" alt="School building" />
                                </div>
                                <div className="p-8">
                                    <div className="uppercase tracking-wide text-sm text-indigo-600 font-semibold mb-1">CBSE Affiliated School</div>
                                    <p className={`${styles.welcomeMessage} text-gray-700 leading-relaxed`}>
                                        <b>SAGES School</b><span>&nbsp;</span>
                                        <span className="text-red-700">Affiliated to CBSE upto senior secondary</span>
                                        ( A Unit of Nav Jagriti Educational Trust Co-Educational English Medium )
                                        <span className="text-blue-500"> <b>NOC granted </b></span>
                                        <span className="text-red-700">
                                            SWAMI ATMANAND GOVERNMENT ENGLISH SCHOOL, Bhopalpatnam : </span> <b>'SAGES'</b> founded in 2022 by CG Government has grown today as the largest Government English medium School in the State, managing over 754 educational institution in 33 Districts
                                    </p>
                                    <div className="mt-6">
                                        <Link href="/about" className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300">
                                            Read More
                                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Activity Section */}
                <section className="upcoming-activity py-16" data-aos="fade-up">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

                            {/* Left Column - Upcoming Activities */}
                            <div className="md:col-span-3 bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:shadow-xl">
                                <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 py-4">
                                    <h2 className="text-center text-white text-xl font-bold">Upcoming Activities</h2>
                                </div>

                                <div className="p-4 h-[450px] overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-300 scrollbar-track-transparent">
                                    <div className="space-y-4">
                                        {/* Activity Card 1 */}
                                        <div className="activity-card bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-md">
                                            <div className="flex items-start">
                                                <div className="flex-shrink-0 bg-indigo-100 rounded-lg p-3 mr-4">
                                                    <div className="text-center">
                                                        <span className="block text-indigo-800 text-xl font-bold">15</span>
                                                        <span className="block text-indigo-600 text-sm">March</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold text-indigo-800 mb-1">Interaction for Class NC & I</h3>
                                                    <p className="text-gray-600 text-sm mb-2">Along with child</p>
                                                    <div className="flex items-center text-xs text-gray-500">
                                                        <FiClock className="mr-1" />
                                                        5:00 AM to 9:00 PM
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Activity Card 2 */}
                                        <div className="activity-card bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-4 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-md">
                                            <div className="flex items-start">
                                                <div className="flex-shrink-0 bg-red-100 rounded-lg p-3 mr-4">
                                                    <div className="text-center">
                                                        <span className="block text-red-800 text-xl font-bold">20</span>
                                                        <span className="block text-red-600 text-sm">March</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold text-red-800 mb-1">Annual Sports Day</h3>
                                                    <p className="text-gray-600 text-sm mb-2">School playground</p>
                                                    <div className="flex items-center text-xs text-gray-500">
                                                        <FiClock className="mr-1" />
                                                        8:00 AM to 4:00 PM
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Activity Card 3 */}
                                        <div className="activity-card bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-4 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-md">
                                            <div className="flex items-start">
                                                <div className="flex-shrink-0 bg-green-100 rounded-lg p-3 mr-4">
                                                    <div className="text-center">
                                                        <span className="block text-green-800 text-xl font-bold">25</span>
                                                        <span className="block text-green-600 text-sm">March</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold text-green-800 mb-1">Science Exhibition</h3>
                                                    <p className="text-gray-600 text-sm mb-2">School auditorium</p>
                                                    <div className="flex items-center text-xs text-gray-500">
                                                        <FiClock className="mr-1" />
                                                        10:00 AM to 3:00 PM
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* View All Button */}
                                        <div className="text-center pt-2">
                                            <button className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium transition-colors duration-300">
                                                View All Activities
                                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Middle Column - Achievements/Creativity */}
                            <div className="md:col-span-6 bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:shadow-xl">
                                <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 py-4">
                                    <h2 className="text-center text-white text-xl font-bold">Achievements & Creativity</h2>
                                </div>

                                <div className="p-4">
                                    <div className="relative rounded-lg overflow-hidden">
                                        <Slide
                                            autoplay={true}
                                            infinite={true}
                                            duration={3000}
                                            transitionDuration={800}
                                            indicators={true}
                                            arrows={true}
                                            pauseOnHover={true}
                                        >
                                            {slideImages.map((slideImage, index) => (
                                                <div key={index} className="each-slide">
                                                    <div className="relative h-[300px] md:h-[400px] w-full">
                                                        <img
                                                            src={slideImage.url}
                                                            alt={slideImage.caption}
                                                            className="absolute inset-0 w-full h-full object-cover"
                                                        />
                                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                                                            <h3 className="text-white text-xl font-bold">{slideImage.caption}</h3>
                                                            <p className="text-gray-200 text-sm">Showcasing excellence in education</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </Slide>
                                    </div>

                                    {/* Achievement Highlights */}
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                                        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-4 rounded-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-md">
                                            <div className="text-indigo-600 mb-2">
                                                <FiAward className="w-8 h-8 mx-auto" />
                                            </div>
                                            <h4 className="font-semibold text-gray-800">Academic</h4>
                                            <p className="text-sm text-gray-600">Excellence in CBSE results</p>
                                        </div>

                                        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-md">
                                            <div className="text-blue-600 mb-2">
                                                <FiUsers className="w-8 h-8 mx-auto" />
                                            </div>
                                            <h4 className="font-semibold text-gray-800">Cultural</h4>
                                            <p className="text-sm text-gray-600">Award-winning performances</p>
                                        </div>

                                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-md">
                                            <div className="text-green-600 mb-2">
                                                <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <h4 className="font-semibold text-gray-800">Sports</h4>
                                            <p className="text-sm text-gray-600">District champions</p>
                                        </div>

                                        <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-4 rounded-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-md">
                                            <div className="text-yellow-600 mb-2">
                                                <FiBookOpen className="w-8 h-8 mx-auto" />
                                            </div>
                                            <h4 className="font-semibold text-gray-800">Innovation</h4>
                                            <p className="text-sm text-gray-600">Science fair winners</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column - What's New (Notices) */}
                            <div className="md:col-span-3 bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:shadow-xl">
                                <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 py-4">
                                    <h2 className="text-center text-white text-xl font-bold">What's New</h2>
                                </div>

                                <div className="p-4 h-[450px] overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-300 scrollbar-track-transparent">
                                    <div className="space-y-3">
                                        {NoticeList && NoticeList.length > 0 ? (
                                            NoticeList.map((item, index) => (
                                                <div key={index} className="notice-card bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-3 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-md">
                                                    <div className="flex items-start">
                                                        <div className="flex-shrink-0 mr-3">
                                                            <div className="bg-indigo-100 p-2 rounded-full">
                                                                <FiExternalLink size={20} className="text-indigo-600" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <Link href={item.noticeLink} className="font-medium text-indigo-700 hover:text-indigo-900 transition-colors duration-300">
                                                                {item.noticeTitle}
                                                            </Link>
                                                            <div className="flex items-center mt-1">
                                                                <span className="bg-red-100 text-red-800 text-xs px-2 py-0.5 rounded-full">New</span>
                                                                <span className="text-xs text-gray-500 ml-2">{currentDate}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            // Fallback notices if NoticeList is empty
                                            <>
                                                <div className="notice-card bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-3 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-md">
                                                    <div className="flex items-start">
                                                        <div className="flex-shrink-0 mr-3">
                                                            <div className="bg-indigo-100 p-2 rounded-full">
                                                                <FiExternalLink size={20} className="text-indigo-600" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <Link href="#" className="font-medium text-indigo-700 hover:text-indigo-900 transition-colors duration-300">
                                                                Admission Open for 2024-25 Academic Year
                                                            </Link>
                                                            <div className="flex items-center mt-1">
                                                                <span className="bg-red-100 text-red-800 text-xs px-2 py-0.5 rounded-full">New</span>
                                                                <span className="text-xs text-gray-500 ml-2">{currentDate}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="notice-card bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-3 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-md">
                                                    <div className="flex items-start">
                                                        <div className="flex-shrink-0 mr-3">
                                                            <div className="bg-indigo-100 p-2 rounded-full">
                                                                <FiExternalLink size={20} className="text-indigo-600" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <Link href="#" className="font-medium text-indigo-700 hover:text-indigo-900 transition-colors duration-300">
                                                                Annual Day Celebration on April 15th
                                                            </Link>
                                                            <div className="flex items-center mt-1">
                                                                <span className="bg-red-100 text-red-800 text-xs px-2 py-0.5 rounded-full">New</span>
                                                                <span className="text-xs text-gray-500 ml-2">{currentDate}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="notice-card bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-3 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-md">
                                                    <div className="flex items-start">
                                                        <div className="flex-shrink-0 mr-3">
                                                            <div className="bg-indigo-100 p-2 rounded-full">
                                                                <FiExternalLink size={20} className="text-indigo-600" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <Link href="#" className="font-medium text-indigo-700 hover:text-indigo-900 transition-colors duration-300">
                                                                Parent-Teacher Meeting Schedule
                                                            </Link>
                                                            <div className="flex items-center mt-1">
                                                                <span className="bg-red-100 text-red-800 text-xs px-2 py-0.5 rounded-full">New</span>
                                                                <span className="text-xs text-gray-500 ml-2">{currentDate}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )}

                                        {/* View All Button */}
                                        <div className="text-center pt-2">
                                            <button className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium transition-colors duration-300">
                                                View All Notices
                                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Academic Excellence Section - Redesigned */}
                <section className="academic-excellence py-16 bg-gradient-to-b from-blue-50 to-white" data-aos="fade-up">
                    <div className="container mx-auto px-4">
                        <div className="section-heading text-center mb-10">
                            <h2 className="relative inline-block text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-700 pb-2 mb-2">
                                Our Academic Stars
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 rounded-full"></div>
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-lg">
                                Celebrating the brilliance and dedication of our top-performing students who exemplify 
                                <span className="text-indigo-600 font-semibold"> excellence</span> and 
                                <span className="text-purple-600 font-semibold"> perseverance</span>.
                            </p>
                        </div>

                        <div className="relative">
                            {/* Decorative elements */}
                            <div className="absolute -top-10 -left-10 w-20 h-20 md:w-32 md:h-32 bg-yellow-200 rounded-full opacity-20 animate-pulse"
                                style={{ animationDuration: '3s' }}></div>
                            <div className="absolute -bottom-10 -right-10 w-20 h-20 md:w-32 md:h-32 bg-blue-200 rounded-full opacity-20 animate-pulse"
                                style={{ animationDuration: '4s' }}></div>

                            {/* Main content */}
                            <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-6 md:p-10 relative z-10">
                                <div className="text-center mb-8">
                                    <h3 className="text-2xl md:text-3xl font-bold text-indigo-800 mb-4">Our Star Performers</h3>
                                    <p className="text-gray-600 max-w-2xl mx-auto">Celebrating the academic brilliance and dedication of our top-performing students who exemplify the values of hard work and excellence.</p>
                                </div>

                                {/* Tabs for Class X and XII */}
                                <div className="flex justify-center mb-12">
                                    <div className="inline-flex rounded-lg bg-white shadow-md p-1.5 border border-indigo-100" role="group">
                                        <button
                                            type="button"
                                            className={`relative px-6 py-3 text-sm font-medium rounded-md focus:outline-none transition-all duration-300 ${
                                                activeTab === 'classX' 
                                                ? 'text-white shadow-md' 
                                                : 'text-indigo-700 hover:text-indigo-900 hover:bg-indigo-50'
                                            }`}
                                            onClick={() => setActiveTab('classX')}
                                        >
                                            {activeTab === 'classX' && (
                                                <span className="absolute inset-0 rounded-md bg-gradient-to-r from-indigo-600 to-blue-600 animate-gradient"></span>
                                            )}
                                            <span className="relative flex items-center">
                                                <svg className="w-5 h-5 mr-1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 4.75L19.25 9L12 13.25L4.75 9L12 4.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M4.75 14L12 18.25L19.25 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg>
                                                Class X Toppers
                                            </span>
                                        </button>
                                        <button
                                            type="button"
                                            className={`relative px-6 py-3 text-sm font-medium rounded-md focus:outline-none transition-all duration-300 ${
                                                activeTab === 'classXII' 
                                                ? 'text-white shadow-md' 
                                                : 'text-indigo-700 hover:text-indigo-900 hover:bg-indigo-50'
                                            }`}
                                            onClick={() => setActiveTab('classXII')}
                                        >
                                            {activeTab === 'classXII' && (
                                                <span className="absolute inset-0 rounded-md bg-gradient-to-r from-indigo-600 to-blue-600 animate-gradient"></span>
                                            )}
                                            <span className="relative flex items-center">
                                                <svg className="w-5 h-5 mr-1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 14L8.5 10.5M12 14L15.5 10.5M12 14V4.99998M5 10V16C5 17.1046 5.89543 18 7 18H17C18.1046 18 19 17.1046 19 16V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                                Class XII Toppers
                                            </span>
                                        </button>
                                    </div>
                                </div>

                                {/* Toppers Showcase */}
                                <div className="toppers-showcase">
                                    {/* Class X Toppers */}
                                    <div className={`class-x-toppers transition-all duration-500 ${activeTab === 'classX' ? 'block opacity-100' : 'hidden opacity-0'}`}>
                                        <Swiper
                                            modules={[EffectCards, Pagination, Autoplay]}
                                            effect="cards"
                                            grabCursor={true}
                                            pagination={{ clickable: true }}
                                            autoplay={{
                                                delay: 3000,
                                                disableOnInteraction: false,
                                            }}
                                            className="w-full max-w-xs mx-auto"
                                            lazyPreloadPrevNext={3}
                                        >
                                            <SwiperSlide>
                                                <div className="topper-card bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                                                    <div className="relative">
                                                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-indigo-900 opacity-30"></div>
                                                        <Image
                                                            src="/students/Ritesh-Singh.png"
                                                            width={300}
                                                            height={300}
                                                            alt="Ritesh Singh"
                                                            className="w-full h-64 object-cover transition-transform duration-700 hover:scale-110"
                                                            priority
                                                        />
                                                        <div className="absolute top-2 right-2 bg-yellow-400 text-indigo-900 font-bold rounded-full w-12 h-12 flex items-center justify-center shadow-md transform transition-transform duration-500 hover:scale-110 hover:rotate-12">
                                                            <span>1</span>
                                                        </div>
                                                    </div>
                                                    <div className="p-6 text-center">
                                                        <h4 className="text-xl font-bold text-indigo-800 mb-2">Ritesh Singh</h4>
                                                        <p className="text-gray-600 mb-3">Class X</p>
                                                        <div className="flex justify-center space-x-2">
                                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 transform transition-all duration-300 hover:scale-105 hover:bg-green-200">
                                                                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                                </svg>
                                                                98.8%
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="topper-card bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                                                    <div className="relative">
                                                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-indigo-900 opacity-30"></div>
                                                        <Image
                                                            src="/students/Kashish-Singh.png"
                                                            width={300}
                                                            height={300}
                                                            alt="Kashish Singh"
                                                            className="w-full h-64 object-cover transition-transform duration-700 hover:scale-110"
                                                            priority
                                                        />
                                                        <div className="absolute top-2 right-2 bg-yellow-400 text-indigo-900 font-bold rounded-full w-12 h-12 flex items-center justify-center shadow-md transform transition-transform duration-500 hover:scale-110 hover:rotate-12">
                                                            <span>2</span>
                                                        </div>
                                                    </div>
                                                    <div className="p-6 text-center">
                                                        <h4 className="text-xl font-bold text-indigo-800 mb-2">Kashish Singh</h4>
                                                        <p className="text-gray-600 mb-3">Class X</p>
                                                        <div className="flex justify-center space-x-2">
                                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 transform transition-all duration-300 hover:scale-105 hover:bg-green-200">
                                                                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                                </svg>
                                                                97.6%
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        </Swiper>
                                        <div className="flex justify-center mt-8">
                                            <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-md font-medium">
                                                Click and drag or swipe to see more toppers
                                            </span>
                                        </div>
                                    </div>

                                    {/* Class XII Toppers */}
                                    <div className={`class-xii-toppers transition-all duration-500 ${activeTab === 'classXII' ? 'block opacity-100' : 'hidden opacity-0'}`}>
                                        <div className="relative pb-16">
                                            {/* Decorative elements */}
                                            <div className="hidden lg:block absolute -top-16 -left-16 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                                            <div className="hidden lg:block absolute top-0 -right-16 w-32 h-32 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                                            <div className="hidden lg:block absolute -bottom-16 left-32 w-32 h-32 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                                            
                                            {/* Main content */}
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                                                {/* Science Stream Topper */}
                                                <div className="topper-card group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-t-4 border-purple-600">
                                                    {/* Top Ribbon */}
                                                    <div className="absolute top-5 -right-12 w-40 transform rotate-45 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center py-1 text-sm font-semibold z-10 shadow-md">Science</div>
                                                    
                                                    <div className="relative overflow-hidden">
                                                        {/* Background overlay with pattern */}
                                                        <div className="absolute inset-0 bg-gradient-to-b from-purple-50 to-indigo-100 opacity-50 z-0"></div>
                                                        <div className="absolute inset-0 bg-[url('/pattern-dots.png')] opacity-10 z-0"></div>
                                                        
                                                        {/* Profile image with effects */}
                                                        <div className="pt-8 pb-4 px-4 relative z-10">
                                                            <div className="w-36 h-36 mx-auto relative">
                                                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600 to-indigo-800 blur-md transform group-hover:scale-110 transition-all duration-500"></div>
                                                                <Image
                                                                    src="/students/ananya.png"
                                                                    width={300}
                                                                    height={300}
                                                                    alt="Ananya Sharma"
                                                                    className="w-full h-full rounded-full object-cover border-4 border-white relative z-10 transition-transform duration-700 group-hover:scale-110"
                                                                    priority
                                                                />
                                                                <div className="absolute top-0 right-0 bg-yellow-400 text-indigo-900 font-bold rounded-full w-12 h-12 flex items-center justify-center shadow-lg border-4 border-white transform group-hover:scale-110 transition-all duration-300 z-20">
                                                                    <span className="text-lg">1</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    {/* Content area */}
                                                    <div className="relative bg-white p-6 rounded-t-3xl -mt-6 text-center border-t border-purple-100 z-20">
                                                        <h3 className="text-2xl font-bold text-purple-900 mb-1">Ananya Sharma</h3>
                                                        <p className="text-purple-600 mb-3 font-medium">Science Stream Topper</p>
                                                        
                                                        {/* Percentage pill */}
                                                        <div className="flex justify-center mb-3">
                                                            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-purple-500 to-indigo-500 text-white transform transition-all duration-300 group-hover:scale-105 shadow-md">
                                                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                                </svg>
                                                                98.4%
                                                            </div>
                                                        </div>
                                                        
                                                        {/* Subject scores */}
                                                        <div className="grid grid-cols-2 gap-2 mt-4">
                                                            <div className="bg-purple-50 p-2 rounded-lg">
                                                                <p className="text-xs text-purple-600">Physics</p>
                                                                <p className="font-bold text-purple-900">99%</p>
                                                            </div>
                                                            <div className="bg-purple-50 p-2 rounded-lg">
                                                                <p className="text-xs text-purple-600">Chemistry</p>
                                                                <p className="font-bold text-purple-900">98%</p>
                                                            </div>
                                                            <div className="bg-purple-50 p-2 rounded-lg">
                                                                <p className="text-xs text-purple-600">Mathematics</p>
                                                                <p className="font-bold text-purple-900">97%</p>
                                                            </div>
                                                            <div className="bg-purple-50 p-2 rounded-lg">
                                                                <p className="text-xs text-purple-600">English</p>
                                                                <p className="font-bold text-purple-900">99%</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                {/* Commerce Stream Topper */}
                                                <div className="topper-card group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-t-4 border-blue-600">
                                                    {/* Top Ribbon */}
                                                    <div className="absolute top-5 -right-12 w-40 transform rotate-45 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-center py-1 text-sm font-semibold z-10 shadow-md">Commerce</div>
                                                    
                                                    <div className="relative overflow-hidden">
                                                        {/* Background overlay with pattern */}
                                                        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-cyan-100 opacity-50 z-0"></div>
                                                        <div className="absolute inset-0 bg-[url('/pattern-dots.png')] opacity-10 z-0"></div>
                                                        
                                                        {/* Profile image with effects */}
                                                        <div className="pt-8 pb-4 px-4 relative z-10">
                                                            <div className="w-36 h-36 mx-auto relative">
                                                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600 to-cyan-800 blur-md transform group-hover:scale-110 transition-all duration-500"></div>
                                                                <Image
                                                                    src="/students/Ritesh-Singh.png"
                                                                    width={300}
                                                                    height={300}
                                                                    alt="Ritesh Singh"
                                                                    className="w-full h-full rounded-full object-cover border-4 border-white relative z-10 transition-transform duration-700 group-hover:scale-110"
                                                                    priority
                                                                />
                                                                <div className="absolute top-0 right-0 bg-yellow-400 text-indigo-900 font-bold rounded-full w-12 h-12 flex items-center justify-center shadow-lg border-4 border-white transform group-hover:scale-110 transition-all duration-300 z-20">
                                                                    <span className="text-lg">1</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    {/* Content area */}
                                                    <div className="relative bg-white p-6 rounded-t-3xl -mt-6 text-center border-t border-blue-100 z-20">
                                                        <h3 className="text-2xl font-bold text-blue-900 mb-1">Ritesh Singh</h3>
                                                        <p className="text-blue-600 mb-3 font-medium">Commerce Stream Topper</p>
                                                        
                                                        {/* Percentage pill */}
                                                        <div className="flex justify-center mb-3">
                                                            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-blue-500 to-cyan-500 text-white transform transition-all duration-300 group-hover:scale-105 shadow-md">
                                                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                                </svg>
                                                                94.8%
                                                            </div>
                                                        </div>
                                                        
                                                        {/* Subject scores */}
                                                        <div className="grid grid-cols-2 gap-2 mt-4">
                                                            <div className="bg-blue-50 p-2 rounded-lg">
                                                                <p className="text-xs text-blue-600">Accountancy</p>
                                                                <p className="font-bold text-blue-900">96%</p>
                                                            </div>
                                                            <div className="bg-blue-50 p-2 rounded-lg">
                                                                <p className="text-xs text-blue-600">Business</p>
                                                                <p className="font-bold text-blue-900">95%</p>
                                                            </div>
                                                            <div className="bg-blue-50 p-2 rounded-lg">
                                                                <p className="text-xs text-blue-600">Economics</p>
                                                                <p className="font-bold text-blue-900">94%</p>
                                                            </div>
                                                            <div className="bg-blue-50 p-2 rounded-lg">
                                                                <p className="text-xs text-blue-600">English</p>
                                                                <p className="font-bold text-blue-900">94%</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                {/* Arts Stream Topper */}
                                                <div className="topper-card group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-t-4 border-pink-600">
                                                    {/* Top Ribbon */}
                                                    <div className="absolute top-5 -right-12 w-40 transform rotate-45 bg-gradient-to-r from-pink-600 to-rose-600 text-white text-center py-1 text-sm font-semibold z-10 shadow-md">Arts</div>
                                                    
                                                    <div className="relative overflow-hidden">
                                                        {/* Background overlay with pattern */}
                                                        <div className="absolute inset-0 bg-gradient-to-b from-pink-50 to-rose-100 opacity-50 z-0"></div>
                                                        <div className="absolute inset-0 bg-[url('/pattern-dots.png')] opacity-10 z-0"></div>
                                                        
                                                        {/* Profile image with effects */}
                                                        <div className="pt-8 pb-4 px-4 relative z-10">
                                                            <div className="w-36 h-36 mx-auto relative">
                                                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-600 to-rose-800 blur-md transform group-hover:scale-110 transition-all duration-500"></div>
                                                                <Image
                                                                    src="/students/Kashish-Singh.png"
                                                                    width={300}
                                                                    height={300}
                                                                    alt="Kashish Singh"
                                                                    className="w-full h-full rounded-full object-cover border-4 border-white relative z-10 transition-transform duration-700 group-hover:scale-110"
                                                                    priority
                                                                />
                                                                <div className="absolute top-0 right-0 bg-yellow-400 text-indigo-900 font-bold rounded-full w-12 h-12 flex items-center justify-center shadow-lg border-4 border-white transform group-hover:scale-110 transition-all duration-300 z-20">
                                                                    <span className="text-lg">1</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    {/* Content area */}
                                                    <div className="relative bg-white p-6 rounded-t-3xl -mt-6 text-center border-t border-pink-100 z-20">
                                                        <h3 className="text-2xl font-bold text-pink-900 mb-1">Kashish Singh</h3>
                                                        <p className="text-pink-600 mb-3 font-medium">Arts Stream Topper</p>
                                                        
                                                        {/* Percentage pill */}
                                                        <div className="flex justify-center mb-3">
                                                            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-pink-500 to-rose-500 text-white transform transition-all duration-300 group-hover:scale-105 shadow-md">
                                                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                                </svg>
                                                                95.2%
                                                            </div>
                                                        </div>
                                                        
                                                        {/* Subject scores */}
                                                        <div className="grid grid-cols-2 gap-2 mt-4">
                                                            <div className="bg-pink-50 p-2 rounded-lg">
                                                                <p className="text-xs text-pink-600">History</p>
                                                                <p className="font-bold text-pink-900">97%</p>
                                                            </div>
                                                            <div className="bg-pink-50 p-2 rounded-lg">
                                                                <p className="text-xs text-pink-600">Sociology</p>
                                                                <p className="font-bold text-pink-900">96%</p>
                                                            </div>
                                                            <div className="bg-pink-50 p-2 rounded-lg">
                                                                <p className="text-xs text-pink-600">Political Science</p>
                                                                <p className="font-bold text-pink-900">94%</p>
                                                            </div>
                                                            <div className="bg-pink-50 p-2 rounded-lg">
                                                                <p className="text-xs text-pink-600">English</p>
                                                                <p className="font-bold text-pink-900">94%</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            {/* View all toppers button */}
                                            <div className="flex justify-center mt-12">
                                                <a href="#" className="group inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 shadow-md">
                                                    View All Toppers
                                                    <svg className="w-5 h-5 ml-2 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Beyond Academics Section - Redesigned */}
                <section className="beyond-academics py-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden" data-aos="fade-up">
                    <div className="container mx-auto px-4 relative z-10">
                        {/* Decorative Elements */}
                        <div className="absolute -top-20 left-10 w-40 h-40 bg-yellow-200 rounded-full opacity-20 animate-pulse hidden md:block"
                            style={{ animationDuration: '3s' }}></div>
                        <div className="absolute -bottom-20 right-10 w-40 h-40 bg-indigo-200 rounded-full opacity-20 animate-pulse hidden md:block"
                            style={{ animationDuration: '4s' }}></div>
                        
                        <div className="section-heading text-center mb-12">
                            <h2 className={`${styles.sectionTitle} relative inline-block`}>
                                BEYOND ACADEMICS
                                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-yellow-400 rounded-full"></span>
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto mt-4">Exploring talents and building character through diverse extracurricular activities</p>
                        </div>

                        {/* Categories */}
                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            <button className="category-btn bg-indigo-600 text-white px-6 py-2 rounded-full font-medium hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 shadow-md">
                                All Activities
                            </button>
                            <button className="category-btn bg-white text-indigo-600 border border-indigo-200 px-6 py-2 rounded-full font-medium hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 shadow-md">
                                Sports
                            </button>
                            <button className="category-btn bg-white text-indigo-600 border border-indigo-200 px-6 py-2 rounded-full font-medium hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 shadow-md">
                                Arts
                            </button>
                            <button className="category-btn bg-white text-indigo-600 border border-indigo-200 px-6 py-2 rounded-full font-medium hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 shadow-md">
                                Clubs
                            </button>
                        </div>

                        {/* Events Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {EventList && EventList.length > 0 ? (
                                EventList.slice(0, 4).map((item, index) => (
                                    <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                                        {/* Event Image */}
                                        <div className="relative h-56 overflow-hidden">
                                            <img
                                                src={item.image || "/slider/aatma.png"}
                                                alt={item.name}
                                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                                onError={(e) => { e.target.src = "/slider/aatma.png"; e.target.onerror = null; }}
                                            />
                                            <div className="absolute top-4 right-4 bg-yellow-400 text-indigo-900 font-bold rounded-full w-12 h-12 flex flex-col items-center justify-center text-xs leading-tight shadow-md">
                                                <span>{item.eventDate ? item.eventDate.split('-')[0] : "15"}</span>
                                                <span>{item.eventDate ? item.eventDate.split('-')[1] : "Mar"}</span>
                                            </div>
                                        </div>

                                        {/* Event Content */}
                                        <div className="p-6">
                                            <div className="flex items-center mb-3">
                                                <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                                                    {item.category || "Sports"}
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{item.name}</h3>
                                            <p className="text-gray-600 mb-4 line-clamp-3">{item.description}</p>

                                            <div className="flex justify-between items-center">
                                                <div className="flex items-center">
                                                    <img
                                                        src="/slider/aatma.png"
                                                        alt="SAGES"
                                                        className="w-8 h-8 rounded-full mr-2 border-2 border-indigo-100"
                                                        onError={(e) => { e.target.src = "/slider/aatma.png"; e.target.onerror = null; }}
                                                    />
                                                    <span className="text-sm font-medium text-gray-900">SAGES</span>
                                                </div>
                                                <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center transition-colors duration-300">
                                                    Read More
                                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                // Fallback events if EventList is empty
                                <>
                                    {[1, 2, 3, 4].map((_, index) => (
                                        <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                                            {/* Event Image */}
                                            <div className="relative h-56 overflow-hidden">
                                                <img
                                                    src={`/slider/aatma${index === 0 ? '' : index}.png`}
                                                    alt={`Event ${index + 1}`}
                                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                                />
                                                <div className="absolute top-4 right-4 bg-yellow-400 text-indigo-900 font-bold rounded-full w-12 h-12 flex flex-col items-center justify-center text-xs leading-tight shadow-md">
                                                    <span>{15 + index}</span>
                                                    <span>Mar</span>
                                                </div>
                                            </div>

                                            {/* Event Content */}
                                            <div className="p-6">
                                                <div className="flex items-center mb-3">
                                                    <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                                                        {["Sports", "Arts", "Science", "Culture"][index]}
                                                    </span>
                                                </div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                                                    {[
                                                        "Annual Sports Day",
                                                        "Art Competition",
                                                        "Science Exhibition",
                                                        "Cultural Festival"
                                                    ][index]}
                                                </h3>
                                                <p className="text-gray-600 mb-4 line-clamp-3">
                                                    {[
                                                        "Join us for a day of exciting sports competitions and team events.",
                                                        "Showcasing student creativity through various artistic mediums.",
                                                        "Students display innovative science projects and experiments.",
                                                        "Celebrating the rich cultural diversity through performances."
                                                    ][index]}
                                                </p>

                                                <div className="flex justify-between items-center">
                                                    <div className="flex items-center">
                                                        <img
                                                            src="/logo.png"
                                                            alt="SAGES"
                                                            className="w-8 h-8 rounded-full mr-2 border-2 border-indigo-100"
                                                            onError={(e) => { e.target.src = "/slider/aatma.png"; e.target.onerror = null; }}
                                                        />
                                                        <span className="text-sm font-medium text-gray-900">SAGES</span>
                                                    </div>
                                                    <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center transition-colors duration-300">
                                                        Read More
                                                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </>
                            )}
                        </div>

                        {/* View All Button */}
                        <div className="text-center mt-12">
                            <Link href="/events" className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-full hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 shadow-lg">
                                View All Activities
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Our Gallery Section */}
                <section className="text-gray-600 body-font" data-aos="fade-up">
                    <div className="galleryy flex flex-col items-center my-10 mx-auto px-2">

                        <div className="section-heading ">
                            <h2 className={styles.sectionTitle}>Our Gallery</h2>
                        </div>

                        <div className="container py-12 mx-auto flex flex-wrap bg-slate-100">
                            <div className="flex flex-col justify-center items-center text-center w-full mb-20 flex-wrap bg-[#d6a026] text-white p-10 md:mx-7 rounded-lg">
                                <h1 className="sm:text-3xl text-2xl font-medium title-font lg:w-1/3 lg:mb-0 mb-4 text-white">"Sages Gallery: Capturing Moments, Inspiring Futures"</h1>
                                <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base text-[#e3e3e9]">Explore the Essence of Sages through a Visual Journey of Academic Excellence, Creativity, and Community Spirit</p>
                            </div>
                            <div className="flex flex-col md:flex-row md:flex-wrap md:-m-2 -m-1">

                                <div className="flex flex-wrap w-full md:w-1/2">

                                    <div className="md:p-2 p-1 w-1/2">
                                        <img alt="gallery" className="w-full object-cover h-full object-center block" src="/slider/aatma.png" />
                                    </div>
                                    <div className="md:p-2 p-1 w-1/2">
                                        <img alt="gallery" className="w-full object-cover h-full object-center block" src="/slider/aatma3.png" />
                                    </div>
                                    <div className="md:p-2 p-1 w-full">
                                        <img alt="gallery" className="w-full h-full object-cover object-center block" src="/slider/aatma4.png" />
                                    </div>

                                </div>

                                <div className="flex flex-wrap w-full md:w-1/2">

                                    <div className="md:p-2 p-1 w-full">
                                        <img alt="gallery" className="w-full h-full object-cover object-center block" src="/slider/aatma2.png" />
                                    </div>
                                    <div className="md:p-2 p-1 w-1/2">
                                        <img alt="gallery" className="w-full object-cover h-full object-center block" src="/slider/aatma.png" />
                                    </div>
                                    <div className="md:p-2 p-1 w-1/2">
                                        <img alt="gallery" className="w-full object-cover h-full object-center block" src="/slider/aatma2.png" />
                                    </div>

                                </div>

                            </div>
                            <div className="flex mt-4 w-full mx-auto justify-end ">

                                <Link href={'/gallery'} className="text-white border-orange-300 border-2 rounded-xl px-3 py-2 inline-flex items-center font-semibold bg-orange-500 hover:bg-orange-600 md:mb-2 lg:mb-0">Explore
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>

                            </div>
                        </div>


                    </div>


                </section>

                {/* Stats Section */}
                <section className="stats" data-aos="fade-right">
                    <div className="st flex flex-col items-center my-10 px-2">
                        <div className="section-heading">
                            <h2 className={styles.sectionTitle}>Our School</h2>
                        </div>

                        <div className="statsContainer flex flex-col space-y-3 md:space-y-1 md:flex-row justify-center space-x-2 md:space-x-36 my-10">

                            <div className='flex flex-col justify-center items-center '>
                                <Image style={{ width: "auto", height: "auto" }} src='/stats/students.png' width={91} height={94} alt='image' />
                                <span>121</span>
                                <p>Students</p>
                            </div>

                            <div className='flex flex-col justify-center items-center'>
                                <Image style={{ width: "auto", height: "auto" }} src='/stats/classroom.png' width={91} height={94} alt='image' />
                                <span>12</span>
                                <p>Classroom</p>
                            </div>

                            <div className='flex flex-col justify-center items-center'>
                                <Image style={{ width: "auto", height: "auto" }} src='/stats/teacher.png' width={91} height={94} alt='image' />
                                <span>40</span>
                                <p>Teachers</p>
                            </div>

                            <div className='flex flex-col justify-center items-center'>
                                <Image style={{ width: "auto", height: "auto" }} src='/stats/bus.png' width={91} height={94} alt='image' />
                                <span>3</span>
                                <p>School Bus</p>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Testinomial */}
                <section className="text-gray-600 body-font mb-4">
                    <div className="section-heading flex justify-center w-full mb-4">
                        <h2 className={styles.sectionTitle}>Testinomial</h2>
                    </div>
                    <div className="flex w-[100%] justify-center items-center px-auto ">

                        <div className="flex flex-col justify-center items-center mx-auto px-5 bg-slate-100 rounded-lg shadow-lg py-3">
                            <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="/nikhil.jpg" />
                            <p className="leading-relaxed w-[70vw] text-center py-2 md:px-20">It has been an absolute pleasure collaborating with Mr. Nikhil Dasar on the development of our school website. As a web developer, Mr. Nikhil Dasar has demonstrated an unparalleled level of expertise, professionalism, and dedication to delivering a digital platform that exceeds our expectations</p>
                            <span className="inline-block h-1 w-10 rounded bg-yellow-500 mt-6 mb-4"></span>
                            <h2 className="text-orange-900 font-bold title-font tracking-wider text-md flex text-center">Nikhil Dasar</h2>
                            <p className="text-orange-700 flex text-center">Software Engineer <br />Full Stack Web & Android Developer</p>
                        </div>



                    </div>
                </section>

                <button
                    className={`fixed flex justify-center z-30 items-center bottom-4 right-4 bg-[#ffc107] hover:bg-[#ffc107d9] text-white w-10 h-10 px-auto rounded-full ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
                        } transition-opacity duration-300 ease-in-out`}
                    onClick={scrollToTop}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512">
                        <path fill="#ffffff" d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" /></svg>
                </button>




            </main >
        </>
    )
}


// export async function getServerSideProps(context) {
//   let nLinks;
//   try {
//     if (!mongoose.connections[0].readyState) {
//       await mongoose.connect(process.env.MONGO_URI);
//     }

//     nLinks = await Notice.find();
//     // Pass data to the page via props
//     return { props: { nLinks: JSON.parse(JSON.stringify(nLinks)) } }

//   } catch (error) {
//     console.log({ error: "Server side props nLinks home" });
//     // Pass data to the page via props
//     return { props: {} }
//   }


// }


