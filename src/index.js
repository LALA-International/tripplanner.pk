import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import "react-multi-carousel/lib/styles.css";
import "react-datepicker/dist/react-datepicker.css";
import "./Tripplanner.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
         <BrowserRouter basename="/">
              <App />
         </BrowserRouter>
    </React.StrictMode>
);

