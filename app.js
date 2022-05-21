const express = require("express");
const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("home");
});

const PORT = process.env.PORT || 7000;

app.listen(PORT, function() {
    console.log("Server started");
});