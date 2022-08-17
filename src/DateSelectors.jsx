import * as React from "react";
import { add, format } from "date-fns";
import AppContext from "./AppContext";
import styled from "styled-components";

export default function DateSelectors() {
  const { state, dispatch, actions } = React.useContext(AppContext);

  const handleChange = (event) => {
    const dateInput = event.target.value;

    if (dateInput === "") return dispatch(actions.SET_DATES([...Array(10)]));

    const startDate = new Date(dateInput + "T00:00:00");

    const dates = state.dates.map((date, session) => {
      // console.log({ date, session });
      return format(add(startDate, { weeks: session }), "yyyy-MM-dd");
    });

    dispatch(actions.SET_DATES(dates));
  };

  return (
    <div>
      <div>
        <label>DateSelectors</label>
        {state.dates.map((date, i) => (
          <DateSelector key={i}>
            Session #{i + 1}
            <Input
              type="date"
              onChange={handleChange}
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
