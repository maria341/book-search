const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/bulid"));
}

app.use(routes);

mongoose.connect('your url', { useNewUrlParser: true } || "mongodb:////localhost/googleBooks");

app.listen(PORT, function() {
    console.log(`🌎 ==> API Server now listening on PORT ${PORT}!`);
});