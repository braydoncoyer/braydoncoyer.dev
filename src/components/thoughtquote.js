import React from 'react';
import { RiBubbleChartLine } from 'react-icons/ri';

const styles = {
  float: 'left',
  position: 'absolute',
  top: '-15px',
  left: '-18px',
  padding: '7px 0px 0px 6px',
};

const Thoughtquote = ({ children }) => (
  <div className="px-8 py-6 mb-6 rounded-lg border-l-4 leading-relaxed dark:text-coolGray-300 relative border-violet-500 bg-violet-500 bg-opacity-10">
    <div
      className="text-center bg-white dark:bg-coolGray-900 rounded-full w-10 h-10 flex items-center justify-center"
      style={styles}
    >
      <RiBubbleChartLine className="text-2xl dark:text-violet-500" />
    </div>
    <div className="p-0 m-0">{children}</div>
  </div>
);

export default Thoughtquote;
