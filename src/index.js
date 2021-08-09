// @flow
import "preact/debug";
import {h, Fragment, render} from "preact";
import {useState, useEffect} from "preact/hooks";
import styled, {createGlobalStyle} from "styled-components";
import reset from "minireset.css";
import {Calendar} from "./cal";
import {set_language} from "./t";


// FIXME auto-detect; localStorage

set_language("dg");

const App = () => {
  return <>
    <GlobalStyle/>
    <Box>
        <p>
          A paragraph of text in Latin script.
          なみすけは、東京都杉並区の公式マスコットキャラクター。
        </p>
    </Box>
    <Center>
      <Calendar/>
    </Center>
  </>;
};

const x = 42;
const y = "a";
const z = x + y;

const Box = styled.div`
  border: 1px solid var(--red);
  padding: 10px;
`;

const Center = styled.div`
  width: 718px;
  margin: auto;
`;

const GlobalStyle = createGlobalStyle`
${ reset }

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
  margin: 0;
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
