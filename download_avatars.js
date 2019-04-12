//initial variables set. DO NOT put tokens in regular programs.
//It is in here for this exercise only.
var request = require('request');;
var fs = require('fs');
var GITHUB_USER = "name";
var GITHUB_TOKEN = "token";



console.log("Welcome to the GitHub Avatar Downloader!");
//function to produce url to access array of contributors
function getRepoContributors(repoOwner, repoName, cb) {
  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
  var options = {
    url: requestURL,

    headers: {
      "User-Agent": "cjwsstrm"
    }
  }//below turns the body scrambled data into an array of objects
  //that we can work with
  request.get(options, function (error, response, body) {
    var data = JSON.parse(body)
    cb(error, data);
  });
}
//separate function to download images
function downloadImageByURL(url, filePath) {
  request.get(url)
  .on('error', function (err) {
    throw err;
  })
  .pipe(fs.createWriteStream(filePath))
}
//Calling the function below will combine above code to download
//images for each object in the data array(here referenced as result).
//It does so by iterating over each item in the array and then
//runs the downloadImageByURL function for each item.
getRepoContributors(process.argv[2], process.argv[3], function(err, result) {
  if (process.argv[2] === undefined || process.argv[3] === undefined) {
    console.log("You need to specify both owner and repo")
    return;//if statement will terminate function if one of the
  }        //parameters are not provided
  result.forEach((repo) => {
    var imagesPath = './avatar_images' + '/' + repo.login + '.png';
    downloadImageByURL(repo.avatar_url, imagesPath)
  });
  console.log("Errors:", err);
});
