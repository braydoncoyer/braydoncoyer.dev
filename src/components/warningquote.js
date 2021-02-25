import React from 'react';
import { TiWarningOutline } from 'react-icons/ti';

const styles = {
  float: 'left',
  position: 'absolute',
  top: '-15px',
  left: '-18px',
  padding: '7px 0px 0px 6px',
};

const Warningquote = ({ children }) => (
  <div className="px-8 py-6 mb-6 rounded-lg border-l-4 leading-relaxed dark:text-coolGray-300 relative border-rose-500 bg-rose-500 bg-opacity-10">
    <div
      className="text-center bg-white dark:bg-coolGray-900 rounded-full w-10 h-10 flex items-center justify-center"
      style={styles}
    >
      <TiWarningOutline className="text-2xl dark:text-rose-500" />
    </div>
    <div className="p-0 m-0">{children}</div>
  </div>
);

export default Warningquote;
