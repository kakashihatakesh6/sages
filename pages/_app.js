import Footer from '@/components/Footer'
import Layout from '@/components/Layout';
import Navbar2 from '@/components/Navbar2'
import '@/styles/globals.css'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import LoadingBar from 'react-top-loading-bar';



export default function App({ Component, pageProps }) {
  const [progress, setProgress] = useState(0);
  const [key, setKey] = useState(0);

  const router = useRouter();
  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setProgress(40);
    })
    router.events.on('routeChangeComplete', () => {
      setProgress(100);
    })
  }, [router.query])


  const handleSignOut = () => {
    localStorage.removeItem('token');
    router.push('/')
    setKey(Math.random())
  }

  useEffect(() => {
    setKey(Math.random());
    return setKey(Math.random());
  }, [])
  


  return (
    <>
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(100)}
      />
      <Navbar2 key={key} handleSignOut={handleSignOut} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer />
    </>
  )
}
