import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import SimpleImageSlider from "react-simple-image-slider";
import styles from '@/styles/Home.module.css'
import Carousel2 from '@/components/Carousel';
import { FiExternalLink } from "react-icons/fi";


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
import Notice from '@/models/Notice';


export default function Home({ nLinks }) {
  const [NoticeList, setNoticeList] = useState();

  useEffect(() => {
    setNoticeList(nLinks);
    console.log("NOTICE LIST =>", nLinks);
  }, [])


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

  useEffect(() => {
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
      const endpoint = `${process.env.NEXT_PUBLIC_HOST}/api/getevents`;
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
  }, [])



  return (
    <>
      <Head>
        <title>SAGES, Bhopalpatnam</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='min-h-screen' style={{ backgroundImage: 'url(/texture/leaves.webp)' }}>

        {/* Slider Section */}
        {/* <section>
          <div className="slider flex justify-center mt-20  md:w-[100vh] md:h-[100vh] px-5">
            <SimpleImageSlider
              width={1470}
              height={600}
              images={images}
              showBullets={false}
              showNavs={true}
              autoPlay={false}
            />
          </div>
        </section> */}

        <section data-aos="fade-in">
          <Carousel2 />
        </section>

        {/* Welcome Message Section*/}
        <section className="welcome" data-aos="fade-up">
          <div className="flex flex-col justify-center items-center mx-5 my-12">

            <div className="section-heading ">
              <h2 className={styles.sectionTitle}>Welcome to Sages</h2>
            </div>

            <div className="wel-message mx-20 my-12">
              <p className={styles.welcomeMessage}><b>SAGES School</b><span>&nbsp;</span>
                <span className=" text-red-700">Affiliated to CBSE upto  senior secondary</span>
                ( A Unit of Nav Jagriti Educational Trust Co-Educational English Medium )
                <span className=" text-blue-500"> <b>NOC granted </b></span>
                <span className="text-danger">
                  SWAMI ATMANAND GOVERNMENT ENGLISH SCHOOL, Bhopalpatnam : </span> <b>'SAGES'</b> founded in 2022 by CG Government has grown today as the largest Government English medium School in the State, managing over 754 educational institution in 33 Districts
                <Link href="about.php" className="bg-red-700 text-white rounded-lg px-1"> Read More...</Link>
              </p>
            </div>
          </div>
        </section>

        {/* Activity Section */}
        <section className="upcoming-activity" data-aos="fade-down">
          <div className="container mx-auto px-5 py-12">
            <div className="flex flex-wrap -mx-4 -my-8 px-3">

              {/* Left one */}
              <div className="md:w-1/5 w-full flex flex-col items-center py-10 px-4">

                <div className="section-heading mx-auto">
                  <h2 className={styles.sectionTitle}>Upcoming Activity</h2>
                </div>

                <div className='events space-y-3 my-5 h-[400px]'>

                  <div className='bg-blue-300 p-2' style={{ backgroundImage: 'url(/texture/more-leaves.png)' }}>
                    <h4 className='text-sm font-semibold'>Interaction for Class NC & I (ALONG WITH CHILD)</h4>
                    <div className='flex flex-col font-mono'>
                      <span><i></i> 15th March</span>
                      <span><i></i> 5.00 AM to 9.00 PM</span>
                    </div>
                  </div>
                  <div className='bg-red-300 p-2' style={{ backgroundImage: 'url(/texture/y-so-serious-white.png)' }}>
                    <h4 className='text-sm font-semibold'>Interaction for Class NC & I (ALONG WITH CHILD)</h4>
                    <div className='flex flex-col font-mono'>
                      <span><i></i> 15th March</span>
                      <span><i></i> 5.00 AM to 9.00 PM</span>
                    </div>
                  </div>
                  <div className='bg-green-300 p-2'>
                    <h4 className='text-sm font-semibold'>Interaction for Class NC & I (ALONG WITH CHILD)</h4>
                    <div className='flex flex-col font-mono'>
                      <span><i></i> 15th March</span>
                      <span><i></i> 5.00 AM to 9.00 PM</span>
                    </div>
                  </div>

                </div>

              </div>

              {/* Middle one */}
              <div className='flex w-full md:w-3/5 flex-col py-8 px-4'>
                <div className="section-heading mx-auto">
                  <h2 className={styles.sectionTitle}>Achievement / Creativity of Sages</h2>
                </div>







                {/* <div className="Class-XII item-1 py-8 w-[full] h-[500px]">
                  <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={100}
                    slidesPerView={1}
                    navigation
                    autoplay={{
                      delay: 1500,
                      disableOnInteraction: false,
                    }}
                    // pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                  // onSwiper={(swiper) => console.log(swiper)}
                  // onSlideChange={() => console.log('slide change')}
                  >


                    <SwiperSlide>
                      <div className="item-1 flex flex-col items-center w-[620px] h-[300px] px-10 py-2 rounded-md border-blue border-4 space-y-4">
                        <h4 className='font-semibold text-md text-center'>Annual Day Program</h4>
                        <img style={{ width: "auto", height: "auto" }} className='rounded-3xl object-contain' src='/slider/haze.jpg' alt='image' />
                        <p>4th January, 2024</p>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="item-1 flex flex-col items-center w-[620px] h-[300px] px-10 py-2 rounded-md border-blue border-4 space-y-4">
                        <h4 className='font-semibold text-md text-center'>Annual Day Program</h4>
                        <img style={{ width: "auto", height: "auto" }} className='rounded-3xl object-contain' src='/slider/haze.jpg'  alt='image' />
                        <p>4th January, 2024</p>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="item-1 flex flex-col items-center w-[620px] h-[300px] px-10 py-2 rounded-md border-blue border-4 space-y-4">
                        <h4 className='font-semibold text-md text-center'>Annual Day Program</h4>
                        <img style={{ width: "auto", height: "auto" }} className='rounded-3xl object-contain' src='/slider/haze.jpg' alt='image' />
                        <p>4th January, 2024</p>
                      </div>
                    </SwiperSlide>



                  </Swiper>
                </div> */}




              </div>

              {/* Right one */}
              <div className="flex flex-col w-full md:w-1/5 py-8">

                <div className="section-heading mx-auto">
                  <h2 className={styles.sectionTitle}>What's New</h2>
                </div>f

                <div className="relative flex flex-col overflow-hidden mt-10 bg-[#6e9466] rounded-md">

                  <ul
                    className={`space-y-2 list-none text-sm font-sans px-2 py-3 ${styles.marqueeContainer} 
                    h-[400px] flex-wrap animate-marquee text-white ease-in-out `}>


                    {NoticeList && NoticeList.map((item, index) => (
                      <div key={index}>
                        <li className='flex flex-row space-x-2 hover:underline hover:translate-x-2 hover:text-[#d5f5e4]
                     transition duration-300 ease-in-out delay-150 hover:scale-110 px-1'>
                          <FiExternalLink size={35} className='text-red-700' />
                          <span>
                            <Link href={item.noticeLink} className='text-xs' >{item.noticeTitle}</Link>
                            <span className='text-red-300'> New</span>
                          </span>

                        </li>
                        <hr />
                      </div>
                    ))}

                  </ul>

                </div>

              </div>


            </div>
          </div>
        </section>

        {/* Congratulations Section*/}
        <section className="congratulations" data-aos="fade-left">
          <div className="congo flex flex-col items-center my-5 mx-auto">

            <div className="section-heading ">
              <h2 className={styles.sectionTitle}>Congratulations</h2>
            </div>

            <div className="container flex flex-col md:flex-row items-center md:justify-evenly my-10 space-y-3">


              <div className="Class-X w-[30vh]">
                <Swiper
                  // install Swiper modules
                  modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCreative]}
                  spaceBetween={100}
                  slidesPerView={1}
                  // navigation
                  autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                  }}
                  grabCursor={true}
                  effect={'creative'}
                  creativeEffect={{
                    prev: {
                      shadow: true,
                      translate: [0, 0, -400],
                    },
                    next: {
                      translate: ['100%', 0, 0],
                    },
                  }}
                  // pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}
                >


                  <SwiperSlide>
                    <div className="item-1 flex flex-col items-center px-10 py-2 rounded-md border-blue border-4 space-y-4 bg-slate-100">
                      <h4 className='font-semibold text-md flex text-center'>Class X Toppers</h4>
                      <Image style={{ width: "auto", height: "auto" }} className='rounded-3xl' src='/students/Ritesh-Singh.png' width={160} height={150} alt='image' />
                      <p className='font-normal'>Ritesh Singh</p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="item-1 flex flex-col items-center px-10 py-2 rounded-md border-blue border-4 space-y-4 bg-slate-100">
                      <h4 className='font-semibold text-md text-center'>Class X Toppers</h4>
                      <Image style={{ width: "auto", height: "auto" }} className='rounded-3xl' src='/students/Ritesh-Singh.png' width={160} height={150} alt='image' />
                      <p className='font-normal'>Ritesh Singh</p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="item-1 flex flex-col items-center px-10 py-2 rounded-md border-blue border-4 space-y-4 bg-slate-100">
                      <h4 className='font-semibold text-md text-center'>Class X Toppers</h4>
                      <Image style={{ width: "auto", height: "auto" }} className='rounded-3xl' src='/students/Kashish-Singh.png' width={160} height={150} alt='image' />
                      <p className='font-normal'>Kashish Singh</p>
                    </div>
                  </SwiperSlide>

                </Swiper>
              </div>

              <div className="Class-XII item-1  w-[30vh]">
                <Swiper
                  // install Swiper modules
                  modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                  spaceBetween={100}
                  slidesPerView={1}
                  navigation
                  autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                  }}
                  // pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}
                >


                  <SwiperSlide>
                    <div className="item-1 flex flex-col items-center px-10 py-2 rounded-md border-blue border-4 space-y-4">
                      <h4 className='font-semibold text-md text-center'>Class XII Toppers</h4>
                      <Image style={{ width: "auto", height: "auto" }} className='rounded-3xl' src='/students/Ritesh-Singh.png' width={160} height={150} alt='image' />
                      <p>Upcoming...</p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="item-1 flex flex-col items-center px-10 py-2 rounded-md border-blue border-4 space-y-4">
                      <h4 className='font-semibold text-md text-center'>Class XII Toppers</h4>
                      <Image style={{ width: "auto", height: "auto" }} className='rounded-3xl' src='/students/Ritesh-Singh.png' width={160} height={150} alt='image' />
                      <p>Upcoming...</p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="item-1 flex flex-col items-center px-10 py-2 rounded-md border-blue border-4 space-y-4">
                      <h4 className='font-semibold text-md text-center'>Class XII Toppers</h4>
                      <Image style={{ width: "auto", height: "auto" }} className='rounded-3xl' src='/students/Kashish-Singh.png' width={160} height={150} alt='image' />
                      <p>Upcoming...</p>
                    </div>
                  </SwiperSlide>

                </Swiper>
              </div>

              <div className="Today-Birthday item-1 w-[30vh] bg-slate-100">
                <Swiper
                  // install Swiper modules
                  modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCards]}
                  spaceBetween={100}
                  slidesPerView={1}
                  effect={'cards'}
                  grabCursor={true}
                  // navigation
                  autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                  }}
                  // pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}
                >


                  <SwiperSlide>
                    <div className="item-1 flex flex-col items-center px-10 py-2 rounded-md border-blue border-4 space-y-4 bg-slate-100">
                      <h4 className='font-semibold text-md text-center'>Today's Birthday's</h4>
                      <Image style={{ width: "auto", height: "auto" }} className='rounded-3xl' src='/students/Ritesh-Singh.png' width={160} height={150} alt='image' />
                      <p className='font-normal'>Ritesh Singh</p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="item-1 flex flex-col items-center px-10 py-2 rounded-md border-blue border-4 space-y-4 bg-slate-100">
                      <h4 className='font-semibold text-md text-center'>Today's Birthday's</h4>
                      <Image style={{ width: "auto", height: "auto" }} className='rounded-3xl' src='/students/Ritesh-Singh.png' width={160} height={150} alt='image' />
                      <p className='font-normal'>Ritesh Singh</p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="item-1 flex flex-col items-center px-10 py-2 rounded-md border-blue border-4 space-y-4 bg-slate-100">
                      <h4 className='font-semibold text-md text-center'>Today's Birthday's</h4>
                      <Image style={{ width: "auto", height: "auto" }} className='rounded-3xl' src='/students/Kashish-Singh.png' width={160} height={150} alt='image' />
                      <p className='font-normal'>Kashish Singh</p>
                    </div>
                  </SwiperSlide>

                </Swiper>
              </div>

            </div>

          </div>
        </section>


        {/* <section>
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={100}
            slidesPerView={1}
            navigation
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            // pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide>
              <div className="item-1 flex flex-col items-center px-10 py-2 rounded-md border-blue border-4 space-y-4">
                <h4 className='font-semibold text-md'>Class XII Toppers</h4>
                <Image style={{width: "auto", height: "auto"}} className='rounded-3xl' src='/students/Kashish-Singh.png' width={160} height={150} alt="image" />
                <p>Upcoming...</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item-1 flex flex-col items-center px-10 py-2 rounded-md border-blue border-4 space-y-4">
                <h4 className='font-semibold text-md'>Class X Toppers</h4>
                <Image style={{width: "auto", height: "auto"}} className='rounded-3xl' src='/students/Ritesh-Singh.png' width={160} height={150} alt="image" />
                <p>Upcoming...</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item-1 flex flex-col items-center px-10 py-2 rounded-md border-blue border-4 space-y-4">
                <h4 className='font-semibold text-md'>Today's Birthday's</h4>
                <Image style={{width: "auto", height: "auto"}} className='rounded-3xl' src='/students/Kashish-Singh.png' width={160} height={150} alt="image" />
                <p>Upcoming...</p>
              </div>
            </SwiperSlide>
            ...
          </Swiper>
        </section> */}


        {/* Beyound Academics */}
        <section data-aos="fade-right">
          <div className="galleryy flex flex-col items-center my-10 mx-auto px-2">
            <div className="section-heading ">
              <h2 className={styles.sectionTitle}>BEYOND ACADEMICS</h2>
            </div>

            <div>
              <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                  <div className="flex flex-wrap -mx-4 -my-8">

                    <div className="py-8 px-4 lg:w-1/4">
                      <div className="h-full flex items-start">
                        <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                          <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Jan</span>
                          <span className="font-medium text-lg text-gray-800 title-font leading-none">18</span>
                        </div>
                        <div className="flex-grow pl-6">
                          <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">Activity</h2>
                          <div className="rounded-lg h-64 overflow-hidden">
                            <img alt="content" className="object-cover object-center h-full w-full" src="https://www.southpoint.edu.in/wp-content/themes/southpoint-new/images/karate.jpg" />
                          </div>
                          <h1 className="title-font text-xl font-medium text-gray-900 mb-3">karate Training Classes</h1>
                          <p className="leading-relaxed mb-5">Learning Karate is compulsory in South Point School. Students from Classes II to V take lessons from professional coaches</p>
                          <a className="inline-flex items-center">
                            <img alt="blog" src="/slider/haze.jpg" className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center" />
                            <span className="flex-grow flex flex-col pl-3">
                              <span className="title-font font-medium text-gray-900">Nikhil Dasar</span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="py-8 px-4 lg:w-1/4">
                      <div className="h-full flex items-start">
                        <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                          <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Jan</span>
                          <span className="font-medium text-lg text-gray-800 title-font leading-none">22</span>
                        </div>
                        <div className="flex-grow pl-6">
                          <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">YOGA</h2>
                          <div className="rounded-lg h-64 overflow-hidden">
                            <img alt="content" className="object-cover object-center h-full w-full" src="https://www.southpoint.edu.in/wp-content/themes/southpoint-new/images/yoga.jpg" />
                          </div>
                          <h1 className="title-font text-xl font-medium text-gray-900 mb-3">Yoga Classes</h1>
                          <p className="leading-relaxed mb-5">In South Point High School Physical Education classes are a perfect blend of Yoga, P.T. and Rock Climbing.</p>
                          <a className="inline-flex items-center">
                            <img alt="blog" src="/slider/haze.jpg" className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center" />
                            <span className="flex-grow flex flex-col pl-3">
                              <span className="title-font font-medium text-gray-900">Akhil Dasar</span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="py-8 px-4 lg:w-1/4">
                      <div className="h-full flex items-start">
                        <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                          <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Feb</span>
                          <span className="font-medium text-lg text-gray-800 title-font leading-none">13</span>
                        </div>
                        <div className="flex-grow pl-6">
                          <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">CATEGORY</h2>
                          <div className="rounded-lg h-64 overflow-hidden">
                            <img alt="content" className="object-cover object-center h-full w-full" src="https://www.southpoint.edu.in/wp-content/themes/southpoint-new/images/school-events.jpg" />
                          </div>
                          <h1 className="title-font text-xl font-medium text-gray-900 mb-3">School Events</h1>
                          <p className="leading-relaxed mb-5">Come winter and it is time for South Point School to host Ullas, the Inter-School Competition for junior students.</p>
                          <a className="inline-flex items-center">
                            <img alt="blog" src="/slider/haze.jpg" className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center" />
                            <span className="flex-grow flex flex-col pl-3">
                              <span className="title-font font-medium text-gray-900">Holden Caulfield</span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>

                    {EventList?.map((item, index) => (

                      <div key={index} className="py-8 px-4 lg:w-1/4">
                        <div className="h-full flex items-start">
                          <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                            <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">{item.eventDate.split('-')[1]}</span>
                            <span className="font-medium text-lg text-gray-800 title-font leading-none">{item.eventDate.split('-')[1]}</span>
                          </div>
                          <div className="flex-grow pl-6">
                            <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">SPORTS</h2>
                            <div className="rounded-lg h-64 overflow-hidden">
                              <img alt="content" className="object-cover object-center h-full w-full" src={item.image} />
                            </div>
                            <h1 className="title-font text-xl font-medium text-gray-900 mb-3">{item.name}</h1>
                            <p className="leading-relaxed mb-5">{item.description}</p>
                            <a className="inline-flex items-center">
                              <img alt="blog" src={item.image} className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center" />
                              <span className="flex-grow flex flex-col pl-3">
                                <span className="title-font font-medium text-gray-900">John Doe</span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}

                  </div>
                </div>
              </section>
            </div>

          </div>
        </section>




        {/* Our Gallery Section */}
        {/* <section className="gallery my-10">
          <div className="galleryy flex flex-col items-center my-10 mx-auto px-2">
            <div className="section-heading ">
              <h2 className={styles.sectionTitle}>Our Gallery</h2>
            </div>
            <div className="images my-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="grid gap-4">
                  <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="" />
                  </div>
                  <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="" />
                  </div>
                  <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="" />
                  </div>
                </div>
                <div className="grid gap-4">
                  <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" />
                  </div>
                  <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt="" />
                  </div>
                  <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt="" />
                  </div>
                </div>
                <div className="grid gap-4">
                  <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt="" />
                  </div>
                  <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt="" />
                  </div>
                  <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt="" />
                  </div>
                </div>
                <div className="grid gap-4">
                  <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="" />
                  </div>
                  <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="" />
                  </div>
                  <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="" />
                  </div>
                </div>
              </div>


            </div>
          </div>

        </section> */}


        {/* Our Gallery Section */}
        <section className="text-gray-600 body-font " data-aos="fade-up">
          <div className="galleryy flex flex-col items-center my-10 mx-auto px-2">

            <div className="section-heading ">
              <h2 className={styles.sectionTitle}>Our Gallery</h2>
            </div>

            <div className="container px-5 py-12 mx-auto flex flex-wrap bg-slate-100">
              <div className="flex w-full mb-20 flex-wrap">
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Master Cleanse Reliac Heirloom</h1>
                <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
              </div>
              <div className="flex flex-wrap md:-m-2 -m-1">
                <div className="flex flex-wrap w-1/2">
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
                <div className="flex flex-wrap w-1/2">
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
              <div className="flex mt-4 w-full mx-auto justify-end">

                <Link href={'/gallery'} className="text-indigo-500 inline-flex items-center font-semibold bg-slate-100 md:mb-2 lg:mb-0">Explore
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

            <div className="statsContainer flex flex-row justify-center space-x-2 md:space-x-36 my-10">

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
        {/* <section className="text-gray-600 body-font">
          <div className="container px-5 py-12 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="lg:w-full lg:mb-0 mb-6 p-4">
                <div className="h-full text-center">
                  <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/302x302"/>
                    <p className="leading-relaxed mx-96">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                    <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                    <h2 className="text-gray-900 font-bold title-font tracking-wider text-md">Nikhil Dasar</h2>
                    <p className="text-gray-500">Software Engineer <br />Full Stack Web & Android Developer</p>
                </div>
              </div>
              
            </div>
          </div>
        </section> */}

        <button
          className={`fixed flex justify-center items-center bottom-4 right-4 bg-[#ffc107] text-white w-10 h-10 px-auto rounded-full ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
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


export async function getServerSideProps(context) {

  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }

  const nLinks = await Notice.find();

  // Pass data to the page via props
  return { props: { nLinks: JSON.parse(JSON.stringify(nLinks)) } }
}
