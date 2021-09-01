// @flow
import "preact/debug";
import {h, Fragment, render} from "preact";
import {useState, useEffect} from "preact/hooks";
import styled, {createGlobalStyle} from "styled-components";
import reset from "minireset.css";
import {Calendar} from "./cal";
import {Switcher} from "./loc";
import {useWardCode, useWardName} from "./hooks";
import {SiteMap} from "./sitemap";

const App = () => {
  const wardName = useWardName();

  return <>
    <GlobalStyle/>
    <Box>
        <p>
          <Switcher/>
          A paragraph of text in Latin script.
          なみすけは、東京都杉並区の公式マスコットキャラクター。
        </p>
    </Box>
    <Center>
      { wardName? <Calendar/>: <SiteMap/>}
    </Center>
  </>;
};

const Title = () => {
};

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
  --grayish: #aaa;

  --red: #d00;
  --reddish: #d88;
  --green: #0d0;
  --greenish: #8d8;
}

@media (prefers-color-scheme: dark) {
  :root {
    --back: #000;;
    --backish: #222;
    --text: #aaa;
    --grayish: #444;

    --red: #f66;
    --reddish: #722;
    --green: #272;
    --greenish: #161;
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
