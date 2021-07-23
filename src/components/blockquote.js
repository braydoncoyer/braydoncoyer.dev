import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const styles = {
  float: 'left',
  position: 'absolute',
  top: '-15px',
  left: '-18px',
  padding: '7px 0px 0px 6px',
};

const Blockquote = ({ children }) => (
  <div className="px-8 py-6 mb-6 rounded-lg border-l-4 leading-relaxed text-secondary relative border-blockquote bg-blockquote bg-opacity-10">
    <div
      className="text-center bg-primary rounded-full w-10 h-10 flex items-center justify-center"
      style={styles}
    >
      <FaQuoteLeft />
    </div>
    <div className="p-0 m-0 italic">{children}</div>
  </div>
);

export default Blockquote;
