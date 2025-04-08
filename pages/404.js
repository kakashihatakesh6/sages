import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Dynamically import framer-motion with SSR disabled
const motion = dynamic(() => import('framer-motion').then(mod => mod.motion), { ssr: false });

export default function Custom404() {
    const router = useRouter();
    const [countdown, setCountdown] = useState(10);
    // Client-side only state to track if we're in the browser
    const [isClient, setIsClient] = useState(false);

    // Set isClient to true when component mounts (client-side only)
    useEffect(() => {
        setIsClient(true);
    }, []);

    // Countdown effect to automatically redirect after 10 seconds
    useEffect(() => {
        const timer = countdown > 0 && setTimeout(() => setCountdown(countdown - 1), 1000);
        if (countdown === 0) {
            router.push('/');
        }
        return () => clearTimeout(timer);
    }, [countdown, router]);

    // Render a simplified version during server-side rendering
    if (!isClient) {
        return (
            <>
                <Head>
                    <title>Page Not Found - SAGES, Bhopalpatnam</title>
                    <meta name="description" content="Page not found" />
                </Head>
                <div className="min-h-screen flex flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
                    <p className="mt-4">The page you are looking for might have been removed or is temporarily unavailable.</p>
                    <div className="mt-8">
                        <Link href="/" className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg">
                            Return to Home
                        </Link>
                    </div>
                </div>
            </>
        );
    }

    // Use the full version with motion components only on the client side
    return (
        <>
            <Head>
                <title>Page Not Found - SAGES, Bhopalpatnam</title>
                <meta name="description" content="Page not found" />
            </Head>

            <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-indigo-100 px-4 overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-200 rounded-full opacity-20 animate-pulse" 
                    style={{ animationDuration: '3s' }}></div>
                <div className="absolute bottom-10 right-10 w-32 h-32 bg-indigo-200 rounded-full opacity-20 animate-pulse"
                    style={{ animationDuration: '4s' }}></div>
                
                {/* Animated Number */}
                <motion.div 
                    className="absolute opacity-5 text-[400px] font-bold text-indigo-900"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.05 }}
                    transition={{ duration: 0.8 }}
                >
                    404
                </motion.div>

                <div className="z-10 max-w-xl w-full bg-white bg-opacity-90 rounded-2xl shadow-xl overflow-hidden backdrop-blur-sm">
                    <div className="p-8 md:p-12">
                        <div className="flex justify-center mb-6">
                            <motion.div
                                initial={{ rotateY: 0 }}
                                animate={{ rotateY: 360 }}
                                transition={{ duration: 1.5, delay: 0.3 }}
                                className="w-32 h-32 relative"
                            >
                                <Image 
                                    src="/slider/aatma.png" 
                                    alt="SAGES Logo" 
                                    width={120} 
                                    height={120}
                                    className="rounded-full border-4 border-indigo-100 shadow-md object-cover"
                                />
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-3xl md:text-4xl font-bold text-center text-indigo-800 mb-6">
                                Oops! Page Not Found
                            </h1>
                            
                            <p className="text-gray-600 text-center mb-8">
                                The page you are looking for might have been removed, had its name changed, 
                                or is temporarily unavailable.
                            </p>
                            
                            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link href="/" className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-300 w-full md:w-auto">
                                        Return to Home
                                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                        </svg>
                                    </Link>
                                </motion.div>
                                
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <button 
                                        onClick={() => router.back()} 
                                        className="inline-flex items-center justify-center px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg border border-indigo-200 hover:bg-indigo-50 transition-colors duration-300 w-full md:w-auto"
                                    >
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                        </svg>
                                        Go Back
                                    </button>
                                </motion.div>
                            </div>
                        </motion.div>
                        
                        <div className="mt-8 text-center">
                            <p className="text-sm text-gray-500">
                                Redirecting to home page in <span className="font-semibold text-indigo-600">{countdown}</span> seconds
                            </p>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2 overflow-hidden">
                                <div 
                                    className="bg-indigo-600 h-2.5 rounded-full transition-all duration-1000 ease-linear"
                                    style={{ width: `${(countdown / 10) * 100}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Floating Objects */}
                <motion.div 
                    className="absolute -top-16 right-1/4 text-indigo-900 opacity-20"
                    animate={{ 
                        y: [0, 20, 0], 
                        rotate: [0, 5, 0]
                    }}
                    transition={{ 
                        repeat: Infinity,
                        duration: 6,
                        ease: "easeInOut"
                    }}
                >
                    <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                </motion.div>
                
                <motion.div 
                    className="absolute bottom-10 left-1/4 text-yellow-500 opacity-30"
                    animate={{ 
                        y: [0, -30, 0], 
                        rotate: [0, -10, 0]
                    }}
                    transition={{ 
                        repeat: Infinity,
                        duration: 7,
                        ease: "easeInOut"
                    }}
                >
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 3L1 9l11 6 11-6-11-6zM1 9v6l11 6 11-6V9"></path>
                    </svg>
                </motion.div>
            </div>
        </>
    );
} 