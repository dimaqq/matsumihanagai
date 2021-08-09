// @flow
import {h, Fragment} from "preact";
import styled from "styled-components";
import {t} from "./t";

const MONTHS = [
  {name: "2021-08", lead: 0, len: 31},
  {name: "2021-09", lead: 3, len: 30},
  {name: "2021-10", lead: 5, len: 31},
  {name: "2021-11", lead: 1, len: 30},
  {name: "2021-12", lead: 3, len: 31},
];

export const Calendar = (): React$Element<any> => <>
  {MONTHS.map(v => <Month {...v}/>)}
</>;

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

const Day = ({mo, d, blank}) => {
  if (blank) return <Cell blank/>;

  const date = `${ mo }-${ (1e2 + d + "").slice(-2) }`;
  return <Cell free={d % 2}>
    <DayNo>{ d }</DayNo>
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

const Cell = styled.div`
  border: 3px solid var(${
    props => props.blank?
      "--grayish":
      props.free?
      "--greenish":
        "--redish" });
  background-color: color-mix(in srgb, var(${
    props => props.blank?
      "--grayish":
        props.free?
        "--greenish":
          "--redish" }) 20%, var(--back));
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
