const http = require('http');
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello from Auto Scaling Group!\n');
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});