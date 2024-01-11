import React from 'react';

const FeeStructure = () => {
  return (
    <div className='min-h-screen pt-4 mt-4'>
      <div className="container mx-auto mt-8 my-5">
        <h1 className="text-3xl font-bold mb-6">Fee Structure - Sages School</h1>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Academic Year 2024-2025</h2>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Tuition Fees</h3>
              <ul className="list-disc pl-4">
                <li>Class 1 to 5: Rs. XXXX</li>
                <li>Class 6 to 8: Rs. XXXX</li>
                <li>Class 9 to 10: Rs. XXXX</li>
                <li>Class 11 to 12: Rs. XXXX</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Additional Fees</h3>
              <ul className="list-disc pl-4">
                <li>Library Fee: Rs. XXXX</li>
                <li>Sports Fee: Rs. XXXX</li>
                <li>Transportation Fee: Rs. XXXX</li>
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-sm text-gray-600">
              Note: Fees are subject to change, and any revisions will be communicated well in advance.
            </p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default FeeStructure;
