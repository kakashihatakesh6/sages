import React, { useEffect, useState } from 'react'
import Sidebar from './compo/layout/Sidebar'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Users = () => {
    const [UsersList, setUsersList] = useState()

    useEffect(() => {

        const fetchUsers = async () => {
            const endpoint = `${process.env.NEXT_PUBLIC_HOST}/api/users/getusers`;
            try {
                // let axiosConfig = {
                //     headers: {
                //         'Content-Type': 'application/json;charset=UTF-8',
                //         "Access-Control-Allow-Origin": "*",
                //     }
                // };
                const res = await axios.post(endpoint);
                const result = await res.data;
                if (result.success) {
                    setUsersList(result.UsersList);
                }
            } catch (error) {
                console.log({ error: "Some Error Occurred" });
            }

        }

        fetchUsers();

    }, [])

    console.log("Users =>", UsersList);

    return (
        <div>

            <Sidebar />


            <div className="p-4 sm:ml-64">
                <div className="min-h-screen p-4 mt-10">

                    <section className="text-gray-600 body-font">
                        <div className="container px-5 py-2 mx-auto">

                            <div className="flex flex-col text-center w-full mb-14">
                                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Admin List</h1>
                                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">At SAGES, we take pride in our dynamic and dedicated teaching staff. Our educators are not just instructors; they are mentors, role models, and passionate advocates for the transformative power of education.</p>
                            </div>

                            <div className="flex flex-wrap -m-2">

                                {UsersList && UsersList.map((item, index) => (

                                    <div key={index} className="p-2 lg:w-1/3 md:w-1/2 w-full">
                                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={item?.image} />
                                            <div className="flex-grow">
                                                <h2 className="text-gray-900 title-font font-medium">{item.name}</h2>
                                                <p className="text-gray-500">{item.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>


                        </div>
                    </section>

                </div>
            </div>






        </div >
    )
}

export default Users