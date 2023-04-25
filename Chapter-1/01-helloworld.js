const http = require("http");
const port = process.env.port || 3000;

const server = http.createServer((req, res) => {
  // Normalize the url removing the querystring and the last bar
  const path = req.url.replace(/\/?(?:\?.*)?$/, "").toLowerCase();

  switch (path) {
    case "":
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Homepage");
      break;

    case "about":
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("About");
      break;

    default:
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not found");
      break;
  }
});

server.listen(port, () =>
  console.log(
    `Server started on port ${port}; ` + "press Ctrl-C to terminate..."
  )
);
