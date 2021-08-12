// @flow
import {h, Fragment} from "preact";
import {set_language} from "./t";
import styled from "styled-components";

const DEFAULT = "ja";

const guess = name => {
  name = name || "";
  if (name.startsWith("en")) return "en";
  if (name.startsWith("ja")) return "ja";
  if (name.startsWith("dg")) return "dg";
};

const load = () => {
  set_language(guess(window.localStorage.getItem("lang")) ||
    guess(window.navigator.language) ||
    DEFAULT);
};

load();

const save = name => {
  window.localStorage.setItem("lang", name);
  window.location.reload();
};

export const Switcher = (): React$Element<any> => {
  return <>
    <butt onClick={() => save("ja")}>🇯🇵</butt>
    <butt onClick={() => save("en")}>🇬🇧</butt>
  </>;
};

const butt = styled.button`
`;
