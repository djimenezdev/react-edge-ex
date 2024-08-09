import { rewrite, next } from "@vercel/edge";

export const config = {
  runtime: "edge",
};

export default function middleware(request: Request) {
  const url = new URL(request.url);
  const privateVar = process.env.VITE_API_URL;
  console.log(privateVar);
  if (url.pathname.startsWith("/nfts")) {
    return rewrite(new URL("/url", request.url));
  }
  if (url.pathname.startsWith("/about")) {
    return new Response("Hello, from about");
  }
  return next();
}
