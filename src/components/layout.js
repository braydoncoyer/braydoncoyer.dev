import React from 'react';
import Footer from './footer';
import Nav from './nav';

const Layout = ({ children }) => (
  <div>
    <Nav />
    <div className="px-4 mx-auto max-w-screen-sm md:max-w-2xl">
      {children}
      <div className="mt-10 sm:mt-16 md:mt-20">
        <Footer />
      </div>
    </div>
  </div>
);

export default Layout;
