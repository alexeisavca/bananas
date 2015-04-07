var Express = require('express');
var app = Express();

app.get('/', function (req, res) {
    res.send('Why hello there!');
});

app.listen(3000, function(){
    console.log("It's alive!");
});