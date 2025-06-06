const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/Blog");

const app = express();

// setting up ejs view engine
app.set("views", "./views");
app.set("view engine", "ejs");

// database connect
const mongoUrl =
  "mongodb+srv://minkokolinn:mkkl1234@cluster0.iluzelq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log("connected to db");
    app.listen(3000, () => {
      console.log("app is running on port 3000");
    });
  })
  .catch((e) => {
    console.log(e);
  });

const logger = (env) => {
  return (req, res, next) => {
    if (env === "dev") {
      console.log(`${req.method} ${req.originalUrl} ---`);
    }
    next();
  };
};

app.use(morgan("dev"));

app.use(express.static("public"));

app.get("/", (req, res) => {
  const blogs = [
    { title: "Title 1", intro: "This is intro of title 1" },
    { title: "Title 2", intro: "This is intro of title 2" },
    { title: "Title 3", intro: "This is intro of title 3" },
  ];
  res.render("home", {
    blogs,
    title: "Home",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    title: "Contact",
  });
});

app.get("/add-blog", async (req, res) => {
  let blog = new Blog({
    title: "Blog 1",
    intro: "Blog 1 Intro",
    body: "Blog 1 Body",
  });
  await blog.save();
  res.send("blog saved");
});

app.use((req, res) => {
  res.status(404).render("404", {
    title: "404 Not Found",
  });
});
