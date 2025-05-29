const express = require("express")
const app = express()

console.log("express app is running")

// setting up ejs view engine
app.set("views","./views")
app.set("view engine","ejs")

app.get("/",(req,res)=>{
    const blogs = [
        { title: "Title 1", intro: "This is intro of title 1"},
        { title: "Title 2", intro: "This is intro of title 2"},
        { title: "Title 3", intro: "This is intro of title 3"},
    ]
    res.render("home",{
        blogs
    })
})

app.get("/about",(req,res)=>{
    res.render("about")
})

app.get("/contact",(req,res)=>{
    res.render("contact")
})

app.use((req,res)=>{
    res.status(404).render("404")
})


app.listen(3000,()=>{
    console.log("app is running on port 3000");
})