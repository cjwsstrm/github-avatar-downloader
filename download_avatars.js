//initial variables set. DO NOT put tokens in regular programs.
//It is in here for this exercise only.
var request = require('request');
var https = require('https');
var GITHUB_USER = "cjwsstrm";
var GITHUB_TOKEN = "8b13fe355f1c2b0fc4e4244b7dffe3a972179f27";



console.log("Welcome to the GitHub Avatar Downloader!");
//function to produce url to access array of contributors
function getRepoContributors(repoOwner, repoName, cb) {
  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
  console.log(requestURL);
  var options = {
    url: requestURL,

    headers: {
      "User-Agent": "cjwsstrm"
    }
  }
  request.get(options, function (error, response, body) {
    var data = JSON.parse(body)
    console.log(data);
    data.forEach((repo) => {
      console.log(repo.login, repo.avatar_url);
    });
  });
}

//calling the function with these parameters will produce a url
//that links to a list of contributors
getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});


function cbURLS (data) {
  console.log(data);
}

// request.get('https://api.github.com/repos/jquery/jquery/contributors')               // Note 1
//        .on('error', function (err) {                                   // Note 2
//          throw err;
//        })
//        .on('response', function (response) {                           // Note 3
//          console.log('Response Status Code: ', response.statusCode);
//          console.log('Content Type: ', response.headers['content-type']);
//          console.log(body);
//        })
//       //  .pipe(fs.createWriteStream('./future.jpg'))               // Note 4
//
//       //  .on('finish', () => {
//       //    console.log('Download complete.');
//        });

// ------------------
// function getOptionsForRepoList(username, accessToken) {
//   return {
//     url: `https://api.github.com/users/${username}/repos`,
//     qs: {
//       sort: 'pushed',
//       access_token: accessToken
//     },
//     headers: {
//       'User-Agent': 'macaroon'
//     }
//   };
// }
//
