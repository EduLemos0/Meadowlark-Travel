const express = require("express");
const expressHandlebars = require("express-handlebars");

const handlers = require("./lib/handlers");
const weatherMiddleware = require("./lib/middleware/weather");
const bodyParser = require("body-parser");

const app = express();

app.engine(
  "handlebars",
  expressHandlebars.engine({
    defaultLayout: "main",
    helpers: {
      section: function (name, options) {
        if (!this._sections) this._sections = {};
        this._sections[name] = options.fn(this);
        return null;
      },
    },
  })
);
app.set("view engine", "handlebars");

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({ extended: true }));

app.use(weatherMiddleware);

app.get("/", handlers.home);

app.get("/about", handlers.about);

app.get("/newsletter", handlers.newsletter);
app.post("/api/newsletter-signup", handlers.api.newsletterSignup);

app.use(handlers.notFound);
app.use(handlers.serverError);

if (require.main === module) {
  app.listen(port, () => {
    console.log(
      `Express started on htpp://localhost:${port}` +
        "; press Ctrl+C to terminate..."
    );
  });
} else {
  module.exports = app;
}
