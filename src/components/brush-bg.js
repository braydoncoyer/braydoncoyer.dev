import React from 'react';
import BrushStrokeLight from '../assets/brush_strokes_light.svg';
import BrushStrokeDark from '../assets/brush_strokes_dark.svg';

const BrushPattern = ({ children }) => (
  <div>
    <div
      className="block dark:hidden min-h-screen bg-no-repeat bg-top bg-cover"
      style={{
        backgroundImage: `url(${BrushStrokeLight})`,
      }}
    >
      <div className="pt-24 md:pt-80">{children}</div>
    </div>
    {/* <div
      className="dark:block min-h-screen bg-no-repeat bg-top bg-cover"
      style={{
        backgroundImage: `url(${BrushStrokeDark})`,
      }}
    >
      <div className="pt-24 md:pt-80">{children}</div>
    </div> */}
  </div>
);

export default BrushPattern;
