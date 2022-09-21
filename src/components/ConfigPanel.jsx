import React from "react";
import SeminarSelector from "./SeminarSelector";
import DateSelectors from "./DateSelectors";
import styled from 'styled-components';

export default function ConfigPanel() {
  return (
    <div>
      <h2>ConfigPanel</h2>

      <Panel>
        <SeminarSelector />
        <DateSelectors />
      </Panel>
    </div>
  );
}

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  width: 250px;
`