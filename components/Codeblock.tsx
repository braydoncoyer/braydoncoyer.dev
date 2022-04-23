import Highlight, { defaultProps } from 'prism-react-renderer';

import { Language } from '@/lib/types';
import { useCopyToClipboard } from '@/lib/hooks/useCopyToClipboard';

type Props = {
  code: string;
  language: Language;
  metastring?: string;
};

const RE = /{([\d,-]+)}/;

const calculateLinesToHighlight = (meta) => {
  if (!RE.test(meta)) {
    return () => false;
  }
  const lineNumbers = RE.exec(meta)[1]
    .split(`,`)
    .map((v) => v.split(`-`).map((x) => parseInt(x, 10)));
  return (index) => {
    const lineNumber = index + 1;
    const inRange = lineNumbers.some(([start, end]) =>
      end ? lineNumber >= start && lineNumber <= end : lineNumber === start
    );
    return inRange;
  };
};

export const CodeBlock = ({ code, language, metastring }: Props) => {
  const [isCopied, handleCopy] = useCopyToClipboard(1000, code);
  const shouldHighlightLine = calculateLinesToHighlight(metastring);

  const CopyCodeButton = (
    <button
      className={`hidden md:inline-block group ${
        isCopied ? 'text-teal-500' : 'text-gray-400'
      }`}
      onClick={() => handleCopy()}
    >
      <span className="sr-only">Copy code</span>
      <svg
        aria-hidden="true"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        className="stroke-current transform group-hover:rotate-[-4deg] transition"
      >
        <path
          d="M12.9975 10.7499L11.7475 10.7499C10.6429 10.7499 9.74747 11.6453 9.74747 12.7499L9.74747 21.2499C9.74747 22.3544 10.6429 23.2499 11.7475 23.2499L20.2475 23.2499C21.352 23.2499 22.2475 22.3544 22.2475 21.2499L22.2475 12.7499C22.2475 11.6453 21.352 10.7499 20.2475 10.7499L18.9975 10.7499"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M17.9975 12.2499L13.9975 12.2499C13.4452 12.2499 12.9975 11.8022 12.9975 11.2499L12.9975 9.74988C12.9975 9.19759 13.4452 8.74988 13.9975 8.74988L17.9975 8.74988C18.5498 8.74988 18.9975 9.19759 18.9975 9.74988L18.9975 11.2499C18.9975 11.8022 18.5498 12.2499 17.9975 12.2499Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M13.7475 16.2499L18.2475 16.2499"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M13.7475 19.2499L18.2475 19.2499"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <g
          className={`transition-opacity ${
            isCopied
              ? 'opacity-100 transform rotate-[-4deg] transition'
              : 'opacity-0'
          }`}
        >
          <path
            d="M15.9975 5.99988L15.9975 3.99988"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M19.9975 5.99988L20.9975 4.99988"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M11.9975 5.99988L10.9975 4.99988"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </g>
      </svg>
    </button>
  );
  return (
    <div>
      <Highlight
        {...defaultProps}
        code={code}
        language={language}
        theme={undefined}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <div className="relative not-prose">
            <pre className={`rounded-xl ${className}`} style={style}>
              <div className="relative flex text-xs leading-6 text-slate-400">
                <div className="flex flex-auto pt-2 overflow-hidden rounded-tr-xl">
                  <div className="flex-auto -ml-px border rounded-tr bg-slate-700/50 border-slate-500/30"></div>
                </div>
                <div className="flex items-center flex-none px-4 py-1 mt-2 text-teal-400 border-t border-b border-t-transparent border-b-teal-400">
                  {JSON.stringify(language).replace(/['"]+/g, '').toUpperCase()}
                </div>
                <div className="absolute flex items-center h-8 pl-4 right-28 top-[9px]">
                  <div className="relative flex -mr-2">{CopyCodeButton}</div>
                </div>
              </div>
              <div className="w-auto px-5 pb-5 overflow-auto prose">
                {tokens.map((line, i) => {
                  const lineProps = getLineProps({ line, key: i });

                  if (shouldHighlightLine(i)) {
                    lineProps.className = `${lineProps.className} highlight-line`;
                  }

                  return (
                    <div key={i} {...lineProps}>
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token, key })} />
                      ))}
                    </div>
                  );
                })}
              </div>
            </pre>
          </div>
        )}
      </Highlight>
    </div>
  );
};
