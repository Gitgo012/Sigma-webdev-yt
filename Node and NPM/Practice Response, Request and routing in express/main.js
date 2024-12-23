const express = require("express");
const app = express();
const port = 3000;
const blog = require('./routes/blog')
const shop = require('./routes/shops')


app.use(express.static("public"));
app.use('/blog', blog);
app.use('/shops', shop);

app.get("/", (req, res) => {
  console.log("hey, its a get request!");
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  console.log("hey, its a post request!");
  res.send("Hello World, this is a post request!");
});
app.put("/", (req, res) => {
  console.log("hey, its a put request!");
  res.send("Hello World, this is a put request!");
});
app.delete("/", (req, res) => {
  console.log("hey, its a delete request!");
  res.send("Hello World, this is a delete request!");
});

app.get("/index", (req, res) => {
    console.log("hey, its an index page!");
    res.sendFile("templates/index.html", {root:__dirname});
  });
app.get("/api", (req, res) => {
    console.log("hey, its an index page!");
    res.json({a:1,b:2,c:3,d:4});
    console.log(({a:1,b:2,c:3,d:4}))
  });
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
