import index from "./index.html";

const server = Bun.serve({
    routes: {
        "/": index,
        "/api/colors": () => Response.json(["red", "blue", "green"]),
    },
    development: true,
});

console.log(`Listening on ${server.url}`);
