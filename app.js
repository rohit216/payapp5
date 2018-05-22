var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

var port = process.env.PORT || 5000;

app.listen(port, function() {
  console.log('Server Started');
});

app.get('/', function(req, res) {
  res.end('Wel the payapp by Deepak Ahire' + __dirname);
});

app.use(router);
//app.use(express.static(__dirname + '/public'));
//app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

require("./testtxn")(app);
require("./response")(app);
require("./pgredirect")(app);
app.set('views', __dirname);