import { join } from "path";

import fastifyStatic from "fastify-static";

/**
 * @type {import('fastify').FastifyPluginCallback}
 */
export const spaRoute = async (fastify) => {
  fastify.addHook("onSend", function (req, reply, payload, next) {
    const filenames = payload.filename.split("/");
    const filename = filenames[filenames.length - 1];
    const names = filename.split(".");
    const br = names[names.length - 1];
    if (br === "br") {
      reply.header("content-encoding", "br");
      const name = names[names.length - 2];
      if (name === "js") {
        reply.header("content-type", "application/javascript; charset=utf8");
      }
    }
    next();
  });
  fastify.register(fastifyStatic, {
    preCompressed: true,
    root: join(__dirname, "public"),
    wildcard: false,
  });

  fastify.get("/favicon.ico", () => {
    throw fastify.httpErrors.notFound();
  });

  fastify.get("*", (_req, reply) => {
    return reply.sendFile("index.html", join(__dirname, "public"));
  });
};
