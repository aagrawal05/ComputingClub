import React, { useState } from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import "../css/IDE.css";

export const IDE = ({ language, theme }) => {
  const [ input, setInput ] =  useState("Type your code here...");
  return (
    <div className="MainEditor">
      <textarea
          className="textbox"
          onChange = {(e) => setInput(e.target.value)}
        > 
      </textarea>
      <SyntaxHighlighter
        language={language}
        style={theme}
        className="editor">
        {input}
      </SyntaxHighlighter>
    </div>
  );
};

