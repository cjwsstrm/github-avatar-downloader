var request = require('request');

console.log("Welcome to the GitHub Avatar Downloader!");

var GITHUB_USER = "cjwsstrm";
var GITHUB_TOKEN = "8b13fe355f1c2b0fc4e4244b7dffe3a972179f27";

function getRepoContributors(repoOwner, repoName, cb) {
  getRepoContributors("jquery", "jquery", function(err, result) {
    console.log("Errors:", err);
    console.log("Result:", result);
  });
}
