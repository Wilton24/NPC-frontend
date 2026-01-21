import ReactDOM from "react-dom/client";
import './index.css';
import React from "react";
import App from './App.tsx'
import { AuthProvider } from "./context/AuthContext.tsx";


const root = ReactDOM.createRoot(
  document.getElementById('root')!
);

root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);