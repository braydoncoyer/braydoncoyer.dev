import React, { useContext } from 'react';
import { HiMoon, HiSun } from 'react-icons/hi';
import { ThemeContext } from 'gatsby-plugin-theme-switcher';

const Toggle = () => {
  const { theme, switchTheme } = useContext(ThemeContext);

  const handleClick = () => {
    switchTheme(theme === 'theme-dark' ? 'theme-light' : 'theme-dark');
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="rounded-md p-2 bg-secondary"
    >
      {theme === 'theme-dark' ? (
        <HiSun className="text-secondary text-2xl cursor-pointer" />
      ) : (
        <HiMoon className="text-secondary text-2xl cursor-pointer" />
      )}
    </button>
  );
};

export default Toggle;
