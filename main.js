import { createApp } from "./src/app.js";
import { Eta } from "eta";

const main = () => {
  const eta = new Eta({ views: "./public/templates" });
  const chatHistory = {};
  const users = [];
  const renderChat = (d) => eta.render("/chat.html", d);
  const app = createApp(renderChat, users);

  Deno.serve({ port: 8001 }, app.fetch);
};

main();
