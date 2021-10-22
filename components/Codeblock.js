import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

export const CodeBlock = ({code}) => {
    const CODE = "export const MessageList = () => {\n\tconst { messages } = useFeed(); // Retrieve messages from database\n\n\treturn (\n\t\t<ul>\n\t\t  {messages && messages.map((message) => <Message message={message} />)}\n\t\t</ul>\n\t)\n}";
  return (
      <SyntaxHighlighter language="jsx" style={dracula} showLineNumbers={true} wrapLines={true}>
          {code}
      </SyntaxHighlighter>
  )
};
