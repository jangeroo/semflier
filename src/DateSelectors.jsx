import * as React from "react";
import { add, format } from "date-fns";
import AppContext from "./AppContext";
import styled from "styled-components";

export default function DateSelectors() {
  const { state, dispatch, actions } = React.useContext(AppContext);

  const handleChangeFor = (fromSession) => (ev) => {
    const date = new Date(ev.target.value + "T00:00:00");
    dispatch(actions.SET_DATES(fromSession, date));
  };

  return (
    <div>
      <div>
        {state.dates.map((date, i) => (
          <DateSelector key={i}>
            Session #{i + 1}
            <Input
              type="date"
              onChange={handleChangeFor(i)}
              value={date ? date : ""}
            />
          </DateSelector>
        ))}
      </div>
    </div>
  );
}

const DateSelector = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Input = styled.input`
  width: 150px;
`;
