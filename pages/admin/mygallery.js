import React, { useState } from 'react'
import Sidebar from './compo/layout/Sidebar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyGallery = () => {
    const [selectedImages, setselectedImages] = useState(null);

    //Set Form data
    const [FormData, setFormData] = useState({
        name: "",
        category: "",
        images: []
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        console.log("uploaded files before =>", files);

        const promises = files.map((file) => {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();

                reader.onload = (e) => {
                    resolve(e.target.result);
                };

                reader.onerror = (error) => {
                    reject(error);
                };

                reader.readAsDataURL(file);
            })
        });

        Promise.all(promises).then((base64Images) => {
            setselectedImages(base64Images);
            setFormData((prevData) => ({
                ...prevData,
                images: base64Images
            }))

        }).catch((error) => {
            console.error('Error coverting to base64:', error);
        })
    }

    const renderImagePreviews = () => {
        return selectedImages.map((image64, index) => (
            <div key={index}>
                <img src={image64} alt={`Preview ${index}`} style={{ width: '100px', height: 'auto' }} />
            </div>
        ))
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (FormData.name !== "") {
            let data = FormData;
            console.log("data =>", data);
            let endPoint = `${process.env.NEXT_PUBLIC_HOST}/api/addgalleryimages`;

            try {
                let res = await fetch(endPoint, {
                    method: "POST",
                    headers: {
                        'Content-type': "application/json",
                        "Access-Control-Allow-Origin": "*",
                    },
                    body: JSON.stringify(data),
                });

                let result = await res.json();
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

                    setFormData({ name: "", category: "", images: [] });
                    setselectedImages(null);

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
                        <h2 className='flex mb-4 text-3xl font-semibold'>Add Gallery Images</h2>
                        <form onSubmit={handleSubmit}>
                            <div className='mb-4'>
                                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gallery Category</label>
                                <input autoComplete="aa" name='name' value={FormData.name} onChange={handleChange} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Summer Dive" required />
                            </div>

                            <div className='mb-4'>
                                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                                <select name='category' value={FormData.category} onChange={handleChange} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
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
                                <input onChange={handleImageChange} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" multiple />
                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px) All Images size should be less than 1mb.</p>
                            </div>

                            <div className='flex flex-row space-x-2 mx-2 my-2'>
                                {selectedImages !== null && renderImagePreviews()}
                            </div>


                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 
                            focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm
                             w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700
                              dark:focus:ring-blue-800">Upload</button>

                        </form>


                    </div>
                </div>
            </div >





        </div >
    )
}

export default MyGallery