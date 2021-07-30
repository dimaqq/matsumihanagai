// @flow
import "preact/debug";
import {h, Fragment, render} from "preact";
import styled, {createGlobalStyle} from "styled-components";
import FontFaceObserver from "fontfaceobserver";

const App = () =>
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

const Box = styled.div`
  border: 5px solid var(--red);
  padding: 10px;
  font-family: Tangerine;
  font-weight: 400;
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


// evanw/esbuild#253
const main = async () => {
  const font = new FontFaceObserver("Tangerine", {weight: 400});
  console.log("start", new Date().toISOString());
  await font;
  console.log("done", new Date().toISOString());
  render(<App />, document.body);
};

main();
