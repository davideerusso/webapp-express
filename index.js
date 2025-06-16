const express = require("express");

const app = express();
const port = 3000;

const moviesRouter = require("./router/moviesRouter");
const appUrl = `http://localhost:${port}`;

app.use(express.json());
app.use(express.static("public"));
app.use("/posts", moviesRouter);

app.listen(port, (err) => {
  if (err) {
    console.err(err);
  } else {
    console.log("server listening on http://localhost:" + port);
  }
});
