/**
 * @jsx React.DOM
 */

var React = require('react');
var TweetsApp = require('./components/TweetsApp.react');

// Take the initial state from the server
var initialState = JSON.parse(document.getElementById('initial-state').innerHTML)

// Render the components, pick up after the initial isomorhpic render
React.renderComponent(
  <TweetsApp tweets={initialState} />,
  document.getElementById('react-app')
);
