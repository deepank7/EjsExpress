var express = require("express");
var app = express();
const footballData = require('./data.json');


app.get("/", (req, res) => {
    res.render("home.ejs");
})

app.get("/love/:thing", (req, res) => {
    var thing = req.params.thing;
    res.render("love.ejs", { thing: thing });
})

app.get("/posts", (req, res) => {
    var posts = [
        { title: "Post1", author: "Deepank" },
        { title: "Post2", author: "Ronaldo" },
        { title: "Post3", author: "Dybala" }
    ]
    res.render("posts.ejs", { posts: posts });
})

app.get("/r/:subreddit",(req, res) => {
    const {subreddit} = req.params;
    const data = footballData[subreddit];
    res.render("subreddit.ejs", {...data, subreddit});
})

app.listen(3000, () => {
    console.log("Server running on port 3000")
});