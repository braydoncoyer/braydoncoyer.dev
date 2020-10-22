import React from 'react';

import { ThemeProvider } from '../helpers/themeContext';
import { Toggle } from './toggle';

const Layout = ({ children }) => (
  <ThemeProvider>
    <main className="max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg flex justify-center mx-auto">
      <Toggle />
      <div>{children}</div>
    </main>
  </ThemeProvider>
);

export default Layout;
