import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";

// TODO (main.jsx):
// Use React createRoot syntax to mount the app.
// Example: ReactDOM.createRoot(document.getElementById("root")).render(<App />);
ReactDOM.createRoot(document.getElementById("root")).render(<App />) 
//create the anchor point in HTML where react goes
//ReactDOM.createRoot tells react to take control of this div (with the ID root)
//render(<APP/>) puts the App component into that div which then loads the other components into that