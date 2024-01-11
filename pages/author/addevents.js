import React, { useState } from 'react'
import Sidebar from './compo/layout/Sidebar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const AddEvents = () => {
    const [selectedImage, setselectedImage] = useState(null);

    //Set Form data
    const [FormData, setFormData] = useState({
        name: "",
        description: "",
        date: "",
        image: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setselectedImage(reader.result);
            console.log(reader)
            setFormData((prevData) => ({
                ...prevData,
                image: reader.result
            }))
        }
        if (file) {
            reader.readAsDataURL(file);
        }

    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (FormData.name !== "" && FormData.description !== "" && FormData.date !== "" ) {
            let data = FormData;
            let endPoint = `${process.env.NEXT_PUBLIC_HOST}/api/addevent`;

            try {
                let res = await axios.post(endPoint, {data: data})
                let result = res.data;
                console.log(result);

                if (result.success === true) {
                    console.log({ message: "Faculty Succcessfully registered!" });
                    toast.success("Faculty has been created!", {
                        position: "top-left",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });

                    setFormData({ name: "", description: "", date: "", image: "" });

                } else {
                    toast.error(`Sorry, Some Error Occurred`, {
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
                console.log({ error: "Registration Failed!" })
            }


        }
        else {
            console.log({ error: "Please Enter Valid Credentials!" });
            toast.error('Sorry, Please Enter Valid Credentials!', {
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
                        <h2 className='flex mb-4 text-3xl font-semibold'>Add Events</h2>
                        <form onSubmit={handleSubmit}>
                            <div className='mb-4'>
                                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Event Name</label>
                                <input autoComplete="aa" name='name' value={FormData.name} onChange={handleChange} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Summer Dive" required />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                <textarea autoComplete="aa" name="description" id="message" rows="4" onChange={handleChange} value={FormData.email} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your Description here..."></textarea>                            </div>

                            <div className="mb-4">
                                <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Event Date</label>
                                <input autoComplete="aa" name='date' value={FormData.email} onChange={handleChange} type="text" id="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="12-Jan-2024" required />
                            </div>


                            {/* <div date-rangepicker className="flex items-center">
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                        </svg>
                                    </div>
                                    <input name="start" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date start" />
                                </div>
                                <span className="mx-4 text-gray-500">to</span>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                        </svg>
                                    </div>
                                    <input name="end" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date end" />
                                </div>
                            </div> */}


                            <div className='mb-4'>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload Poster</label>
                                <input onChange={handleImageChange} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" />
                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                            </div>


                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 
                            focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm
                             w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700
                              dark:focus:ring-blue-800">Add Event</button>

                        </form>


                    </div>
                </div>
            </div >





        </div >
    )
}

export default AddEvents