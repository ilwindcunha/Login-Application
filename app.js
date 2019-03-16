var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");
var controller = require("./controller/user.controller");

var port = 8080;

var db = "mongodb://localhost/userExample1";

mongoose.connect(db);
//check if database is connected successfully
var dbcheck = mongoose.connection;
dbcheck.on('error', console.error.bind(console, 'connection error:'));
dbcheck.once('open', function() {
  // we're connected!
});
//locate and recognise file  and folders that we want to use
app.use(express.static(path.join(__dirname, "views")));
//get data as json
app.use(bodyParser.json());
//set urlencoded to true
app.use(bodyParser.urlencoded({
    extended: true
}));
//for default url load index page
app.get("/", function(req,res){
    res.render("index.html");
});

app.post("/", controller.register);

app.listen(port, function(){
    //print to console that server has started
    console.log("app listening on port " + port);
});
