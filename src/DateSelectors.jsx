import React, { useContext } from "react";
import { DateTime } from "luxon";
import AppContext from "./AppContext";

export default function DateSelectors() {
  const { dispatch, actions } = useContext(AppContext);

  const handleChange = (event) => {
    var startDate = DateTime.fromISO(event.target.value);
    console.log(`Start Date: ${startDate}`);

    var dates = [...Array(10).keys()].map((session) => {
      return startDate.plus({ days: session * 7 });
    });

    console.log({ dates });

    dispatch(actions.SET_DATES(dates));
  };

  return (
    <div>
      <div>
        <label>DateSelectors</label>
        <input type="date" onChange={handleChange} />
      </div>
      <div>Dates</div>
    </div>
  );
}
