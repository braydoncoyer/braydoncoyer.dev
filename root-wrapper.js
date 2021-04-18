/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/display-name */
import { MDXProvider } from '@mdx-js/react';
import { preToCodeBlock } from 'mdx-utils';
import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { Code } from './src/components/code';
import Blockquote from './src/components/blockquote';
import Thoughtquote from './src/components/thoughtquote';
import Ideaquote from './src/components/ideaquote';
import Infoquote from './src/components/infoquote';
import Warningquote from './src/components/warningquote';
import './src/styles/language-tabs.css';

const shortcodes = {
  Blockquote,
  Thoughtquote,
  Ideaquote,
  Infoquote,
  Warningquote,
};

const components = {
  a: (props) => (
    <OutboundLink
      className="text-emerald-500 hover:text-emerald-600 dark:text-emerald-400 dark:hover:text-emerald-500"
      {...props}
    />
  ),
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
    <code
      className="py-0.5 px-1 rounded bg-coolGray-100 dark:text-coolGray-400 dark:bg-blueGray-800"
      style={{ fontFamily: 'MonoLisa' }}
    >
      {children}
    </code>
  ),
  blockquote: ({ children }) => <Blockquote>{children}</Blockquote>,
  // eslint-disable-next-line jsx-a11y/alt-text
  img: (props) => <img className="w-full rounded-lg" {...props} />,
  pre: (preProps) => {
    const props = preToCodeBlock(preProps);

    if (props) {
      return <Code {...props} />;
    }

    return <pre {...preProps} />;
  },
  ...shortcodes,
};
const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
);

export { wrapRootElement };
