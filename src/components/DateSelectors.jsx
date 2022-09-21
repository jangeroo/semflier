import * as React from "react";
import AppContext from "./AppContext";
import styled from "styled-components";

export default function DateSelectors() {
  const { state, dispatch, actions } = React.useContext(AppContext);

  const handleChangeFor = (fromSession) => (ev) => {
    const date = new Date(ev.target.value + "T00:00:00");
    dispatch(actions.SET_DATES(fromSession, date));
  };

  return (
    <SessionList>
      {state.dates.map((date, i) => (
        <DateSelector key={i}>
          Session #{i + 1}
          <Input
            type="date"
            onChange={handleChangeFor(i)}
            value={date ?? ""}
          />
        </DateSelector>
      ))}
    </SessionList>
  );
}

const SessionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

const DateSelector = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const Input = styled.input`
  display: flex;
  justify-content: space-around;
  width: 150px;
  padding: 0px 4px;

  &[value=""] {
    color: var(--font-placeholder);
    font-style: italic;
  }
`;
