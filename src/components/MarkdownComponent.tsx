import React from "react";
import ReactMarkdown from "react-markdown";

interface MarkdownComponentProps {
  content: string;
  className?: string;
}

export const MarkdownComponent: React.FC<MarkdownComponentProps> = ({
  content,
  className = "",
}) => {
  return (
    <div className={`markdown-container ${className}`}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

// Add some basic styling
const styles = `
.markdown-container {
padding: 1rem;
max-width: 800px;
margin: 0 auto;
}

.markdown-container h1 {
color: #2c3e50;
font-size: 2em;
margin-bottom: 0.5em;
}

.markdown-container h2 {
color: #34495e;
font-size: 1.5em;
margin-bottom: 0.5em;
}

.markdown-container p {
line-height: 1.6;
margin-bottom: 1em;
}

.markdown-container code {
background-color: #f5f5f5;
padding: 0.2em 0.4em;
border-radius: 3px;
font-family: monospace;
}

.markdown-container pre {
background-color: #f5f5f5;
padding: 1em;
border-radius: 5px;
overflow-x: auto;
}

.markdown-container ul, .markdown-container ol {
margin-bottom: 1em;
padding-left: 2em;
}

.markdown-container blockquote {
border-left: 4px solid #cbd5e0;
padding-left: 1em;
margin-left: 0;
color: #4a5568;
}
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
