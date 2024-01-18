import React from 'react'

const Syllabus = () => {
  return (
    <div className='min-h-screen p-4 mt-14' style={{backgroundImage: `url('https://www.html.am/images/backgrounds/background-image-2.gif')`, backgroundSize: 'fill'}}>

      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-6 text-orange-500">CBSE Syllabus 2024 - Sages School</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Repeat the following card structure for each class */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Class 1</h2>

            <ul className="list-disc pl-4">
              <li>English</li>
              <li>Mathematics</li>
              <li>Science</li>
              {/* Add more subjects as needed */}
            </ul>

            <p className="mt-4">
              For detailed information on the CBSE syllabus for Class 1, please refer to the official CBSE curriculum guide.
            </p>
          </div>

          {/* Repeat similar card structures for other classes */}

        </div>
      </div>



    </div>
  )
}

export default Syllabus