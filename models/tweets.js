const { strict } = require('assert');
const mongoose = require('mongoose')

const tweetSchema = mongoose.Schema({
    tweet: String,
    token : String,
    firstname : String,
    username : String,
    nblike: [{ type: mongoose.Schema.Types.ObjectId, ref: 'users' }],
    visible: Boolean,
   //  user: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    });

    const Tweet = mongoose.model('tweets', tweetSchema);

    module.exports = Tweet;