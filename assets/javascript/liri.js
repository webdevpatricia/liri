var apiCreds =  require("./keys.js");
var Spotify = require('node-spotify-api');
var TwitterStream = require('twitter-stream-api'),


var inputString = process.argv;

var myCommand = inputSting[2];

function getRequest(e) {
	switch(myCommand) {
    case 'my-tweets':
        getTweets();
        break;
    case 'spotify-this-song':
        getSongData();
        break;
    case 'movie-this':
        getMovieData();
        break;
    case 'do-what-it-says':
        doWhatItSays();
        break;
    default:
        0;
	};
};

function getTweets(){
	var tweets = new TwitterStream({
		consumer_key: apiCreds.twitterKeys.consumer_key;
		consumer_secret: apiCreds.twitterKeys.consumer_secret;
		token: apiCreds.twitterKeys.access_token_key;
		token_secret: apiCreds.twitterKeys.access_token_secret;

	var Twitter = new TwitterStream(keys, false);
	Twitter.stream('statuses/filter', {
    track: 'javascript'
});
 
Twitter.pipe(fs.createWriteStream('tweets.json'));

	var reqTweets = 'GET https://api.twitter.com/1.1/statuses/home_timeline.json';


	})
}

function getSongData(){
	var spotify = new Spotify({
	  id: apiCreds.spotifyKeys.client_key,
	  secret: apiCreds.spotifyKeys.client_secret
	});
 	spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
	  if (err) {
	    return console.log('Error occurred: ' + err);
  		}
	console.log(data); 
	});
}

function getMovieData(){

}

function doWhatItSays(){

}