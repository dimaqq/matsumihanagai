// @flow
import "preact/debug";
import {h, Fragment, render} from "preact";
import {useState, useEffect} from "preact/hooks";
import styled, {createGlobalStyle} from "styled-components";
import {Months} from "./cal";

const App = () => {
  return <>
    <Box>
      <GlobalStyle/>
      <header className="App-header">
        <p>
          Edit blah blah blah...
          なみすけは、東京都杉並区の公式マスコットキャラクター。
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
    </Box>
  <Box>
    Edit blah blah blah...
    なみすけは、東京都杉並区の公式マスコットキャラクター。
  </Box>
  <Box>
    Edit blah blah blah...
    なみすけは、東京都杉並区の公式マスコットキャラクター。
  </Box>
    <div>
    Edit blah blah blah...
    なみすけは、東京都杉並区の公式マスコットキャラクター。
  </div>
  <Months/>
</>;
};

const x = 42;
const y = "a";
const z = x + y;

const Box = styled.div`
  border: 1px solid var(--red);
  padding: 10px;
`;

const GlobalStyle = createGlobalStyle`
:root {
  --back: #fff;
  --backish: #aaa;
  --text: #222;
  --gray: #888;

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
  font-family: 'ヒラギノ角ゴ ProN', 'Hiragino Kaku Gothic ProN', '游ゴシック',
    '游ゴシック体', YuGothic, 'Yu Gothic', 'メイリオ', Meiryo, 'ＭＳ ゴシック',
    'MS Gothic', HiraKakuProN-W3, 'TakaoExゴシック', TakaoExGothic, 'MotoyaLCedar',
    'Droid Sans Japanese', sans-serif;
  font-weight: 400;
}
`;

render(<App />, document.body);
