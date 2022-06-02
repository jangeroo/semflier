import React, { useReducer } from "react";
import AppContext from "./AppContext";
import ConfigPanel from "./ConfigPanel";
import { reducer, initialState, actions } from "./store.js";

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch, actions }}>
      <h1>Seminar Flier Configurator</h1>
      <ConfigPanel />
      <pre>{JSON.stringify(state, null, 4)}</pre>
    </AppContext.Provider>
  );
}
