import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { QuestionProvider } from "./context/Question-context";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QuestionProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </QuestionProvider>
    </BrowserRouter>
  </React.StrictMode>
);
