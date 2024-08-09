import { rewrite } from "@vercel/edge";

export const config = {
  runtime: "edge",
};

export default function middleware(request: Request) {
  const url = new URL(request.url);
  const privateVar = process.env.VITE_API_URL;

  if (
    url.pathname.match(
      /\.(css|js|jsx|ts|tsx|jpg|jpeg|png|gif|ico|svg|woff|woff2|ttf|eot)$/
    )
  ) {
    return;
  }

  if (url.pathname.startsWith("/nfts")) {
    return rewrite(new URL("/url", request.url));
  }
  if (url.pathname.startsWith("/about")) {
    return new Response(`Hello, from about. URL to api is ${privateVar}`);
  }
}
