import { getCookie } from "hono/cookie";
export const serveChat = (c) => {
  const renderChat = c.get("renderChat");
  const chatHistory = c.get("chatHistory");
  const username = getCookie(c, "username");

  return c.html(renderChat({ chatHistory, username }));
};

export const addChat = async (c) => {
  const users = c.get("users");
  const fd = await c.req.formData();
  const message = fd.get("message");

  chatHistory.push({ message });
  return c.redirect("/", 303);
};
