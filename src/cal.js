// @flow
import {h, Fragment} from "preact";
import {useState} from "preact/hooks";
import styled, {keyframes} from "styled-components";
import {t} from "./t";
import {usePath, useCallback} from "./hooks";
import {init_state, push_state, replace_state, pop_state} from "./history";
import {DATA} from "./data";

const MONTHS = [
  {name: "2021-08", lead: 0, len: 31},
  {name: "2021-09", lead: 3, len: 30},
  {name: "2021-10", lead: 5, len: 31},
  {name: "2021-11", lead: 1, len: 30},
  {name: "2021-12", lead: 3, len: 31},
];

export const Calendar = (): React$Element<any> => {
  const prefix = "/data";
  const path = usePath();
  const {city} = path.match(/^[/](?<city>[^/]+)[/]?/)?.groups ?? {};

  console.debug("navigation", {path, city});

  return <>
    {MONTHS.map(v => <Month {...v}/>)}
    <button onClick={() => push_state("a") }>X</button>
  </>;
};

const Month = ({name, lead, len}) => <Grid>
    <MonthName>{name}</MonthName>
    {labels().map(v => <DayName>{v}</DayName>)}
    {[...new Array(lead)].map(() => <Day blank/>)}
    {[...new Array(len)].map((_, i) => <Day mo={name} d={i}/>)}
  </Grid>;

const labels = () => [t`Sun`, t`Mon`, t`Tue`, t`Wed`, t`Thu`, t`Fri`, t`Sat`];

const Box = styled.div`
  border: 1px solid green;
  display: flex;
  flex-direction: column;
`;

const Grid = styled.div`
  flex: none;
  display: grid;
  grid-template-columns: repeat(7, 100px);
  grid-template-rows: 40px 40px repeat(6, 100px);
  gap: 3px;
`;

const Day = ({mo, d, blank}: {mo?: string, d?: number, blank?: bool}) => {
  const [loading, load] = useState(false);
  const [up, setup] = useState(false);

  if (blank) return <Cell blank/>;
  if (mo === undefined || d === undefined) throw new Error("Aargh!");

  const date = `${ mo }-${ (1e2 + d + "").slice(-2) }`;
  const path = `/data/42/${ date }`;
  const datum = DATA[path] ?? {};
  const free = datum.use < datum.tot;

  const updated = datum => {
    setup(!up);
    console.log(datum);
  };
  useCallback(path, updated);

  return <Cell free={free} up={up}>
    <DayNo>{ d }</DayNo>
    {loading?"L":"R"}
    <div>xxx</div>
  </Cell>;
};

const DayNo = styled.div`
  position: relative;
  width: 2em;
  padding-left: .25em;
  top: 0px;
  left: 0px;
  /*border: 1px dashed firebrick;*/
  font-size: 20px;
`;

const Refresh = styled.button`
`;

const Cell = styled.div`
  border: 3px solid var(${
    props => props.blank?
      "--grayish":
      props.free?
      "--greenish":
        "--reddish" });
  background-color: color-mix(in srgb, var(${
    props => props.blank?
      "--grayish":
        props.free?
        "--greenish":
          "--reddish" }) 20%, var(--back));

  xbackground-image: linear-gradient(to right, transparent, gold, transparent);
  background-image: linear-gradient(to right,
    transparent,
    #00000004, #0000, #fff8, #fff8, #0000, #00000004,
    transparent);
  background-blend-mode: saturation;
  background-size: 50% 1px;
  background-repeat: repeat-y;
  background-position: -100% 50%;
  animation: ${ props => props.up?update1:update2 } .3s linear;
`;

const Test = styled.div`
  background-image: linear-gradient(to right,
    transparent,
    #00000004, #0000, #fff8, #fff8, #0000, #00000004,
    transparent);
  background-blend-mode: ${ props => props.mode };
  background-size: 50% 1px;
  background-repeat: repeat-y;
  background-position: 5% 50%;
`;

const MonthName = styled.div`
  grid-column: 1/8;
  text-align: center;
  font-weight: 600;
  background: var(--backish);
`;

const DayName = styled.div`
  text-align: center;
  background: var(--backish);
  border: 1px solid var(--gray);
`;

const update1 = keyframes`
  0% { background-position: -50% 50% }
  50% { background-position: 50% 50% }
  100% { background-position: 150% 50% }
}
`;

// must be a tad different from the above to trigger animation
const update2 = keyframes`
  0% { background-position: -50% 50% }
  50% { background-position: 51% 50% }
  100% { background-position: 150% 50% }
}
`;
