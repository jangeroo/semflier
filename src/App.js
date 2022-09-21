import React, { useReducer } from "react";
import AppContext from "./AppContext";
import ConfigPanel from "./ConfigPanel";
import PreviewPanel from "./PreviewPanel";

import { reducer, initialState, actions } from "./store.js";
import styled from "styled-components";

import "./App.css";

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch, actions }}>
      <h1>Seminar Flier Configurator</h1>
      <Main>
        <ConfigPanel />
        <PreviewPanel />
      </Main>
    </AppContext.Provider>
  );
}

const Main = styled.main`
  display: flex;
  gap: 20px;
`;
