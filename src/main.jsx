import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Cursor from "./components/ui/Cursor.jsx";
import { BrowserRouter } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react"
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <Cursor />
            <App />
            <Analytics />
        </BrowserRouter>
    </StrictMode>
);
