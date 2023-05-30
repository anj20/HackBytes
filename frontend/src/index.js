import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-h5uoxrrx68zlyyld.us.auth0.com"
      clientId="2U3hMtSKPhdIGoLaVnTKDEq9WH3zYbpa"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <Router>
        <App />
      </Router>
    </Auth0Provider>
  </React.StrictMode>
);
