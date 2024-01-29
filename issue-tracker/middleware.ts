import middleware from "next-auth/middleware";

export default middleware;

const config = {
  matcher: "/users/:id*",
};
