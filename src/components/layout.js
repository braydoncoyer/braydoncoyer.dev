import React from 'react';
import { ThemeProvider } from '../helpers/themeContext';
import { Toggle } from './toggle';

const Layout = ({ children }) => (
  <ThemeProvider>
    <body className="bg-white dark:bg-coolGray-900 transition-all">
      <main className="px-4 flex justify-center mx-auto max-w-screen-sm md:max-w-screen-md md:p-0 lg:max-w-screen-lg xl:max-w-screen-xl">
        <div className="absolute right-0 top-0 mr-4 mt-4 md:mr-6 md:mt-6">
          <Toggle />
        </div>
        <div>{children}</div>
      </main>
    </body>
  </ThemeProvider>
);

export default Layout;
