import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CountContextProvider } from "./countContext";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <CountContextProvider>
      <App />
    </CountContextProvider>
  </StrictMode>
);
