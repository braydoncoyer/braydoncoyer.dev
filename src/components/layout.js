import React from 'react';

const Layout = ({ children }) => (
  <div className="px-4 mx-auto max-w-screen-sm md:max-w-screen-md md:p-0 lg:max-w-screen-lg xl:max-w-screen-xl">
    {children}
  </div>
);

export default Layout;
