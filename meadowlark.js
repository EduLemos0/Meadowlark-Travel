const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

// customized 404 page
app.use((req, res) => {
  res.type("text/plain");
  res.status(404);
  res.send("404 - Not Found");
});

// customized 500 page
app.use((req, res) => {
  res.type("text/plain");
  res.status(500);
  res.send("500 - Server Error");
});

app.listen(port, () => console.log(`Server running on port ${port} ; `));
