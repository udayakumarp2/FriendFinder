var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var PORT = process.env.PORT || 8080;
var path = require('path');

app.use(express.static(path.join('./app/public')));


 
// create application/x-www-form-urlencoded parser

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

require("./app/routing/api-routes.js")(app);
require("./app/routing/html-routes.js")(app);


app.listen(PORT,function() {
    console.log('App listening on Port:'+PORT)
});
