import React, { useContext, useRef } from "react";
import AppContext from "./AppContext";
import { SEMINARS } from "./data";

export default function SeminarSelector() {
  const { dispatch, actions } = useContext(AppContext);
  const selection = useRef();

  const handleSelection = () => {
    dispatch(actions.SELECT_SEMINAR(selection.current.value));
  };

  return (
    <div>
      <label>Seminar</label>
      <select name="seminar" ref={selection} onChange={handleSelection}>
        <option value=""></option>
        {SEMINARS.map((sem) => (
          <option key={sem.code} value={sem.code}>
            ({sem.code}) {sem.title}
          </option>
        ))}
      </select>
    </div>
  );
}
