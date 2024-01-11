import React from 'react';

const StudentCouncil = () => {
  const councilMembers = [
    {
      name: 'Emily Johnson',
      position: 'President',
      grade: '12',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt...',
    },
    {
      name: 'Daniel Smith',
      position: 'Vice President',
      grade: '11',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt...',
    },
    // Add more council members as needed
  ];

  return (
    <div className="container mx-auto mt-36 p-4">
      <h1 className="text-3xl font-bold mb-6">Student Council - Sages School</h1>

      {/* Council Members Section */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Meet Your Student Council Members</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {councilMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md mb-4">
              <h3 className="text-lg font-semibold mb-2">{member.name}</h3>
              <p className="text-sm text-gray-600 mb-2">Grade {member.grade}</p>
              <p className="text-sm text-gray-600 mb-4">{member.position}</p>
              <p className="text-gray-700">{member.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements and Initiatives Section */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Our Achievements and Initiatives</h2>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, justo ac
          convallis blandit, ligula libero ultricies purus, eu vestibulum odio lectus vitae
          tortor.
        </p>
      </div>

      {/* Get Involved Section */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Get Involved with Student Council</h2>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, justo ac
          convallis blandit, ligula libero ultricies purus, eu vestibulum odio lectus vitae
          tortor.
        </p>
        {/* Add information about how students can join or participate in Student Council activities */}
      </div>

      {/* Contact Us Section */}
      <div>
        <h2 className="text-xl font-bold mb-4">Contact Student Council</h2>
        <p className="text-gray-700">
          If you have any questions, suggestions, or would like to get in touch with the Student Council,
          feel free to contact us at <a href="mailto:studentcouncil@sageschool.com">studentcouncil@sageschool.com</a>.
        </p>
      </div>
    </div>
  );
};

export default StudentCouncil;
