import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import { MyRoutineProvider } from "./providers/MyRoutine";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MyRoutineProvider>
      <App />
    </MyRoutineProvider>
  </React.StrictMode>
);
