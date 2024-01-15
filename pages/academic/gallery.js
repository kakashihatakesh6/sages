// import Gallery from '@/models/Gallery';
import axios from 'axios';
import mongoose from 'mongoose';
import React, { useEffect, useState } from 'react'

const MyGallery = ({ myGallery }) => {
    const [GalleryList, setGalleryList] = useState([]);
    const [MyGalleryList, setMyGalleryList] = useState();

    useEffect(() => {

        // setMyGalleryList(myGallery);

        const fetchGallery = async () => {
            const endpoint = `${process.env.NEXT_PUBLIC_HOST}/api/gallery/getgalleryimages`;
            try {
                let axiosConfig = {
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                        "Access-Control-Allow-Origin": "*",
                    }
                };
                const res = await axios.get(endpoint, axiosConfig);
                const result = await res.data;
                if (result.success) {
                    setGalleryList(result.GalleryList);
                }
            } catch (error) {
                console.log({ error: "Some Error Occurred" });
            }

        }

        fetchGallery();

    }, [])

    console.log("topg => ", MyGalleryList);

    // console.log("galleryImages =>", GalleryList);

    return (
        <div className='min-h-screen mt-4 p-4'>

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 space-y-3 mx-auto">

                    {GalleryList && GalleryList.map((item, index) => (
                        <div key={index} className='space-y-1'>
                            <div className="flex">
                                <h2 className='text-lg font-bold mx-2 text-blue-400'>{item.category}</h2>
                            </div>


                            <div className="flex flex-wrap -m-4">

                                {item.images.map((itemw, indexw) => (
                                    <>
                                        <div key={indexw} className="lg:w-1/4 md:w-1/2 p-4 w-full ">
                                            <a className="block relative h-48 rounded overflow-hidden border-4 border-gray-800">
                                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={itemw.image} />
                                            </a>
                                        </div>


                                    </>
                                ))}


                            </div>

                            <div className="flex w-full bg-gray-600 justify-center">
                                <button className='text-xl font-bold mx-2 text-white bg-yellow-500 cursor-pointer w-full'>Load More</button>
                            </div>


                            <hr />

                        </div>
                    ))}


                </div>
            </section>
        </div>
    )
}

export default MyGallery

// export async function getServerSideProps(context) {
//     let myGallery;
//     try {
//         if (!mongoose.connections[0].readyState) {
//             await mongoose.connect(process.env.MONGO_URI);
//         }

//         myGallery = await Gallery.find();
//         return { props: { myGallery: JSON.parse(JSON.stringify(myGallery)) } }

//     } catch (error) {
//         console.log({error: "Server side props gallery"});
//         return { props: { } }
//     }

    
// }

