import React from "react";
import ReactDOM from "react-dom/client";
import { ExpenseTracker } from "./components/BasicForm/ExpenseTracker/ExpenseTracker";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ExpenseTracker />
  </React.StrictMode>
);
