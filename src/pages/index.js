import React from 'react';
import { ThemeProvider } from '../helpers/themeContext';
import { Toggle } from '../components/toggle';

export default function Home() {
  return (
    <ThemeProvider>
      <Toggle />
      <div className="mt-0 bg-primary text-primary">
        <h1 className="text-6xl font-semibold">Hi, I'm Braydon</h1>
        <h4 className="text-base">
          I'm a senior full stack engineer with a passion for everything
          front-end
        </h4>
        <div>some content here</div>
      </div>
    </ThemeProvider>
  );
}
