const express = require("express");
const handlebars = require("express-handlebars");

const handlers = require("./lib/handlers");

const app = express();

app.engine(
  "handlebars",
  handlebars.engine({
    defaultLayout: "main",
  })
);
app.set("view engine", "handlebars");

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));

app.get("/", handlers.home);

app.get("/about", handlers.about);

app.use(handlers.notFound);
app.use(handlers.serverError);

app.listen(port, () =>
  console.log(`Express running on port ${port}; Press Ctrl+C to terminate...`)
);
