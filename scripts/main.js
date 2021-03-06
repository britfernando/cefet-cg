// Require Node modules in the browser thanks to Browserify: http://browserify.org

var bespoke = require('bespoke'),
    isMobile = require('ismobilejs'),
    fancy = require('bespoke-theme-fancy'),
    keys = require('bespoke-keys'),
    touch = require('bespoke-touch'),
    bullets = require('bespoke-bullets'),
    scale = require('bespoke-scale'),
    hash = require('bespoke-hash'),
    progress = require('bespoke-progress'),
    state = require('bespoke-state'),
    math = require('bespoke-math'),
    markdown = require('bespoke-meta-markdown'),
    tutorial = require('./tutorial');

// Bespoke.js
bespoke.from('article', [
  markdown(),
  fancy(),
  keys(),
  touch(),
  bullets('li, .bullet'),
  scale(isMobile.any ? 'transform' : {}),
  hash(),
  progress(),
  math(),
  state(),
  tutorial(document.getElementsByClassName('tutorial')[0])
]);
