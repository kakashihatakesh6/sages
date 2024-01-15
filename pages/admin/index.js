import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Sidebar from "./compo/layout/Sidebar";

const index = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);

    const [user, setUser] = useState();
    const router = useRouter();

    useEffect(() => {

        const token = localStorage.getItem('token');
        // if (!token) {
        //     router.push('/')
        // }

        if (token) {
            
            const fetchUser = async () => {
                const endpoint = `${process.env.NEXT_PUBLIC_HOST}/api/users/getuser`;
                try {
                    let axiosConfig = {
                        headers: {
                            'Content-Type': 'application/json;charset=UTF-8',
                            "Access-Control-Allow-Origin": "*",
                        }
                    };
                    const token = localStorage.getItem('token');
                    let data = {token: token};
                    const res = await axios.post(endpoint, { data: data }, axiosConfig);
                    const result = await res.data;
                    console.log("res =>", result);
                    if (result.success) {
                        setUser(result.user);
                    }
                } catch (error) {
                    console.log("Error occurred!");
                }

            }
            
            fetchUser();
        }

    }, [])

    return (
        <div>

            {/*============== Sidebar ===============*/}
            <Sidebar />

            <div className="p-4 sm:ml-64">
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                    <div className="flex flex-col align-center justify-center">

                        <section className="text-gray-600 body-font">
                            <div className="container px-5 py-6 mx-auto flex flex-col shadow-md">
                                <div className="lg:w-4/6 mx-auto">
                                    <div className="rounded-lg h-[20rem] overflow-hidden">
                                        <img alt="content" className="object-cover object-center h-full w-full" src="/slider/aatma.png" />
                                    </div>
                                    <div className="flex flex-col sm:flex-row mt-10">
                                        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8 ">
                                            <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                                    <circle cx="12" cy="7" r="4"></circle>
                                                </svg>
                                            </div>
                                            <div className="flex flex-col items-center text-center justify-center">
                                                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">{user ? user.name : ""} <br />({user ? user.role : ""})</h2>
                                                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                                                <p className="text-base">Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken gentrify portland.</p>
                                            </div>
                                        </div>
                                        <div className="sm:w-2/3 sm:pl-8 h-[70vh] overflow-y-auto sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 px-4 sm:mt-0 text-center sm:text-left">
                                            <p className="leading-relaxed text-lg mb-4"><span className='font-semibold text-blue-500 my-3'>Welcome to SAGES, Bhopalpatnam</span><br />

                                                Kolkata on 1 April 1954 was, well, a quite different city. The Independence of the country was only seven years old. India was practically reborn and so were its cities. Kolkata, still, had much more green and open expanses of land. Its southern parts were sparsely populated and this cozy community was waiting for an educational institution where learning and growing up would happen in a happy and innovative environment. A new nest that would teach their little ones to fly on confident wings.

                                                South Point School, an English-medium and co-educational school, opening its gates at 16 Mandeville Gardens on 1 April 1954, was an answer to the community’s prayers.

                                                It captured the popular imagination since the moment of its foundation. Shri Satikanta Guha and Smt. Pritylata Guha, Founder and Associate Founder of the School, nurtured earliest Pointers – just twenty in number — with an inspired mix of love, care and utmost responsibility. To help the Founders fulfil their vision and mission was a handful of dedicated teachers. And, the initial faculty was an enviable collection of stalwarts from the cultural, literary and artistic milieu of Bengal. Their genius improved manifold the ambience of creative purposefulness so that every child who crossed the gates of the early, quaint bungalow knew his or her potential would never be left unfulfilled.

                                                The School which had welcomed twenty children in a distant summer has spread its rainbow wings in much the same way as its students have. The journey, taken since 1954, has been a magical one, marked by splendid milestones. The comely bungalow soon grew into newer, bigger buildings so that it could bring more and more children into its fold. The early faculty handed the batons over to a burgeoning number of teachers who were equally committed and fully trained to keep up with the changing times. South Point High School was the first co-educational School in the city to be affiliated to the West Bengal Board of Secondary Education. The first School Final batch was sent up in 1958.

                                                April seems to be the happiest month in the evolution of South Point. On another 1 April – this time in 1960 – it was upgraded to the Higher Secondary level. The High School found a new, and the present, premises on 8 April 1970 at 82/7A Ballygunge Place. The School is now run by the South Point Education Society.

                                                The growing family of South Point has the rare distinction of winning a place in the Guinness Book of Records (1984-1992) as the world’s largest School.</p>
                                            <a className="text-indigo-500 inline-flex items-center">Learn More
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="text-gray-600 body-font overflow-hidden">
                            <div className="container px-5 py-24 mx-auto">
                                <div className="-my-8 divide-y-2 divide-gray-100">
                                    <div className="py-8 flex flex-wrap md:flex-nowrap">
                                        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                            <span className="font-semibold title-font text-gray-700">CATEGORY</span>
                                            <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
                                        </div>
                                        <div className="md:flex-grow">
                                            <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Bitters hashtag waistcoat fashion axe chia unicorn</h2>
                                            <p className="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
                                            <a className="text-indigo-500 inline-flex items-center mt-4">Learn More
                                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="py-8 flex flex-wrap md:flex-nowrap">
                                        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                            <span className="font-semibold title-font text-gray-700">CATEGORY</span>
                                            <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
                                        </div>
                                        <div className="md:flex-grow">
                                            <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Meditation bushwick direct trade taxidermy shaman</h2>
                                            <p className="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
                                            <a className="text-indigo-500 inline-flex items-center mt-4">Learn More
                                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="py-8 flex flex-wrap md:flex-nowrap">
                                        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                            <span className="font-semibold title-font text-gray-700">CATEGORY</span>
                                            <span className="text-sm text-gray-500">12 Jun 2019</span>
                                        </div>
                                        <div className="md:flex-grow">
                                            <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Woke master cleanse drinking vinegar salvia</h2>
                                            <p className="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
                                            <a className="text-indigo-500 inline-flex items-center mt-4">Learn More
                                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="text-gray-600 body-font">
                            <div className="container px-5 py-12 mx-auto">
                                <div className="flex flex-col text-center w-full mb-20">
                                    <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2>
                                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
                                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
                                </div>
                                <div className="flex flex-wrap">
                                    <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                                        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
                                        <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                                        <a className="text-indigo-500 inline-flex items-center">Learn More
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                                        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">The Catalyzer</h2>
                                        <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                                        <a className="text-indigo-500 inline-flex items-center">Learn More
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                                        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Neptune</h2>
                                        <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                                        <a className="text-indigo-500 inline-flex items-center">Learn More
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                                        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Melanchole</h2>
                                        <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                                        <a className="text-indigo-500 inline-flex items-center">Learn More
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;
