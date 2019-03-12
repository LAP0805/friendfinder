const express= require("express");
const app = express();
const path = require("path");

module.exports =
function myFunction(app){
 app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
    console.log("home")
  });

   app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
    console.log("survey")
  })

}