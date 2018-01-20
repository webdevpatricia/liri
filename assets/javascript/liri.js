var Keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var Twitter = require('twitter');


// // var inputString = process.argv;

// // var myCommand = inputString[2];

var client = new Twitter(Keys.twitterKeys);


client.get('statuses/user_timeline',{screen_name: 'Bob Bob'}, function(error, tweets, response){
	if (!error && response.statusCode === 200) {
		for (var key in tweets){
			console.log(tweets[key].text);
		};
	} else {
		console.log('There was an error!');
		}
});


// function getRequest(e) {
// 	switch(myCommand) {
//     case 'my-tweets':
//         getTweets();
//         break;
//     // case 'spotify-this-song':
//     //     getSongData();
//     //     break;
//     // case 'movie-this':
//     //     getMovieData();
//     //     break;
//     // case 'do-what-it-says':
//     //     doWhatItSays();
//     //     break;
//     default:
//         console.log('This did not work!');
// 	};
// };


// function getSongData(){
// 	var spotify = new Spotify({
// 	  id: apiCreds.spotifyKeys.client_key,
// 	  secret: apiCreds.spotifyKeys.client_secret
// 	});
//  	spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
// 	  if (err) {
// 	    return console.log('Error occurred: ' + err);
//   		}
// 	console.log(data); 
// 	});
// }

// function getMovieData(){

// }

// function doWhatItSays(){

// }