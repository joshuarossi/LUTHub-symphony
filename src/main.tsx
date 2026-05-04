import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { AppConvexProvider } from "./lib/convex";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppConvexProvider>
      <App />
    </AppConvexProvider>
  </StrictMode>,
);
