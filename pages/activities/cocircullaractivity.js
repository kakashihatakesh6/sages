import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CoCircullarActivity = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in milliseconds
    });
  }, []);

  const activities = [
    { title: 'Music Club', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Art and Craft Society', description: 'Sed tincidunt, justo ac convallis blandit, ligula libero ultricies purus.' },
    { title: 'Science Olympiad Team', description: 'Eu vestibulum odio lectus vitae tortor.' },
    // Add more co-curricular activities as needed
  ];

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
  }, [])


  return (
    <div className="container mx-auto mt-36">
      <h1 className="text-3xl font-bold mb-6">Co-Curricular Activities - Sages School</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {activities.map((activity, index) => (
          <div
            key={index}
            data-aos="fade-up" // AOS animation effect
            className="bg-white p-6 rounded-lg shadow-md mb-4"
          >
            <h2 className="text-lg font-semibold mb-2">{activity.title}</h2>
            <p className="text-gray-700">{activity.description}</p>
          </div>
        ))}
      </div>


      <section data-aos="fade-right">
        <div className="galleryy flex flex-col items-center my-10 mx-auto px-2">


          <div>
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -mx-4 -my-8">


                  {EventList?.slice(0, 4).map((item, index) => (

                    <div key={index} className="py-8 px-4 lg:w-1/4">
                      <div className="h-full flex items-start">
                        <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                          <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">{item.eventDate.split('-')[1]}</span>
                          <span className="font-medium pb-2 text-lg text-gray-800 title-font leading-none">{item.eventDate.split('-')[0]}</span>
                          {/* <span className="font-medium pb-2 text-lg text-gray-800 title-font leading-none">{item.eventDate.split('-')[2]}</span> */}
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








    </div>
  );
};

export default CoCircullarActivity;








