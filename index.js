import { createServer } from "node:http";

const PORT = process.env.PORT ?? 3000;

createServer((req, res) => res.end("Hello world!")).listen(PORT, () => console.log(`Listening to ${PORT} port`));
