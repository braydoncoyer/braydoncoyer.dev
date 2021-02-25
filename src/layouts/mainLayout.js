import React from 'react';
import Footer from '~components/footer';
import { ThemeProvider } from '~helpers/themeContext';
import Nav from '~components/nav';

const Layout = (props) => {
  const { children } = props;
  return (
    <div>
      <ThemeProvider>
        <body className="bg-white dark:bg-coolGray-900">
          <div className="min-h-screen px-4 mx-auto max-w-screen-sm md:max-w-2xl flex flex-col">
            <Nav />
            <main className="flex-grow">{children}</main>
            <div className="mt-6">
              <Footer />
            </div>
          </div>
        </body>
      </ThemeProvider>
    </div>
  );
};

export default Layout;
