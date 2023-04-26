const http = require("http");
const fs = require("fs");
const port = process.env.PORT || 3000;

function serveStaticFile(res, path, contentType, responseCode = 200) {
  fs.readFile(__dirname + path, (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      return res.end("500 - Internal Error");
    }
    res.writeHead(responseCode, { "Content-Type": "text/plain" });
    return res.end(data);
  });
}

const server = http.createServer((req, res) => {
  const path = req.url.replace(/\/?(?:\?.*)?$/, "").toLowerCase();

  switch (path) {
    case "":
      serveStaticFile(res, "public/home.html", "text/html");
      break;

    case "/about":
      serveStaticFile(res, "/public/about.html", "text/html");
      break;

    case "/img/logo.png":
      serveStaticFile(res, "/public/img/logo.png", "image.png");
      break;
  }
});

server.listen(port, () =>
  console.log(
    `Server running on port ${port}; ` + "press Ctrl-C to terminate..."
  )
);
