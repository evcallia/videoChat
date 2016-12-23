var express = require("express"),
    path = require("path"),
    bodyParser = require('body-parser'),
    // session = require('express-session'),
    app = express();
app.use(express.static(path.join(__dirname, "./client")));
app.use(express.static(path.join(__dirname, 'bower_components' )));
app.use(bodyParser.json()); //Allows body parser to send/read JSON data

//require config for mongoose model
require('./server/config/mongoose.js');

//Routes:
var routes = require('./server/config/routes.js');
routes(app);

app.listen(8000, function() {
    console.log("listening on port 8000");
})
