/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';

export const Code = ({ codeString, language, ...props }) => (
  <Highlight
    {...defaultProps}
    code={codeString}
    language={language}
    theme={undefined}
  >
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <div className="gatsby-highlight my-12" data-language={language}>
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              <span className="select-none opacity-30 inline-block w-8">
                {i + 1}
              </span>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      </div>
    )}
  </Highlight>
);
