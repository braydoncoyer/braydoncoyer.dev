import React from 'react';

const BrushPattern = ({ children }) => (
  <section className="paint__wrapper">
    <div className="paint__wrapper-pattern">
      <div className="pt-40 md:pt-96">{children}</div>
    </div>
  </section>
);

export default BrushPattern;
