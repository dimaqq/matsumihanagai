// @flow
import "preact/debug";
import {h, Fragment, render} from "preact";
//import type {Node} from "preact";
import styled, {createGlobalStyle} from "styled-components";

const App = (): Node =>
    <Box>
      <GlobalStyle/>
      <header className="App-header">
        <p>
          Edit blah blah blah...
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

// TODO
// figure out how to marry styled-components with preact
// figure out of flow can work with preact
// try linaria instead of styled-compo

const Box = styled.div`
  border: 5px solid var(--red);
  padding: 10px;
`;

const GlobalStyle = createGlobalStyle`
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

render(<App />, document.body);
