var GitHubApi = require("github");

var github = new GitHubApi({
    version: "3.0.0",
    //debug: true,
    protocol: "https",
    host: "api.github.com",
    timeout: 5000,
    headers: {
        "user-agent": "Milestone" 
    }
});


module.exports = github;