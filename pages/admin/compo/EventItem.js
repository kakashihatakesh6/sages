import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

const EventItem = ({ EventList, setEventList }) => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [newSelectedImage, setNewSelectedImage] = useState(null);
    const [currentEvent, setCurrentEvent] = useState()
    const [UpdateFormData, setUpdateFormData] = useState({
        name: "",
        description: "",
        date: "",
        image: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdateFormData((prevdata) => ({
            ...prevdata,
            [name]: value,
        }))
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setNewSelectedImage(reader.result);
            console.log(reader)
            setUpdateFormData((prevData) => ({
                ...prevData,
                image: reader.result
            }))
        }
        if (file) {
            reader.readAsDataURL(file);
        }

    }


    const updateEvent = (event) => {
        setUpdateFormData({
            name: event.name,
            description: event.description,
            date: event.date,
            image: event.image
        })
        setCurrentEvent(event);
        setIsEditModalOpen(true);
    }


    const deleteEvent = async (event) => {
        console.log("Im working deleteItem!");
        console.log("eventId => ", event._id);
        try {
            const data = { eventId: event._id }
            const endpoint = `${process.env.NEXT_PUBLIC_HOST}/api/event/deleteevent`;
            const res = await axios.post(endpoint, { data: data });
            const result = res.data;
            if (result.success) {
                const newEventList = res.data.newEventList;
                setEventList(newEventList);
            }
            else {
                console.log("Error occurred!")
            }

        } catch (error) {
            console.log({ error: "Some Error Occurred!" })
        }

    }


    const handleNewSubmit = async (e) => {
        e.preventDefault();
        // console.log("eventId => ", event._id);
        console.log("Form data =>", UpdateFormData);
        try {
            const data = { eventId: currentEvent._id, UpdateFormData: UpdateFormData }
            const endpoint = `${process.env.NEXT_PUBLIC_HOST}/api/event/updateevent`;
            const res = await axios.post(endpoint, { data: data });
            const result = res.data;
            if (result.success) {
                console.log("Successfully updated!");
                setIsEditModalOpen(false);
            }
            else {
                console.log("Error occurred!")
            }

        } catch (error) {
            console.log({ error: "Some Error Occurred!" })
        }
    }



    return (

        <>

            <div className='grid gap-10 mb-4 md:grid-cols-4 my-2'>

                <div
                    className={`overlay ${isEditModalOpen ? 'block' : 'hidden'} fixed inset-0 bg-gray-900 opacity-50`}
                    onClick={() => { setIsEditModalOpen(false) }}
                >
                </div>

                {EventList && EventList.map((event, index) => (
                    <>
                        <div key={index}>

                            <div className="flex flex-col justify-center items-center max-w-60 max-h-fit bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                                <div className='flex w-60 h-36'>
                                    <img className="rounded-t-lg object-cover object-top" src={event?.image || '/slider/aatma.png'} alt="" />
                                </div>

                                <div className="p-5">

                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{event.name}</h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{event?.description.slice(0, 50)}...</p>

                                    <div className='flex flex-row space-x-2'>
                                        <button onClick={() => { updateEvent(event) }} className="flex flex-row justify-center w-fit mx-2 items-center px-3 py-2 text-sm font-medium text-center
                                     text-white bg-orange-400 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300
                                      dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            <FaRegEdit className='mx-2' size={18} />
                                            Edit
                                        </button>

                                        <button onClick={() => { deleteEvent(event) }} className="flex flex-row justify-center w-fit mx-2 items-center px-2 py-2 text-sm font-medium text-center
                                     text-white bg-red-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300
                                      dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            <MdDeleteOutline className='mx-2' size={18} />
                                            Delete
                                        </button>

                                    </div>

                                </div>

                            </div>

                        </div>
                    </>
                ))}




                {/* <!-- Main modal --> */}
                <div id="crud-modal" tabindex="-1" aria-hidden="true" className={`${isEditModalOpen ? '' : 'hidden'}
                         overflow-y-auto overflow-x-hidden min-h-screen min-w-full bg-blend-overlay fixed inset-1`}>
                    <div className="flex items-center justify-center min-h-screen">
                        {/* <!-- Modal content --> */}
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            {/* <!-- Modal header --> */}
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    Update Event
                                </h3>
                                <button onClick={() => { setIsEditModalOpen(false) }} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span className="sr-only" >Close modal</span>
                                </button>
                            </div>
                            {/* <!-- Modal body --> */}
                            <form className="p-4 md:p-5" onSubmit={handleNewSubmit}>
                                <div className="grid gap-4 mb-4 grid-cols-2">

                                    
                                    <div className="col-span-2">
                                        <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                        <input type="text" name="name" value={UpdateFormData.name} onChange={handleChange} id="name"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600
                                     focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400
                                      dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required="" />
                                    </div>

                                    <div className="col-span-2">
                                        <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Description</label>
                                        <textarea id="description" name='description' value={UpdateFormData.description} onChange={handleChange} rows="4"
                                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300
                                     focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400
                                      dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Write product description here"></textarea>
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Event Date</label>
                                        <input autoComplete="aa" name='date' value={UpdateFormData.date} onChange={handleChange} type="text" id="date"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                                     focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                      dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="12-Jan-2024" required />
                                    </div>

                                    <div className='mb-4'>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload Poster</label>
                                        <input onChange={handleImageChange} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" />
                                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                                    </div>




                                </div>
                                <button type="submit" className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                {/* Closed Modal */}




            </div>
        </>
    )
}

export default EventItem