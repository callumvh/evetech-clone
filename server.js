//Install express server
const express = require("express");
const path = require("path");

const app = express();

// Serve only the static files form the dist directory
app.use(express.static("./www"));

app.get("/*", function(res) {
  res.sendFile(path.join(__dirname, "/www/index.html"));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
console.log("listening 8080");
