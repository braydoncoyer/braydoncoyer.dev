/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/display-name */
import { MDXProvider } from '@mdx-js/react';
import { preToCodeBlock } from 'mdx-utils';
import React from 'react';
import { Code } from './src/components/code';
import Blockquote from './src/components/blockquote';
import './src/styles/language-tabs.css';

const components = {
  a: (props) => <a className="text-coolGray-900 dark:text-white" {...props} />,
  h1: ({ children }) => (
    <h1 className="text-3xl lg:text-4xl font-extrabold text-coolGray-900 dark:text-white mb-4">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl lg:text-3xl font-extrabold text-coolGray-900 dark:text-white mb-4">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl lg:text-2xl font-extrabold text-coolGray-900 dark:text-white mb-4">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-lg lg:text-xl font-extrabold text-coolGray-900 dark:text-white mb-4">
      {children}
    </h4>
  ),
  h5: ({ children }) => (
    <h5 className="text-md lg:text-lg font-extrabold text-coolGray-900 dark:text-white mb-4">
      {children}
    </h5>
  ),
  h6: ({ children }) => (
    <h6 className="text-md lg:text-md font-extrabold text-coolGray-900 dark:text-white mb-4">
      {children}
    </h6>
  ),
  strong: (props) => <span className="font-bold" {...props} />,
  'p.inlineCode': ({ children }) => (
    <code className="py-0.5 px-1 rounded bg-coolGray-100 dark:text-coolGray-400 dark:bg-blueGray-800">
      {children}
    </code>
  ),
  blockquote: ({ children }) => <Blockquote>{children}</Blockquote>,
  // eslint-disable-next-line jsx-a11y/alt-text
  img: (props) => <img className="w-full" {...props} />,
  pre: (preProps) => {
    const props = preToCodeBlock(preProps);

    if (props) {
      return <Code {...props} />;
    }

    return <pre {...preProps} />;
  },
};
const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
);

export { wrapRootElement };
