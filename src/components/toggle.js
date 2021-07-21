import React, { useContext } from 'react';
import { HiMoon, HiSun } from 'react-icons/hi';
// import { ThemeContext } from '~helpers/themeContext';
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
      className="rounded-md p-2 bg-coolGray-200 hover:bg-coolGray-300 dark:bg-blueGray-800 dark:hover:bg-coolGray-700"
    >
      {theme === 'theme-dark' ? (
        <HiSun className="text-coolGray-500 dark:text-coolGray-400 text-2xl cursor-pointer" />
      ) : (
        <HiMoon className="text-coolGray-500 dark:text-coolGray-400 text-2xl cursor-pointer" />
      )}
    </button>
  );
};

export default Toggle;
