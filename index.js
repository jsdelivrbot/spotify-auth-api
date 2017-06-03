var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

// app.get('/', function(request, response) {
//     response.send('Hello World!')
// })

var bookRouter = express.Router();
bookRouter.route('/Books')
    .get(function(req, res) {
        var resopneJson = { hello: 'this is my api' }
        res.json(resopneJson);
    });

app.use('/api', bookRouter);

app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'))
})