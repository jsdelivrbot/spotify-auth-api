var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

var bookRouter = express.Router();
bookRouter.route('/token')
    .get(function(req, res) {
        var resopneJson = { hello: 'this is my api' }
        res.json(resopneJson);
    });

app.use('/', bookRouter);

app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'))
})