// @flow
import {h, Fragment} from "preact";
import styled from "styled-components";

const MONTHS = [
  {name: "2021-08", lead: 0, len: 31},
  {name: "2021-09", lead: 3, len: 30},
  {name: "2021-10", lead: 5, len: 31},
  {name: "2021-11", lead: 1, len: 30},
  {name: "2021-12", lead: 3, len: 31},
];

export const Months = (): React$Element<any> => <>{MONTHS.map(v => <Month {...v}/>)}</>;

const Month = ({name, lead, len}) => <Box>
  <div>{name}</div>
  <Grid>
    <Labels/>
    {[...new Array(lead)].map(() => <Cell blank/>)}
    {[...new Array(len)].map((_, i) => <Cell>{i}</Cell>)}
  </Grid>
</Box>;

// FIXME make translatable
const Labels = () => <>
  <div>Sun</div>
  <div>Mon</div>
  <div>Tue</div>
  <div>Wed</div>
  <div>Thu</div>
  <div>Fri</div>
  <div>Sat</div>
</>;

const Box = styled.div`
  border: 1px solid green;
  display: flex;
  flex-direction: column;
`;

const Grid = styled.div`
  flex: none;
  display: grid;
  grid-template-columns: repeat(7, 100px);
  grid-template-rows: 40px repeat(6, 100px);
  gap: 3px;
`;

const Cell = styled.div`
  border: 1px solid var(${ props => props.blank?"--gray":"--red" });
`;
