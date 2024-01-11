// components/Layout.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Layout = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // set your animation duration
    });
  }, []);

  return <div>{children}</div>;
};

export default Layout;
