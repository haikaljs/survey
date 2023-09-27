import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "./index.css";
import router from "./router.jsx";
import { ContextProider } from "./contexts/ContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ContextProider>
            <RouterProvider router={router} />
        </ContextProider>
    </React.StrictMode>
);
