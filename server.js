const express= require("express");
const path = require("path");
const html = require("./app/routing/htmlRoutes")
const api = require("./app/routing/apiRoutes")
const PORT = 8090;
const app = express();


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, './app/public')));

//call the html routes//
html(app)
api(app);


app.listen(PORT, () =>{
    console.log("You are tuning in on port: " + PORT)
})