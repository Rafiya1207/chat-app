import { setCookie } from "hono/cookie";

export const handleLogin = async (c) => {
  const fd = await c.req.formData();
  console.log(fd);
  
  const username = fd.get("username");

  const users = c.get("users");
  setCookie(c, "username", username);
  return c.redirect("/", 303);
};
