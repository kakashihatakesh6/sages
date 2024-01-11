import React from 'react'

const SchoolUniform = () => {
  return (
    <div className='min-h-screen p-4 mt-28'>

      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-6">School Uniform - Sages School</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="mb-8 md:mb-0">
            <img
              src="/slider/aatma.png" // Replace with the actual path to your uniform image
              alt="School Uniform"
              className="w-full h-auto rounded-md"
            />
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Uniform Details</h2>

            <p className="mb-4">
              At Sages School, we believe in maintaining a sense of unity and pride among our students. Our school uniform is designed with both comfort and elegance in mind.
            </p>

            <ul className="list-disc pl-4 mb-4">
              <li>Shirt: [Description]</li>
              <li>Trousers/Skirt: [Description]</li>
              <li>Tie: [Description]</li>
              <li>Shoes: [Description]</li>
              <li>Socks: [Description]</li>
            </ul>

            <p>
              We encourage all students to adhere to the school uniform policy as it fosters a sense of equality and community spirit.
            </p>
          </div>
        </div>
      </div>
 

    </div>
  )
}

export default SchoolUniform