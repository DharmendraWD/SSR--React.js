// import React from "react";
// import { hydrateRoot } from "react-dom/client";
// import App from "./App.jsx";

// hydrateRoot(document.getElementById("root"), <App />);





// entry-client.jsx
import React from "react";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

hydrateRoot(
  document.getElementById("root"),
  <BrowserRouter>
    <App />
  </BrowserRouter>
);