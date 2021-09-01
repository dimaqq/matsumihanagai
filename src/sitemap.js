// @flow
import {h, Fragment} from "preact";
import styled from "styled-components";
import {wards} from "./navi";

export const SiteMap = (): React$Element<any> => {
  return <>
    { wards.map( ([code, ...names]) =>
      <div>
        <A href={`/${ code }`}>
          { names.join(" ") }
        </A>
      </div>)
    }
  </>;
};

const A = styled.a`
  appearance: none;
`;
