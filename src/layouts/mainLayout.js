import React from 'react';
import Footer from '~components/footer';
import { ThemeProvider } from '~helpers/themeContext';
import Nav from '~components/nav';

const Layout = ({ children }) => (
  <body className="bg-white dark:bg-coolGray-900">
    <ThemeProvider>
      <Nav />
      <div className="min-h-screen px-4 mx-auto max-w-screen-sm md:max-w-2xl flex flex-col">
        <main className="flex-grow">{children}</main>
        <div className="mt-6">
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  </body>
);

export default Layout;
