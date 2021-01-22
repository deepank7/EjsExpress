var express = require("express");
var app = express();


app.get("/", (req, res) => {
    res.render("home.ejs");
})

app.get("/love/:thing", (req, res) => {
    var thing = req.params.thing;
    res.render("love.ejs", { thingVar: thing });
})

app.get("/posts", (req, res) => {
    var posts = [
        { title: "Post1", author: "Deepank" },
        { title: "Post2", author: "Ronaldo" },
        { title: "Post3", author: "Dybala" }
    ]
    res.render("posts.ejs", { posts: posts });
})

app.listen(3000, () => {
    console.log("Server running on port 3000")
});