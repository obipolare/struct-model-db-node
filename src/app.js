const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");

// view engine - configs
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
hbs.registerPartials(path.join(__dirname, "/views/partials"));

// use router
app.use("/api/animes", require("./routes/animes.routes"));
app.use(require("./routes/index.routes"));

// Static Files
app.use(express.static(path.join(__dirname, "../public")));

app.listen(3000, () => {
  console.log("listening");
});
