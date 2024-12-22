import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import RootStateProvider from "./providers/root-state.tsx";

createRoot(document.getElementById("root")!).render(
  <>
    <RootStateProvider>
      <App />
    </RootStateProvider>
  </>
);
