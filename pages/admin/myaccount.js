import Sidebar from './compo/layout/Sidebar'
import { ToastContainer, toast } from 'react-toastify';
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';

const MyAccount = () => {
    const [selectedImage, setselectedImage] = useState(null);

    // const [disable, setDisable] = useState("")
    const [user, setUser] = useState({ value: null });

    const router = useRouter();

    //Set Form data
    const [FormData, setFormData] = useState({
        name: "",
        email: "",
        role: "",
        phone: "",
        address: "",
        image: "",
    });

    const [FormPass, setFormPass] = useState({
        password: "",
        npassword: "",
        cnpassword: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
            image: selectedImage
        }));
    };

    const handleChangePassword = (e) => {
        const { name, value } = e.target;
        setFormPass((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setselectedImage(reader.result);

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
        if (FormData.password === FormData.cpassword && FormData.name !== "" && FormData.email !== "" && FormData.password !== ""
            && FormData.role !== "" && FormData.gender !== "") {

            let data = FormData;
            let endPoint = `${process.env.NEXT_PUBLIC_HOST}/api/users/adduser`;
            console.log("Im hit", data, endPoint)

            try {
                let res = await axios.post(endPoint, {data: data})

                let result = res.data;
                console.log(result)

                if (result.success === true) {
                    console.log({ message: "User Succcessfully registered!" });
                    localStorage.setItem('token', result.token);
                    toast.success("User has been created!", {
                        position: "top-left",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });

                    setFormData({ name: "", email: "", password: "", cpassword: "", gender: "", phone: "" });

                } else {
                    toast.error(`Sorry, ${result.message}`, {
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
            console.log({ error: "Passwords must be same" });
            toast.error('Sorry, Please Enter Same Passwords', {
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
        const token = localStorage.getItem("token");
        if (!token) {
            router.push('/')
        }
        fetchData(token);

    }, [router.query])


    const fetchData = async (token) => {

        try {
            const endPoint = `${process.env.NEXT_PUBLIC_HOST}/api/users/getuser`;
            let data = { token: token }
            console.log(data)
            let axiosConfig = {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                }
              };
            let response = await axios.post(endPoint, { data: data }, axiosConfig);
            let res = response.data;

            setUser(res.user);

            console.log("Fetched User =>", res);

            setFormData((prevData) => ({
                ...prevData, name: res.user.name, email: res.user.email, role: res.user.role, phone: res.user.phone, address: res.user.address
            }))

            setselectedImage(res.user.image)

        } catch (error) {
            console.log("Some Error occurred")
        }
    }

    const handleUserSubmit = async () => {
        console.log("Form Data =>", FormData);
        try {
            const endPoint = `${process.env.NEXT_PUBLIC_HOST}/api/users/updateuser`;
            const token = localStorage.getItem("token");
            const data = {
                FormData: FormData,
                token: token
            };
            const res = await axios.post(endPoint, {data: data})

            const edata = res.data;
            console.log("HandleUserSubmitData =>", edata);
            setFormData((prevData) => ({
                ...prevData,
                name: edata.name,
                email: edata.email,
                address: edata.address,
                role: edata.role,
                phone: edata.phone
            }))
            setselectedImage(edata.image);

            toast.success("User has been updated!", {
                position: "top-left",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        catch (error) {
            console.log("Error", error);
            toast.error("response.error", {
                position: "top-left",
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


    const handlePassword = async () => {
        try {

            if (FormPass.npassword === FormPass.cnpassword) {

                const token = localStorage.getItem("token");
                const data = { token: token, FormPass: FormPass };
                let endPoint = `${process.env.NEXT_PUBLIC_HOST}/api/users/updatepassword`;

                const res = await axios.post(endPoint, {data: data});
                const response = await res.json();
                console.log("HandlePassData =>", response);

                if (response.success) {
                    toast.success("Password updated!", {
                        position: "top-left",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });

                    setFormPass((prevData) => ({
                        ...prevData,
                        password: "",
                        npassword: "",
                        cnpassword: ""

                    }))

                } else {
                    toast.error("Invalid Credentials", {
                        position: "top-left",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
            } else {
                console.log(error, "Invalid Credentials!");
                toast.error("response.error", {
                    position: "top-left",
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
            console.log("Error", error);
            toast.error("response.error", {
                position: "top-left",
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
                        {/* <h2 className='flex mb-4 text-3xl font-semibold'>Add Admin</h2> */}

                        <div className='container mx-auto my-4'>
                            <h1 className='text-3xl text-center font-bold'>Update your Account</h1>
                        </div>

                        <div className='container px-6 md:mx-18'>
                            <h2 className='font-semibold text-xl'>1. Personal Details</h2>

                            <div className="flex mx-auto my-2">

                                <div className="px-2 w-1/2">
                                    <div className="mb-4">
                                        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                                        <input value={FormData.name} onChange={handleChange} type="name" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>

                                <div className="px-2 w-1/2">

                                    {user ?
                                        (
                                            <div className="mb-4">
                                                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email <span className='font-semibold text-red-800'>(cannot be updated)</span></label>
                                                <input value={user.email} type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" readOnly />
                                            </div>
                                        ) : (
                                            <div className="mb-4">
                                                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                                <input value={FormData.email} onChange={handleChange} type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                            </div>
                                        )}

                                </div>

                            </div>

                            <div className="grid gap-6 mb-4 md:grid-cols-2 my-2">

                                <div>
                                    <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Role</label>
                                    <select name='role' value={FormData.role} onChange={handleChange} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                                        <option>Role</option>
                                        <option value="Admin">Admin</option>
                                        <option value="Teacher">Teacher</option>
                                        <option value="Non-Teaching Staff">Non-Teaching Staff</option>
                                        <option value="Principal">Principal</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                                    <input autoComplete="aa" name='phone' value={FormData.phone} onChange={handleChange} type="text" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" required />
                                </div>


                            </div>

                            <div className="px-2 w-full">
                                <div className="mb-4">
                                    <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
                                    <textarea value={FormData.address} onChange={handleChange} className='w-full bg-white rounded border border-gray-300
                                     focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 
                                     transition-colors duration-200 ease-in-out' name="address" id="address" cols="30" rows="2"></textarea>
                                </div>
                            </div>

                            <div className="px-2 w-full flex flex-row">
                                <div className='my-2 w-1/2'>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload Profie Image</label>
                                    <input onChange={handleImageChange} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" />
                                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                                </div>
                                <div className="w-1/2 preview my-auto px-5">
                                    <img src={selectedImage} alt="" style={{ width: "100px", height: "100px" }} />
                                </div>
                            </div>



                            <div className="flex justify-left my-3">
                                <Link href={''} onClick={handleUserSubmit}>
                                    <button className="flex mx-2 text-white bg-blue-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-md">
                                        Submit</button>
                                </Link>
                            </div>



                            <h2 className='font-semibold text-xl'>2. Change Password</h2>


                            <div className="flex mx-auto my-2">
                                <form className='flex w-[100%]'>

                                    <div className="px-2 w-1/3">
                                        <div className="mb-4">
                                            <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
                                            <input autoComplete='ae' value={FormPass.password} placeholder="•••••••••" onChange={handleChangePassword} type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                        </div>
                                    </div>

                                    <div className="px-2 w-1/3">
                                        <div className="mb-4">
                                            <label htmlFor="npassword" className="leading-7 text-sm text-gray-600">New Password</label>
                                            <input autoComplete='ae' value={FormPass.npassword} onChange={handleChangePassword} type="password" id="npassword" name="npassword" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                        </div>
                                    </div>

                                    <div className="px-2 w-1/3">
                                        <div className="mb-4">
                                            <label htmlFor="cnpassword" className="leading-7 text-sm text-gray-600">Confirm NewPassword</label>
                                            <input autoComplete='ae' value={FormPass.cnpassword} onChange={handleChangePassword} type="password" id="cnpassword" name="cnpassword" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                        </div>
                                    </div>
                                    
                                </form>

                            </div>


                            <div className="flex justify-left my-2">
                                <Link href={''} onClick={handlePassword}>
                                    <button className="flex mx-2 text-white bg-blue-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-md">
                                        Submit</button>
                                </Link>
                            </div>

                        </div>




                    </div>
                </div>
            </div >





        </div >
    )
}

export default MyAccount