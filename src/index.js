import React from "react";
import ReactDOM from "react-dom/client";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./services/firebase/config";
import { App } from "./routes/Router";

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
