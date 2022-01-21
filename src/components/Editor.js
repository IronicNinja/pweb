import React, { useState } from "react";

import { Dropdown } from "./Dropdown";
import { TextEditor } from "./TextEditor";
import { Highlighter } from "./Highlighter";

import * as languages from "react-syntax-highlighter/dist/esm/languages/hljs";

import "../css-components/Editor.css";

export default function Editor() {
  const defaultLanguage = "javascript" || Object.keys(languages).sort()[0];

  const [input, setInput] = useState("");
  const [language, setLanguage] = useState(defaultLanguage);

  return (
    <div className="Editor">
      <div className="ControlsBox">
        <Dropdown
          defaultTheme={defaultLanguage}
          onChange={(e) => setLanguage(e.target.value)}
          data={languages}
        />
      </div>
      <div className="PanelsBox">
        <TextEditor
          placeHolder="Type your code here..."
          onChange={(e) => setInput(e.target.value)}
        />
        <Highlighter language={language}>
          {input}
        </Highlighter>
      </div>
    </div>
  );
}