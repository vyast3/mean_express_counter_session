var express = require("express");
var session = require('express-session');




var app = express();

// more new code:
app.use(session({secret: 'hellotanvi'}));  // string for encryption

app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

var routes = require('./routes/routes.js')(app);

app.listen(8000, function() {
  console.log("listening on port 8000");
})