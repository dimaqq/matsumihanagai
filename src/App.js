// @flow
import React from "react";
import type {Node} from "react";
import styled, {createGlobalStyle} from "styled-components";

const App = (): Node =>
    <Box>
      <GlobalStyle/>
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </Box>;

export default App;

const Box = styled.div`
  border: 5px solid var(--red);
  padding: 10px;
`;

const GlobalStyle = createGlobalStyle`
body[data-theme='light'] {
  --colors-primary: deeppink;
  --colors-background: white;
}
body[data-theme='dark'] {
  --colors-primary: lightpink;
  --colors-background: black;
}

:root {
  --back: #fff;
  --backish: #aaa;
  --text: #222;

  --red: #d00;
}

@media (prefers-color-scheme: dark) {
  :root {
    --back: #000;;
    --backish: #222;
    --text: #aaa;

    --red: #f66;
  }
}

body {
  color: var(--text);
  background-color: var(--back);
}
`;
