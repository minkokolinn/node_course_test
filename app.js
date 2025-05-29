const express = require("express")
const app = express()

console.log("express app is running")

app.get("/",(req,res)=>{
    res.sendFile("./views/home.html",{root:__dirname})
})
app.get("/about",(req,res)=>{
    res.sendFile("./views/about.html",{root:__dirname})
})
app.get("/contact",(req,res)=>{
    res.sendFile("./views/contact.html",{root:__dirname})
})


app.listen(3000)