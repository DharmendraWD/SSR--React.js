import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import { createServer as createViteServer } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

async function createServer() {
  const vite = await createViteServer({
    server: { middlewareMode: true, hmr: { port: 24681 } },
    appType: "custom",
  });

  app.use(vite.middlewares);

  app.use(/.*/, async (req, res) => {
    try {
      let template = fs.readFileSync(path.resolve(__dirname, "index.html"), "utf-8");
      template = await vite.transformIndexHtml(req.url, template);

      const { render } = await vite.ssrLoadModule("/src/entry-server.jsx");
      const appHtml = render();

      const html = template.replace("<!--app-html-->", appHtml);

      res.status(200).set({ "Content-Type": "text/html" }).end(html);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      res.status(500).end(e.stack);
    }
  });

  return { app, vite };
}

createServer().then(({ app }) => {
  app.listen(3000, () => {
    console.log("SSR server listening on http://localhost:3000");
  });
});