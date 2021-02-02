import React from 'react';
import Footer from './footer';

const Layout = ({ children }) => (
  <div className="px-4 mx-auto max-w-screen-sm md:max-w-2xl">
    {children} <Footer />
  </div>
);

export default Layout;
