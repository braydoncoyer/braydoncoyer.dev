import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const styles = {
  float: 'left',
  position: 'absolute',
  top: '-15px',
  left: '-18px',
  padding: '7px 0px 0px 6px',
};

const Blockquote = ({ content }) => (
  <div className="px-8 py-1 mb-12 border-l-4 leading-relaxed dark:text-coolGray-300 relative border-emerald-500 bg-emerald-500 bg-opacity-10">
    <div
      className="text-center bg-white dark:bg-coolGray-900 rounded-full w-10 h-10 flex items-center justify-center"
      style={styles}
    >
      <FaQuoteLeft />
    </div>
    <div className="p-0 m-0 italic">{content}</div>
  </div>
);

export default Blockquote;
