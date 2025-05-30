const express = require("express");
const app = express();

const morgan = require("morgan")

console.log("express app is running");

// setting up ejs view engine
app.set("views", "./views");
app.set("view engine", "ejs");

const logger = (env) => {
  return (req, res, next) => {
    if(env === "dev"){
      console.log(`${req.method} ${req.originalUrl} ---`);
    }
    next();
  };
};

app.use(morgan('dev'));

app.use(express.static("public"))

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

app.use((req, res) => {
  res.status(404).render("404", {
    title: "404 Not Found",
  });
});

app.listen(3000, () => {
  console.log("app is running on port 3000");
});
