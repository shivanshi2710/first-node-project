const express = require("express")
// var cors = require('cors')
const path = require('path');

const app = express()

// app.use(cors())

app.get("/", (req, res) => {
    // res.send("Hello World!")
    res.sendFile(path.join(__dirname,"home.html"))
    // res.json({success: true, message: "Hello World!"})
})

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname,"about.html"))
    // res.json({success: true, message: "About Page"})
})

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname,"contact.html"))
    // res.json({success: true, message: "Contact Page"})
})

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname,"login.html"))
})
app.get("/kukki", (req, res) => {
  res.sendFile(path.join(__dirname,"kukki.html"))
})

app.get("/debu",(req,res) => {
  res.sendFile(path.join(__dirname,"debu.html"))
})

app.listen(8000, () => {
  console.log("listening on 8000")  
})

// let http = require('http');

// let server = http.createServer(function (req, res){
//   if (req.url == "/") {
//     res.writeHead(200, {'Content-Type': 'application/json'});
//     res.end(JSON.stringify({ success: true, message: "Welcome"}));
//   } else if (req.url == "/about") {
//     res.end("This is the about page")
//   }
// }).listen(8000, function () {
//   console.log('Server running at http://localhost:8000/');
// })
