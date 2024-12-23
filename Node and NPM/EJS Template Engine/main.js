const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.get("/", (req, res) => {
  let siteName = "Meme Generator website";
  let siteText = "Search now";
  let arr=[1,2,3,];
  res.render("index", { siteName: siteName, siteText: siteText, arr });
});
app.get("/blog/:slug", (req, res) => {
  let blogTitle = "Adidas why and when?";
  let blogContent = "Its a very good brand";
  res.render("templates/memegenerator.html", { root: __dirname });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
