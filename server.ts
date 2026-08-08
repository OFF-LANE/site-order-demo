import { file } from "bun";

Bun.serve({
  port: Number(process.env.PORT ?? 3000),
  async fetch(req) {
    const url = new URL(req.url);
    const path = url.pathname === "/" ? "/index.html" : url.pathname;
    const f = file("./public" + path);
    return (await f.exists()) ? new Response(f) : new Response("not found", { status: 404 });
  },
});

console.log(`http://localhost:${process.env.PORT ?? 3000}`);
