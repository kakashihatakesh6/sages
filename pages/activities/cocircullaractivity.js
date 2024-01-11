import React, { useEffect } from 'react';
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
    </div>
  );
};

export default CoCircullarActivity;








