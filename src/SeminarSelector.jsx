import React, { useContext, useRef } from "react";
import AppContext from "./AppContext";
import { SEMINARS } from "./assets/data";
import styled from 'styled-components';

export default function SeminarSelector() {
  const { dispatch, actions } = useContext(AppContext);
  const selection = useRef();

  const handleSelection = () => {
    dispatch(actions.SELECT_SEMINAR(selection.current.value));
  };

  return (
    <div>
      <h4>Seminar</h4>
      <Select name="seminar"
        ref={selection}
        onChange={handleSelection}
        required
      >
        <Option value="" disabled selected>Please select a seminar...</Option>
        {SEMINARS.map((sem) => (
          <Option key={sem.code} value={sem.code}>
            ({sem.code}) {sem.title}
          </Option>
        ))}
      </Select>
    </div>
  );
}

const Select = styled.select`
  &:required:invalid {
    color: var(--font-placeholder);
    font-style: italic;
  }
`

const Option = styled.option`
  &[value=""][disabled] {
    display: none;
  }
`;
