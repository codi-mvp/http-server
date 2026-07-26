import http from "http";

const PORT = 8000
const serverName = `http://localhost:${PORT}`;

const server = http.createServer((req, res) => {
    res.end("Hello World!");
})
server.listen(PORT, () => {
    console.log(`Server running  ${serverName}`);
});