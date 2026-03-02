import { Hono } from "hono";
import { logger } from "hono/logger";
import { addChat, serveChat } from "./handlers/chat.js";
import { serveStatic } from "hono/deno";
import { handleLogin } from "./handlers/auth.js";

export const createApp = (renderChat, users) => {
  const app = new Hono();

  app.use(logger());
  app.use(async (c, next) => {
    c.set("renderChat", renderChat);
    c.set("users", users);
    await next();
  });


  app.get("/login.html", serveStatic({ root: "./public" }));
  app.post("/login", handleLogin);
  app.get("/", serveChat);
  app.post("/send", addChat);

  return app;
};
