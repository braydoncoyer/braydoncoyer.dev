import React from 'react';

import { ThemeProvider } from '../helpers/themeContext';
import { Toggle } from './toggle';

const Layout = ({ children }) => (
  <ThemeProvider>
    <main className="px-4 relative max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg flex justify-center mx-auto md:p-0">
      <div className="absolute right-0 top-0 mr-4 mt-4 md:mr-0">
        <Toggle />
      </div>
      <div>{children}</div>
    </main>
  </ThemeProvider>
);

export default Layout;
