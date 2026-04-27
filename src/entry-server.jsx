// import React from "react";
// import { renderToString } from "react-dom/server";
// import App from "./App.jsx";

// export function render() {
//   return renderToString(<App />);
// }



// entry-server.jsx
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./App.jsx";

export function render(url) {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
}