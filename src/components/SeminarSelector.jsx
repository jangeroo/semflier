import React, { useContext, useRef } from "react";
import AppContext from "./AppContext";
import { SEMINARS } from "../assets/data";
import styled from 'styled-components';

export default function SeminarSelector() {
  const { state, dispatch, actions } = useContext(AppContext);
  const selection = useRef();

  const handleSelection = () => {
    dispatch(actions.SELECT_SEMINAR(selection.current.value));
  };

  console.log({ seminar: state.seminar });

  return (
    <div>
      <h4>Seminar</h4>
      <Select name="seminar"
        ref={selection}
        onChange={handleSelection}
        required
      >
        <Option value="" defaultValue>Please select a seminar...</Option>
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
  width: 100%;

  &:required:invalid {
    color: var(--font-placeholder);
    font-style: italic;
  }
`

const Option = styled.option`
  &[value=""] {
    display: none;
  }
`;
