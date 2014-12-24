var jsx       = require('node-jsx').install();
var React     = require('react');
var TweetsApp = require('./components/TweetsApp.react');
var Tweet     = require('./models/Tweet');

module.exports = {
  index: function(req, res) {
    // Call static model method to get tweets in the db
    Tweet.getTweets(0,0, function(tweets, pages) {
      var markup = React.renderComponentToString(
        TweetsApp({
          tweets: tweets
        })
      );

      // Render the home template
      res.render('home', {
        markup: markup, // Pass rendered react to markup
        state: JSON.stringify(tweets) // Pass current state to client
      });
    });
  },

  page: function(req, res) {
    // Fetch the tweets by page via parms
    Tweet.getTweets(req.params.page, req.params.skip, function(tweets) {
      res.send(tweets);
    });
  }
}
