import React, { useEffect, useState } from 'react'
import Sidebar from './compo/layout/Sidebar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Notice from '@/models/Notice';
// import mongoose from 'mongoose';
import axios from 'axios';

const AddNoticeLinks = ({ noticeLinks }) => {
    const [NoticeList, setNoticeList] = useState()
    useEffect(() => {
        setNoticeList(noticeLinks)
        console.log("notice", noticeLinks)
    }, [])


    //Set Form data
    const [FormData, setFormData] = useState({
        noticeTitle: "",
        noticeLink: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (FormData.noticeTitle !== "" && FormData.noticeLink !== "") {

            let data = FormData;
            console.log("data =>", data);
            let endPoint = `${process.env.NEXT_PUBLIC_HOST}/api/notice/addnotice`;

            try {
                let res = await axios.post(endPoint, { data: data })
                let result = res.data;

                if (result.success === true) {
                    console.log({ message: "Notice added successfully!" });
                    toast.success("Notice added successfully!", {
                        position: "top-left",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });

                    setFormData({ noticeTitle: "", noticeLink: "" });

                } else {
                    toast.error(`Sorry, Please Enter the right inputs`, {
                        position: "bottom-center",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }

            } catch (error) {
                console.log({ error: "Some Error Occurred!" })
                toast.error(`Sorry, Please Enter the right inputs`, {
                    position: "bottom-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }

        }
        else {
            console.log({ error: "Please fill the correct inputs" });
            toast.error('Sorry, Please fill the correct inputs', {
                position: "bottom-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };


    return (
        <div>

            <Sidebar />

            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

            <div className="p-4 sm:ml-64">

                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                    <div className="flex flex-col align-center justify-center">
                        <h2 className='flex mb-4 text-3xl font-semibold'>Add Notice Events</h2>
                        <form onSubmit={handleSubmit}>
                            <div className='mb-4'>
                                <label htmlFor="noticeTitle" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Notice Title</label>
                                <input autoComplete="aa" name='noticeTitle' value={FormData.noticeTitle} onChange={handleChange} type="text" id="noticeTitle" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="New Regestration opened for students with backlogs please click to continue" required />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor="noticeLink" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Notice Link</label>
                                <input autoComplete="aa" name='noticeLink' value={FormData.name} onChange={handleChange} type="text" id="noticeLink" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="http://www.openregistraionforbacklogstudents.edu/" required />
                            </div>

                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

                        </form>


                    </div>
                </div>
            </div >

            <div className='p-4 sm:ml-64'>
                <ul>
                    {NoticeList && NoticeList.map((item, index) => (
                        <li key={index}><h5>{item.noticeTitle}</h5></li>
                    ))}
                </ul>

            </div>


        </div >
    )
}

export default AddNoticeLinks


// export async function getServerSideProps(context) {
//     let noticeLinks;
//     try {
//         if (!mongoose.connections[0].readyState) {
//             await mongoose.connect(process.env.MONGO_URI);
//         }

//         noticeLinks = await Notice.find();
//         // Pass data to the page via props
//         return { props: { noticeLinks: JSON.parse(JSON.stringify(noticeLinks)) } }

//     } catch (error) {
//         console.log({ error: "Server side props Notice Links" });
//         // Pass data to the page via props
//         return { props: {} }
//     }


// }