var express = require('express');
var app = express();
var fs = require('fs');
var port = 333;
app.set('view engine', 'html');
app.use(express.static('public'));