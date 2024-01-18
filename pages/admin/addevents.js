import React, { useEffect, useState } from 'react'
import Sidebar from './compo/layout/Sidebar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

import EventItem from './compo/EventItem';



const AddEvents = () => {
    const [selectedImage, setselectedImage] = useState(null);
    const [EventList, setEventList] = useState([]);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [Daily, setDaily] = useState(false)
    const [classroomInteraction, setClassroomInteraction] = useState(false)

    //Set Form data
    const [FormData, setFormData] = useState({
        name: "",
        description: "",
        category: "",
        date: "",
        endDate: "",
        eventTime: "",
        image: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        if (e.target.value === 'classroomInteraction') {
            setClassroomInteraction(true)
        }
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
        if (FormData.name !== "" && FormData.date !== "" && FormData.category !== '') {
            let data = FormData;
            let endPoint = `${process.env.NEXT_PUBLIC_HOST}/api/event/addevent`;

            try {
                let res = await axios.post(endPoint, { data: data })
                let result = res.data;
                console.log(result);

                if (result.success === true) {
                    console.log({ message: "Event Added Succcessfully!" });
                    toast.success("Event has been added!", {
                        position: "top-left",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });

                    setFormData({ name: "", description: "", category: "", date: "", endDate: "", eventTime: "", image: "", });
                    setselectedImage(null)

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
                        <h2 className='flex mb-4 text-3xl font-semibold'>Create a Event</h2>
                        <form onSubmit={handleSubmit}>
                            <div className='mb-4'>
                                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Event Name</label>
                                <input autoComplete="aa" name='name' value={FormData.name} onChange={handleChange} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Summer Dive" required />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                <textarea autoComplete="aa" name="description" id="message" rows="4" onChange={handleChange} value={FormData.description} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your Description here..."></textarea>
                            </div>

                            <div className="grid gap-6 mb-4 md:grid-cols-2 my-2">

                                <div>
                                    <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                                    <select name='category' value={FormData.category} onChange={handleChange} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                                        <option >Category</option>
                                        <option value="classroomInteraction">Classroom/Guest Interaction</option>
                                        <option value="coCircullar">Co-Circullar</option>
                                        <option value="dailyActivity">Daily Activity</option>
                                        <option value="summerActivity">Summer Activity</option>
                                        <option value="annualActivity">Annual Activity</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div className="">
                                    <label htmlFor="eventTime" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Event Time</label>
                                    <input autoComplete="aa" name='eventTime' value={FormData.eventTime} onChange={handleChange} type="text" id="eventTime" 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
                                     block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                                      dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="5.00AM - 5.00PM"
                                      pattern="(0?[1-9]|1[0-2])\\.[0-5][0-9]AM - (0?[1-9]|1[0-2])\\.[0-5][0-9]PM" />
                                </div>

                                <div className="">
                                    <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Event Date / Start Date</label>
                                    {classroomInteraction ? (
                                        <input autoComplete="aa" name='date' value={FormData.date} onChange={handleChange} type="text" id="date"
                                         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                                          focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                           dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="12/01/2024" 
                                           pattern="(0[1-9]|1[0-2])/(0[1-9]|[12][0-9]|3[01])/\d{4}" required />
                                    ) : (
                                        <input autoComplete="aa" name='date' value={FormData.date} onChange={handleChange} type="text" id="date"
                                         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                                          focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                           dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="12-Jan-2024" 
                                           pattern="(0[1-9]|[12][0-9]|3[01])-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-\d{4}" required />
                                    )}

                                </div>

                                <div className="">
                                    <label htmlFor="endDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">End Date</label>
                                    <input autoComplete="aa" name='endDate' value={FormData.endDate} onChange={handleChange} type="text" id="endDate" 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                                     focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                      dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="14-Jan-2024" 
                                      pattern="(0[1-9]|[12][0-9]|3[01])-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-\d{4}" />
                                </div>



                                <div className='mb-4'>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload Poster</label>
                                    <input onChange={handleImageChange} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" />
                                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px (1MB)).</p>
                                </div>

                                {selectedImage && <div className='my-auto'>
                                    <img src={selectedImage} alt={`Preview`} style={{ width: '100px', height: 'auto' }} />
                                </div>
                                }


                            </div>

                            {/* <div className='mb-4'>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload Poster</label>
                                <input onChange={handleImageChange} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" />
                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px (1MB)).</p>
                            </div>

                            {selectedImage && <div>
                                <img src={selectedImage} alt={`Preview`} style={{ width: '100px', height: 'auto' }} />
                            </div>
                            } */}


                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 
                            focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm
                             w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700
                              dark:focus:ring-blue-800">Add Event</button>

                        </form>


                    </div>
                </div>

                <div className="diplayEvents mt-4 m-2">
                    <h2 className='flex mb-4 text-3xl font-semibold'>All Events</h2>

                    <div className="flex mx-2">
                        {EventList && EventList.length === 0 && 'No notes to display'}
                    </div>

                    {/* <div className='container flex flex-col md:flex-wrap space-x-4'> */}
                    <div className='flex w-full justify-around items-center'>

                        <EventItem EventList={EventList} setEventList={setEventList} />

                        {/* 
                        {EventList && EventList.map((item, index) => (
                            
                                <div key={index}>

                                    <div className="flex flex-col justify-center items-center max-w-60 max-h-fit bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                                        <div className='flex w-60 h-36'>
                                            <img className="rounded-t-lg object-contain" src={item.image} alt="" />
                                        </div>

                                        <div className="p-5">

                                            <a href="#">
                                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                                            </a>
                                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>

                                            <div className='flex flex-row space-x-2'>
                                                <button onClick={() => { setIsEditModalOpen(true) }} className="flex flex-row justify-center w-fit mx-2 items-center px-3 py-2 text-sm font-medium text-center
                                     text-white bg-orange-400 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300
                                      dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                    <FaRegEdit className='mx-2' size={18} />
                                                    Edit
                                                </button>
                                                <a href="#" className="flex flex-row justify-center w-fit mx-2 items-center px-2 py-2 text-sm font-medium text-center
                                     text-white bg-red-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300
                                      dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                    <MdDeleteOutline className='mx-2' size={18} />
                                                    Delete
                                                </a>

                                            </div>

                                        </div>

                                    </div>

                                </div>
                            
                        ))} */}


                        {/* <!-- Main modal --> */}
                        {/* <div id="crud-modal" tabindex="-1" aria-hidden="true" className={`${isEditModalOpen ? '' : 'hidden'} */}
                        {/* overflow-y-auto overflow-x-hidden min-h-screen min-w-full bg-blend-overlay fixed inset-1`}> */}
                        {/* <div className="flex items-center justify-center min-h-screen"> */}
                        {/* <!-- Modal content --> */}
                        {/* <div className="relative bg-white rounded-lg shadow dark:bg-gray-700"> */}
                        {/* <!-- Modal header --> */}
                        {/* <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                            Create New Product
                                        </h3>
                                        <button onClick={() => { setIsEditModalOpen(false) }} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                            </svg>
                                            <span className="sr-only" >Close modal</span>
                                        </button>
                                    </div> */}
                        {/* <!-- Modal body --> */}
                        {/* <form className="p-4 md:p-5">
                                        <div className="grid gap-4 mb-4 grid-cols-2">
                                            <div className="col-span-2">
                                                <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                                <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required="" />
                                            </div>

                                            <div className="col-span-2">
                                                <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Description</label>
                                                <textarea id="description" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write product description here"></textarea>
                                            </div>

                                            <div className="mb-4">
                                                <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Event Date</label>
                                                <input autoComplete="aa" name='date' value={FormData.date} onChange={handleChange} type="text" id="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="12-Jan-2024" required />
                                            </div>

                                            <div className='mb-4'>
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload Poster</label>
                                                <input onChange={handleImageChange} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" />
                                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                                            </div>




                                        </div>
                                        <button onClick={handleEditEvent} type="submit" className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                                            Submit
                                        </button>
                                    </form> */}
                        {/* </div> */}
                        {/* </div> */}
                        {/* </div> */}
                        {/* Closed Modal */}


                    </div>







                </div>

            </div >
        </div >


    )
}

export default AddEvents