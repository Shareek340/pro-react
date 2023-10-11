import { createRoot } from "react-dom/client";
import AppLayout from "./components/AppLayout";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <div style={{ display: "inline-block", width: "100vw" }} data-ignore="used only for top most containter width">
    <AppLayout />
  </div>
);
