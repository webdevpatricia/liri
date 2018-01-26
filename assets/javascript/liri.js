var Keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var Twitter = require('twitter');
var inquirer = require("inquirer");


inquirer
  .prompt([
    // Here we create a basic text prompt.
    {
      type: "list",
      message: "Which option do you choose?",
      choices: ["spotify-this-song", "my-tweets", "movie-this", 'do-what-it-says'],
      name: "options"
    },


  .then(function(inquirerResponse) {
    // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
    if (inquirerResponse.confirm) {
      console.log("\nWelcome " + inquirerResponse.username);
      console.log("Your " + inquirerResponse.pokemon + " is ready for battle!\n");
    }
    else {
      console.log("\nThat's okay " + inquirerResponse.username + ", come again when you are more sure.\n");
    }
  });



function getTweets(){
	var client = new Twitter(Keys.twitterKeys);
	client.get('statuses/user_timeline',{screen_name: 'Bob Bob'}, function(error, tweets, response){
		if (!error && response.statusCode === 200) {
			for (var key in tweets){
				console.log('Tweet Text: ' + tweets[key].text + '   Created: ' + tweets[key].created_at);
			};
		} else {
			console.log('There was an error!');
			}
	});
};

function getSongData(){
	var client = new Spotify({
		id: 'd3e88c6592204e69a66358f79bd498d0',
		secret: '8cfa6ac2849745a3b3a4ee45caa4e894'
		});


	client.search({ type: 'track', query: 'Brown Eyed Girl' }, function(err, data) {
		if (!err) {
			var songInfo = data;
			for (var key in songInfo.tracks.items){
				var songName = songInfo.tracks.items[key].name;
				var songPreviewURL = songInfo.tracks.items[key].preview_url;
				var songAlbum = songInfo.tracks.items[key].album.name;
				var songArtists = '';
				var artists = songInfo.tracks.items[key].album.artists[0].name;
				console.log('\n\nSong: ' + songName + '\nPreview URL: ' + songPreviewURL + '\nAlbum: ' + songAlbum + '\nArtist(s): ' + artists + '\n******************************************************\n');
			}
		} else {
	     	return console.log('Error occurred: ' + err);
   			}

		});
// getSongData();


//  // function getRequest(e) {
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




// function getMovieData(){

// }

// function doWhatItSays(){

// }