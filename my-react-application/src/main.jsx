import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import API from "./CRUD.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <API></API>
  </StrictMode>
);