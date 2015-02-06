/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Beer = require('../api/beer/beer.model');
var Bar = require('../api/bar/bar.model');
var Happening = require('../api/happening/happening.model');

Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});

Beer.find({}).remove(function() {
  Beer.create({
    provider: 'local',
    name: '5am Saint',
    brewery: 'Brewdog',
    description: 'iconaclastic bla bla'
  }, {
    provider: 'local',
    name: 'Punk IPA',
    brewery: 'Brewdog',
    description: 'beer for punks',
  }, function() {
      console.log('finished populating beers');
    }
  );
});

Bar.find({}).remove(function() {
  Bar.create({
    provider: 'local',
    name: 'JW Sweetmans',
    location: '56,231 45,232',
    description: 'Brewpub in central dublin, overlooking River Liffey'
  }, {
    provider: 'local',
    name: 'Against the Grain',
    location: '56,234 45,234',
    description: 'A Galway Bay Brewery bar with lots of character',
  }, function() {
      console.log('finished populating bars');
    }
  );
});

Happening.find({}).remove(function() {
  Happening.create({
    provider: 'local',
    who: 'JW Sweetmans',
    when: '2015-01-10 14:00',
    what: 'We are brewing a new beer called Galay which will be full of hops from New Zealanda and we plan to release it in ireland next month. We cannot wait to see what you guys think'
  }, {
    provider: 'local',
    who: 'Against the Grain',
    when: '2015-01-10 14:00',
    what: 'Punk IPA new on tap',
  }, function() {
      console.log('finished populating happenings');
    }
  );
});

