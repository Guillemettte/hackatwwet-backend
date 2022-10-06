var express = require('express');
var router = express.Router();

require('../models/connection');
const Tweet = require('../models/tweets');
const User = require('../models/users');
const { checkBody } = require('../modules/checkBody');
const uid2 = require('uid2');
const bcrypt = require('bcrypt');
const fetch = require('node-fetch');
// const { default: user } = require('../../hackatweet-frontend/reducers/user');


//ROUTE TWEET GET POUR RECUPERER TOUS LES TWEETS
router.get('/', (req, res) => {
    Tweet.find()
      .then(data => {
         res.json({data});
      });
  });

//ROUTE TWEET POST POUR ENVOYER UN TWEET AVEC LE USER
  router.post('/new', (req, res) => {
    
        const newTweet = new Tweet({
          tweet: req.body.tweet,
        //   username : User.username
          
        });
  
        newTweet.save().then(data => {
          res.json({ result: true});
        });
    });
  
  

  
  module.exports = router;
  