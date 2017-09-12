//initial variables set. DO NOT put tokens in regular programs.
//It is in here for this exercise only.
var request = require('request');
var GITHUB_USER = "cjwsstrm";
var GITHUB_TOKEN = "8b13fe355f1c2b0fc4e4244b7dffe3a972179f27";

console.log("Welcome to the GitHub Avatar Downloader!");
//function to produce url to access array of contributors
function getRepoContributors(repoOwner, repoName, cb) {
  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
  console.log(requestURL);
};

//calling the function with these parameters will produce a url
//that links to a list of contributors
getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});
