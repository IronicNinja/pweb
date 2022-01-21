import { React } from 'react';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import "../css-components/Highlighter.css";

export const Highlighter = ({ language, children }) => {
    return (
        <div className="Highlighter">
            <SyntaxHighlighter
            language={language}
            showLineNumbers
            wrapLongLines
            >
            {children}
            </SyntaxHighlighter>
        </div>
    );
};