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

//ROUTE TWEET/NEW POST POUR ENVOYER UN TWEET AVEC LE USER
  router.post('/new', (req, res) => {
    
        const newTweet = new Tweet({
          tweet: req.body.tweet,
          token : req.body.token,
          firstname : req.body.firstname,
          username : req.body.username,
          // user : newTweet.user.push(Users) ,
          
        });
  
        newTweet.save().then(data => {
          res.json({ result: true});
          console.log(data)
        });
    });
  
  

  
  module.exports = router;
  