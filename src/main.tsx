import "@logseq/libs";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
// import HeatMap from "./HeatMap";

async function main() {
  console.log("Loading React");

  logseq.Editor.registerSlashCommand("Show Heatmap", async () => {
    const div = document.createElement("div");
    document.body.appendChild(div);

    createRoot(div).render(
      <StrictMode>
        <App />
      </StrictMode>,
    );
  });
}

logseq.ready(main).catch(console.error);
