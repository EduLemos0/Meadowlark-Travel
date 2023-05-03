import express from "express";
import { engine } from "express-handlebars";
import { getFortune } from "./lib/fortune.js";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

/** Set up Handlebar engine */
app.engine("handlebars", engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static(__dirname + "/public"));

const port = process.env.PORT || 8080;

/** Routes */

app.get("/", (req, res) => res.render("home"));

app.get("/about", (req, res) => {
  res.render("about", { fortune: getFortune() });
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
