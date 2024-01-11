import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import styles from '@/styles/Home.module.css'

const DailyActivity = () => {
  const [StopMarquee, setStopMarquee] = useState(true);
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in milliseconds
    });
  }, []);

  const toppers = [
    { name: 'John Doe', grade: '12', marks: '98%' },
    { name: 'Jane Smith', grade: '11', marks: '97%' },
    { name: 'Bob Johnson', grade: '10', marks: '95%' },
    // Add more toppers as needed
  ];

  return (
    <div className="container mx-auto mt-36">
      <h1 className="text-3xl font-bold mb-6">School Toppers - Sages School</h1>

      <div className="scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 overflow-x-auto" data-aos="fade-up">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Grade</th>
              <th className="py-2 px-4 border-b">Marks</th>
            </tr>
          </thead>
          <tbody>
            {toppers.map((topper, index) => (
              <tr
                key={index}
                data-aos="fade-up" // AOS animation effect
                className="border-b hover:bg-gray-100 transition"
              >
                <td className="py-2 px-4">{topper.name}</td>
                <td className="py-2 px-4">{topper.grade}</td>
                <td className="py-2 px-4">{topper.marks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div class="relative flex flex-col overflow-y-hidden mt-10">


        <div 
        // onMouseEnter={() => setStopMarquee(false) } onMouseLeave={() => setStopMarquee(true) }
         className={`py-12 ${styles.marqueeContainer} flex bg-blue-300 w-[300px] h-[400px] flex-col animate-marquee whitespace-nowrap`}>


          <span class="text-4xl mx-4"><Link href={'https://google.com'}>Marquee Item 1</Link></span>
          <span class="text-4xl mx-4"><Link href={'#'}>Marquee Item 2</Link></span>
          <span class="text-4xl mx-4"><Link href={'#'}>Marquee Item 3</Link></span>
          <span class="text-4xl mx-4"><Link href={'#'}>Marquee Item 4</Link></span>
          <span class="text-4xl mx-4"><Link href={'#'}>Marquee Item 4</Link></span>
          <span class="text-4xl mx-4"><Link href={'#'}>Marquee Item 4</Link></span>
          <span class="text-4xl mx-4"><Link href={'#'}>Marquee Item 5</Link></span>
          <span class="text-4xl mx-4"><Link href={'#'}>Marquee Item 5</Link></span>
          <span class="text-4xl mx-4"><Link href={'#'}>Marquee Item 5</Link></span>
          <span class="text-4xl mx-4"><Link href={'#'}>Marquee Item 5</Link></span>
          <span class="text-4xl mx-4"><Link href={'#'}>Marquee Item 5</Link></span>
          <span class="text-4xl mx-4"><Link href={'#'}>Marquee Item 5</Link></span>
          <span class="text-4xl mx-4"><Link href={'#'}>Marquee Item 5</Link></span>
          <span class="text-4xl mx-4"><Link href={'#'}>Marquee Item 5</Link></span>


        </div>

        {/* <div class="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
          <span class="text-4xl mx-4">Marquee Item 1</span>
          <span class="text-4xl mx-4">Marquee Item 2</span>
          <span class="text-4xl mx-4">Marquee Item 3</span>
          <span class="text-4xl mx-4">Marquee Item 4</span>
          <span class="text-4xl mx-4">Marquee Item 5</span>
        </div> */}

      </div>



    </div>
  );
};

export default DailyActivity;




