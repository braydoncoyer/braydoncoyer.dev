import React from 'react';
import { HiOutlineLightBulb } from 'react-icons/hi';

const styles = {
  float: 'left',
  position: 'absolute',
  top: '-15px',
  left: '-18px',
  padding: '7px 0px 0px 6px',
};

const Ideaquote = ({ children }) => (
  <div className="px-8 py-6 mb-6 rounded-lg border-l-4 leading-relaxed dark:text-coolGray-300 relative border-yellow-400 bg-yellow-400 bg-opacity-10">
    <div
      className="text-center bg-primary rounded-full w-10 h-10 flex items-center justify-center"
      style={styles}
    >
      <HiOutlineLightBulb className="text-2xl text-amber" />
    </div>
    <div className="p-0 m-0">{children}</div>
  </div>
);

export default Ideaquote;
