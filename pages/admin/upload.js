import React, { useEffect, useState } from 'react'
import Sidebar from './compo/layout/Sidebar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';


const Upload = () => {
    const [selectedImage, setselectedImage] = useState(null);
    const [SelectedFile, setSelectedFile] = useState()
    const [EventList, setEventList] = useState([]);
    const [ImageData, setImageData] = useState()
    const [Uploading, setUploading] = useState(false);


    //Set Form data
    const [MyFormData, setMyFormData] = useState({
        name: "",
        description: "",
        category: "",
        image: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMyFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
        setImageData(URL.createObjectURL(file))

        // setMyFormData((prevData) => ({
        //     ...prevData,
        //     image: formData
        // }))




        // const reader = new FileReader();
        // reader.onloadend = () => {
        //     setselectedImage(reader.result);
        //     console.log(reader)
        //     setFormData((prevData) => ({
        //         ...prevData,
        //         image: reader.result
        //     }))
        // }
        // if (file) {
        //     reader.readAsDataURL(file);
        // }

    }

    // console.log("Selected File =>", SelectedFile)
    // console.log("Selected URI File =>", ImageData)

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     if (FormData.name !== "" && FormData.description !== "") {
    //         let data = FormData;
    //         let endPoint = `${process.env.NEXT_PUBLIC_HOST}/api/uploadimage`;

    //         try {
    //             const imageData = new FormData();
    //             imageData.append('myImage', SelectedFile)
    //             let res = await axios.post(endPoint, { data: imageData })
    //             let result = res.data;
    //             console.log(result);

    //             if (result.success === true) {
    //                 console.log({ message: "Event Added Succcessfully!" });
    //                 toast.success("Event has been added!", {
    //                     position: "top-left",
    //                     autoClose: 1000,
    //                     hideProgressBar: false,
    //                     closeOnClick: true,
    //                     pauseOnHover: true,
    //                     draggable: true,
    //                     progress: undefined,
    //                     theme: "light",
    //                 });

    //                 setFormData({ name: "", description: "", date: "", image: "" });

    //             } else {
    //                 toast.error(`Sorry, Some Error Occurred`, {
    //                     position: "bottom-center",
    //                     autoClose: 1000,
    //                     hideProgressBar: false,
    //                     closeOnClick: true,
    //                     pauseOnHover: true,
    //                     draggable: true,
    //                     progress: undefined,
    //                     theme: "light",
    //                 });
    //             }

    //         } catch (error) {
    //             console.log({ error: "Registration Failed!" })
    //         }


    //     }
    //     else {
    //         console.log({ error: "Please Enter Valid Credentials!" });
    //         toast.error('Sorry, Please Enter Valid Credentials!', {
    //             position: "bottom-center",
    //             autoClose: 1000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //             theme: "light",
    //         });
    //     }
    // };

    const handleSubmit2 = async (e) => {
        e.preventDefault();

        const byteData = await SelectedFile.arrayBuffer();
        const buffer = Buffer.from(byteData);
        console.log("byteData =>", byteData)
        console.log("buffer =>", buffer);

        try {
            let formData = new FormData();
            formData.append('file', SelectedFile)
            let endPoint = `${process.env.NEXT_PUBLIC_HOST}/api/upload`;
            let res = await axios.post(endPoint, { formData });
            console.log(res)

        } catch (error) {
            console.log(error.response?.data)
        }

    }


    // useEffect(() => {
    //     const fetchEvents = async () => {
    //         const endpoint = `${process.env.NEXT_PUBLIC_HOST}/api/getevents`;
    //         try {
    //             const res = await axios.get(endpoint);
    //             const result = await res.data;
    //             if (result.success) {
    //                 setEventList(result.EventList);
    //             }
    //         } catch (error) {
    //             console.log({ error: "Some Error Occurred" });
    //         }

    //     }

    //     fetchEvents();
    // }, [])



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
                        <h2 className='flex mb-4 text-3xl font-semibold'>Upload Photos</h2>
                        <form onSubmit={handleSubmit2} action="/upload" method="post" encType="multipart/form-data">

                            <div className='mb-4'>
                                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Event Name</label>
                                <input autoComplete="aa" name='name' value={MyFormData.name} onChange={handleChange} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Summer Dive" />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                <textarea autoComplete="aa" name="description" id="message" rows="4" onChange={handleChange} value={MyFormData.description} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your Description here..."></textarea>
                            </div>


                            <div className='mb-4'>
                                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                                <select name='category' value={MyFormData.category} onChange={handleChange} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
                                    <option >Category</option>
                                    <option value="Art in Education">Art in Education</option>
                                    <option value="Cultural Activities">Cultural Activities</option>
                                    <option value="Go Green">Go Green</option>
                                    <option value="Inside the School">Inside the School</option>
                                    <option value="Sakura Science Program">Sakura Science Program</option>
                                    <option value="Scout and Guide">Scout and Guide</option>
                                    <option value="Sports">Sports</option>
                                    <option value="Yoga">Yoga</option>
                                    <option value="Youth Parliament">Youth Parliament</option>
                                </select>
                            </div>


                            




                            <div className='mb-4'>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload Poster</label>
                                <input name='myimage' onChange={handleImageChange} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" />
                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                            </div>

                            <div>
                                {ImageData ? (
                                    <img src={ImageData} alt="" />
                                ) : (
                                    <span>Select Image</span>
                                )}
                            </div>


                            <button disabled={Uploading} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 
                    focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm
                     w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700
                      dark:focus:ring-blue-800">
                                {Uploading ? (
                                    <span>Uploading</span>
                                ) : (
                                    <span>Add Event</span>
                                )}
                            </button>

                        </form>


                    </div>

                    <div className="flex mx-2">
                        {/* {EventList && EventList.length === 0 && 'No notes to display'} */}
                    </div>

                </div>


            </div >
        </div >
    )
}

export default Upload