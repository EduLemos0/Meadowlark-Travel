const express = require("express");
const { engine } = require("express-handlebars");
const fortune = require("./lib/fortune");

const app = express();

/** Set up Handlebar engine */
app.engine("handlebars", engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static(__dirname + "/public"));

const port = process.env.PORT || 8080;

/** Routes */

app.get("/", (req, res) => res.render("home"));

app.get("/about", (req, res) => {
  res.render("about", { fortune: fortune.getFortune() });
});

/** Middlewares */

// customized 404 page
app.use((req, res) => {
  res.status(404);
  res.render("404");
});

// customized 500 page
app.use((req, res) => {
  res.status(500);
  res.render("500");
});

app.listen(port, () =>
  console.log(`Express running on port ${port}; Press Ctrl-C to terminate.....`)
);
