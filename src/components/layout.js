import React from 'react';

import { ThemeProvider } from '../helpers/themeContext';
import { Toggle } from './toggle';

const Layout = ({ children }) => (
  <ThemeProvider>
    <main className="p-4 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg flex justify-center mx-auto md:p-0">
      {/* <Toggle /> */}
      <div>{children}</div>
    </main>
  </ThemeProvider>
);

export default Layout;
