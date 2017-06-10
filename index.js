var express = require('express');
var app = express();
var SpotifyWebApi = require('spotify-web-api-node');

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

var bookRouter = express.Router();
bookRouter.route('/token')
    .get(function(req, res) {
        // Set necessary parts of the credentials on the constructor
        var spotifyApi = new SpotifyWebApi({
            clientId: 'cbc23ecc93514b9e896057597aa79ce6',
            clientSecret: 'f34d14b57a574c44886a273ae79ac45f'
        });

        // Get an access token and 'save' it using a setter
        spotifyApi.clientCredentialsGrant()
            .then(function(data) {
                var resopneJson = { token: data.access_token }
                res.json(resopneJson);
            }, function(err) {
                console.log('Something went wrong!', err);
            });
    });

app.use('/', bookRouter);

app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'))
})