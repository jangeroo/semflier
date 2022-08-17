import React, { useReducer } from "react";
import AppContext from "./AppContext";
import ConfigPanel from "./ConfigPanel";
import { reducer, initialState, actions } from "./store.js";
import styled from "styled-components";

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch, actions }}>
      <h1>Seminar Flier Configurator</h1>
      <Main>
        <ConfigPanel />
        <div>
          <div>Dates</div>
          <pre>{JSON.stringify(state, null, 4)}</pre>
        </div>
      </Main>
    </AppContext.Provider>
  );
}

const Main = styled.div`
  display: flex;
`;
