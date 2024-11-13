import { createServer } from "node:http";

createServer((req, res) => res.end("Hello world!")).listen(3000, () => console.log("Listening to 3000 port"));
