var express = require('express');

var app = express();
var port = process.env.port || 5000;

var spotifyAuthRouter = express.Router();
spotifyAuthRouter.route('/token').get(function(req, res) {
    var responseJson = { hello: "this is my api" }

    res.json(responseJson);
})

app.use('/spotifyAuth', spotifyAuthRouter);

app.listen(port, function() {
    console.log('Running on PORT: ' + port);
});