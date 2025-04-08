import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Dynamically import framer-motion with SSR disabled
const motion = dynamic(() => import('framer-motion').then(mod => mod.motion), { ssr: false });

// Custom Error component that handles both client and server errors
function Error({ statusCode }) {
    const router = useRouter();
    const [countdown, setCountdown] = useState(15);
    // Client-side only state to track if we're in the browser
    const [isClient, setIsClient] = useState(false);

    // Set isClient to true when component mounts (client-side only)
    useEffect(() => {
        setIsClient(true);
    }, []);

    // Determine appropriate content based on status code
    const errorContent = {
        title: statusCode 
            ? `Error ${statusCode}` 
            : 'An Error Occurred',
        message: statusCode
            ? getErrorMessage(statusCode)
            : 'An unexpected error has occurred. Please try again later.',
        bgGradient: statusCode === 404
            ? 'from-blue-50 to-indigo-100'
            : statusCode >= 500
                ? 'from-red-50 to-orange-50'
                : 'from-amber-50 to-yellow-100',
        buttonColor: statusCode === 404
            ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
            : statusCode >= 500
                ? 'bg-red-600 hover:bg-red-700 text-white'
                : 'bg-amber-600 hover:bg-amber-700 text-white',
        accentColor: statusCode === 404
            ? 'indigo'
            : statusCode >= 500
                ? 'red'
                : 'amber',
        icon: statusCode === 404
            ? '🔍'
            : statusCode >= 500
                ? '⚙️'
                : '⚠️'
    };

    // Countdown effect to automatically redirect after 15 seconds
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
                    <title>{errorContent.title} - SAGES, Bhopalpatnam</title>
                    <meta name="description" content={`Error ${statusCode || ''}`} />
                </Head>
                <div className="min-h-screen flex flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold">{errorContent.title}</h1>
                    <p className="mt-4">{errorContent.message}</p>
                    <div className="mt-8">
                        <Link href="/" className={`px-6 py-3 ${errorContent.buttonColor} font-medium rounded-lg`}>
                            Return to Home
                        </Link>
                    </div>
                </div>
            </>
        );
    }

    // Full version with motion components used only on client side
    return (
        <>
            <Head>
                <title>{errorContent.title} - SAGES, Bhopalpatnam</title>
                <meta name="description" content={`Error ${statusCode || ''}`} />
            </Head>

            <div className={`relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b ${errorContent.bgGradient} px-4 overflow-hidden`}>
                {/* Decorative Elements */}
                <div className={`absolute top-10 left-10 w-20 h-20 bg-${errorContent.accentColor}-200 rounded-full opacity-20 animate-pulse`}
                    style={{ animationDuration: '3s' }}></div>
                <div className={`absolute bottom-10 right-10 w-32 h-32 bg-${errorContent.accentColor}-200 rounded-full opacity-20 animate-pulse`}
                    style={{ animationDuration: '4s' }}></div>
                
                {/* Animated Number */}
                <motion.div 
                    className={`absolute opacity-5 text-[400px] font-bold text-${errorContent.accentColor}-900`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.05 }}
                    transition={{ duration: 0.8 }}
                >
                    {statusCode || '!'}
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
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <motion.div
                                        animate={{ 
                                            rotate: [0, 15, 0, -15, 0],
                                        }}
                                        transition={{ 
                                            repeat: Infinity,
                                            duration: 2,
                                            ease: "easeInOut"
                                        }}
                                        className="text-5xl"
                                    >
                                        {errorContent.icon}
                                    </motion.div>
                                </div>
                                <Image 
                                    src="/slider/aatma.png" 
                                    alt="SAGES Logo" 
                                    width={120} 
                                    height={120}
                                    className={`rounded-full border-4 border-${errorContent.accentColor}-100 shadow-md object-cover opacity-50`}
                                />
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className={`text-3xl md:text-4xl font-bold text-center text-${errorContent.accentColor}-800 mb-6`}>
                                Oops! {errorContent.title}
                            </h1>
                            
                            <p className="text-gray-600 text-center mb-8">
                                {errorContent.message}
                            </p>
                            
                            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link href="/" className={`inline-flex items-center justify-center px-6 py-3 ${errorContent.buttonColor} font-medium rounded-lg transition-colors duration-300 w-full md:w-auto`}>
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
                                        className={`inline-flex items-center justify-center px-6 py-3 bg-white text-${errorContent.accentColor}-600 font-medium rounded-lg border border-${errorContent.accentColor}-200 hover:bg-${errorContent.accentColor}-50 transition-colors duration-300 w-full md:w-auto`}
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
                                Redirecting to home page in <span className={`font-semibold text-${errorContent.accentColor}-600`}>{countdown}</span> seconds
                            </p>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2 overflow-hidden">
                                <div 
                                    className={`bg-${errorContent.accentColor}-600 h-2.5 rounded-full transition-all duration-1000 ease-linear`}
                                    style={{ width: `${(countdown / 15) * 100}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Floating Animated Elements */}
                <motion.div 
                    className={`absolute -top-16 right-1/4 text-${errorContent.accentColor}-900 opacity-20`}
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
                        <path d="M12 16a1 1 0 100-2 1 1 0 000 2zm10.67 1.47l-8.05-14a3 3 0 00-5.24 0l-8.05 14A3 3 0 004 22h16a3 3 0 002.67-4.53zM6.23 18l5.24-9.15a1 1 0 011.74 0L18.45 18H6.23z"></path>
                    </svg>
                </motion.div>
                
                <motion.div 
                    className={`absolute bottom-10 left-1/4 text-${errorContent.accentColor}-500 opacity-30`}
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
                        <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z"></path>
                    </svg>
                </motion.div>
            </div>
        </>
    );
}

// Get specific error messages based on status code
function getErrorMessage(statusCode) {
    switch (statusCode) {
        case 400:
            return 'Bad request. The server cannot process the request due to a client error.';
        case 401:
            return 'Unauthorized. You need to be authenticated to access this resource.';
        case 403:
            return 'Forbidden. You do not have permission to access this resource.';
        case 404:
            return 'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.';
        case 500:
            return 'We\'re experiencing some technical difficulties on our end. Our team has been notified and is working to fix the issue.';
        case 502:
            return 'Bad gateway. The server received an invalid response from an upstream server.';
        case 503:
            return 'Service unavailable. The server is temporarily unable to handle the request.';
        case 504:
            return 'Gateway timeout. The server did not receive a timely response from an upstream server.';
        default:
            return 'An unexpected error has occurred. Please try again later.';
    }
}

// This gets called on server-side
Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
};

export default Error; 