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

export const Months = (): React$Element<any> => <>
  {MONTHS.map(v => <Month {...v}/>)}
</>;

const Month = ({name, lead, len}) => <Grid>
    <MonthName>{name}</MonthName>
    {labels().map(v => <DayName>{v}</DayName>)}
    {[...new Array(lead)].map(() => <Day blank/>)}
    {[...new Array(len)].map((_, i) => <Day>{i}</Day>)}
  </Grid>;

// FIXME make translatable
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

const Day = styled.div`
  border: 1px solid var(${ props => props.blank?"--gray":"--red" });
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
