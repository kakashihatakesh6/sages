/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const Login = () => {
    const router = useRouter();
    const [FormData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let data = FormData;
        let endpoint = `${process.env.NEXT_PUBLIC_HOST}/api/login`;
        console.log(data)

        try {
            // let res = await axios.post(endpoint, {data: data});

            let res = await fetch(endpoint, {
                method: "POST",
                headers: {
                    'Content-type': "application/json",
                    // "Access-Control-Allow-Origin": "*",
                },
                body: JSON.stringify(data),
            });

            let mToken = await res.json();
            console.log("server res =>", mToken);

            if (mToken.success) {
                localStorage.setItem("token", mToken.token);
                toast.success("Logged in Successfully!", {
                    position: "top-left",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });

                setTimeout(() => {
                    router.push('/admin')
                }, 1000);

            } else {
                toast.error(`Sorry, Please Enter Valid Credentials!`, {
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
            console.log({ error: "error", message: "Invalid Credentials!" });
            toast.error(`Sorry, Invalid Credentials`, {
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


    return (
        <div className="flex min-h-screen flex-col justify-start px-6 py-12 lg:px-8">

            <style jsx global>{`
        .navbar {
          display: none;
        }
        footer{
          display: none;
        }
        
      `}</style>
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

            <div className="sm:mx-auto sm:w-full sm:max-w-sm pt-10">
                <Image
                    className="mx-auto"
                    src={"/logo/logo-header.jpg"}
                    width={400}
                    height={600}
                    alt="image"
                    priority="true"
                />
                <h2 className="mt-10 text-center text-xl font-bold leading-9 tracking-tight text-gray-900">
                    Login to Continue
                </h2>
            </div>

            <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" method="POST">
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Email address
                        </label>
                        <div className="mt-2">
                            <input

                                id="email"
                                name="email"
                                type="email"
                                value={FormData.email}
                                onChange={handleChange}
                                autoComplete="email"
                                required
                                className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Password
                            </label>
                            <div className="text-sm">
                                <Link
                                    href={"/forgot"}
                                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                                >
                                    Forgot password?
                                </Link>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                value={FormData.password}
                                onChange={handleChange}
                                autoComplete="current-password"
                                required
                                className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Login
                        </button>
                    </div>
                </form>

                {/* <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <Link
            href="/signup"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            {" "}
            Create a account
          </Link>
        </p> */}

            </div>
        </div>
    );
};

export default Login;
