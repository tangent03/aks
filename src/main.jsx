import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ToastContainerLocal from "./components/common/ToastContainerLocal.jsx";
import { AuthProvider } from "./helper/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
        <ToastContainerLocal />
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
