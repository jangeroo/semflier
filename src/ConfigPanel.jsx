import React from "react";
import SeminarSelector from "./SeminarSelector";
import DateSelectors from "./DateSelectors";

export default function ConfigPanel() {
  return (
    <div>
      <h2>ConfigPanel</h2>
      <SeminarSelector />
      <DateSelectors />
    </div>
  );
}
