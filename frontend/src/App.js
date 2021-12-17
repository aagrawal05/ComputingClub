import React, { useState, useEffect } from "react";

import { Dropdown } from "./components/Dropdown";
import { Editor } from "./components/Editor";
import { Testcases } from "./components/Testcases";
import { Terminal } from "./components/Terminal";

import * as themes from "react-syntax-highlighter/dist/esm/styles/hljs";
import * as languages from "react-syntax-highlighter/dist/esm/languages/hljs";

import "./App.css";

const defaultLanguage = `${"javascript" || Object.keys(languages).sort()[0]}`;
const defaultTheme = `${"atomOneDark" || Object.keys(themes).sort()[0]}`;

export default function App() {
  const [language, setLanguage] = useState(defaultLanguage);
  const [theme, setTheme] = useState(defaultTheme);
  const [submit, setSubmit] = useState(false);

  return (
    <div className="App">
      <p></p>
      <div className="ControlsBox">
        <Dropdown
          defaultTheme={defaultLanguage}
          onChange={(e) => setLanguage(e.target.value)}
          data={languages}
        />
        <Dropdown
          defaultTheme={defaultTheme}
          onChange={(e) => setTheme(e.target.value)}
          data={themes}
        />
      </div>
      <Editor language={language} theme={themes[theme]}/>
      <div className="PanelsBox">
        <Testcases />
        <Terminal />
      </div>
    </div>
  );
}
