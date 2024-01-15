import React from 'react'

const AdmissionNotice = () => {
  const fileUrl = '/favicon/PP'
  const fileType = 'pdf'
  return (
    <div className='min-h-screen mt-28'>

      <div className="max-w-screen-lg h-screen mx-auto bg-white p-8 rounded-md shadow-md">
        <h1 className="text-2xl font-bold mb-4">PDF/WORD Viewer</h1>

        <iframe src={'/files/sages.pdf'} className="w-full h-full" title="Excel Viewer" ></iframe>

      </div>

    </div>
  )
}

export default AdmissionNotice