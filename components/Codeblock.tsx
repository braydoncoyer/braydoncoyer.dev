import Highlight, { defaultProps } from 'prism-react-renderer';

type Props = {
  code: string;
};

export const CodeBlock = ({ code }: Props) => {
  return (
    <Highlight {...defaultProps} code={code} language="jsx">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div
              className="table-row"
              key={i}
              {...getLineProps({ line, key: i })}
            >
              <div className="table-cell text-right pr-4 select-none opacity-50">
                {i + 1}
              </div>
              <div className="table-cell">
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
