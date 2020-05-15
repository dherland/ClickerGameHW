const express = require("express");
var port = process.env.port || 8000;

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
    app.use(express.static("build"));
}
app.listen(port, function(){
    console.log("Server is online at https://localhost:" + port);
})