import { createRoot } from "react-dom/client";
import AppLayout from "./components/AppLayout";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <div style={{ display: "block", width: "98vw" }} data-ignore="used only for top most containter width">
    <App/>
  </div>
);
