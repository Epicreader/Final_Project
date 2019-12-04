var express = require('express');
var app = express();
var port = 3333;
app.set('view engine', 'html');
app.use(express.static('public'));
app.listen(port, function () {
    console.log('Server listening on localhost:%s', port);
});
app.get('/', function (req, res) {
    res.sendFile('./index.html');
})