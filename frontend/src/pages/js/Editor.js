import React, { useState, useEffect } from "react";

import { Dropdown } from "../../components/js/Dropdown";
import { IDE } from "../../components/js/IDE";
import { Testcases } from "../../components/js/Testcases";
import { Terminal } from "../../components/js/Terminal";

import * as themes from "react-syntax-highlighter/dist/esm/styles/hljs";
import * as languages from "react-syntax-highlighter/dist/esm/languages/hljs";

import "../css/Editor.css";

const defaultLanguage = `${"javascript" || Object.keys(languages).sort()[0]}`;
const defaultTheme = `${"atomOneDark" || Object.keys(themes).sort()[0]}`;

export function Editor() {
  const [language, setLanguage] = useState(defaultLanguage);
  const [theme, setTheme] = useState(defaultTheme);
  const [submit, setSubmit] = useState(false);

  return (
    <div className="Editor">
      <div className="Problem">
        <h1> Problem </h1>
        <p> Problem statement... </p>
        <br/>
        <h1> Hints </h1>
        <p> Hints... </p>
      </div>
      <div className="IDE">
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
        <IDE language={language} theme={themes[theme]}/>
        <div className="PanelsBox">
          <Testcases />
          <Terminal />
        </div>
      </div>
    </div>
  );
}
