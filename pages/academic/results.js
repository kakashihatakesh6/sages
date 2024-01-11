import React from 'react'

const Results = () => {
  const results = [
    { studentName: 'John Doe', grade: 'A', subject: 'Mathematics' },
    { studentName: 'Jane Smith', grade: 'B', subject: 'English' },
    { studentName: 'Bob Johnson', grade: 'A+', subject: 'Science' },
    // Add more results as needed
  ];
  return (
    <div className='min-h-screen p-4 mt-28'>

      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-6">Exam Results - Sages School</h1>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Class 10 Results</h2>

          <table className="min-w-full border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Student Name</th>
                <th className="py-2 px-4 border-b">Subject</th>
                <th className="py-2 px-4 border-b">Grade</th>
              </tr>
            </thead>
            <tbody>
              {results.map((result, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b">{result.studentName}</td>
                  <td className="py-2 px-4 border-b">{result.subject}</td>
                  <td className="py-2 px-4 border-b">{result.grade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>



    </div>
  )
}

export default Results