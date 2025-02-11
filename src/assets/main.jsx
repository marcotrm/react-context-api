import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//css
import "./index.css";
import "./styles/header.css";
import "./styles/main.css";
import "./styles/Footer.css";
import "./styles/menu.css";
import "./styles/pizzaDetail.css";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
