const express = require("express");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const favicon = require("express-favicon");
const routes = require("./routes/");

if (process.env.NODE_ENV === "development") {
  const dotenv = require("dotenv").config();
}


const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(favicon(path.join(__dirname, "public/favicon.png")));

app.use(cors({
  origin: process.env.ORIGIN_URL || '*'
}));

// app.all("*", (req, res, next) => {
//   if (!req.url.includes("/static")) {
//     console.log("\n\n===url===\n", req.url, "\n===url===\n\n");
//   }
//   next();
// });

routes.init(app);

app.use(express.static(path.join(__dirname, "public")));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.sendFile(path.join(__dirname, "/../build/index.html"));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  console.error(err);
  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
