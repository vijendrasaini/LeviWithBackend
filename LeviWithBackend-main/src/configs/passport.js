const passport = require('passport')
const { newToken } = require('../controllers/authentication.controller')
require('dotenv').config()
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
 
const User = require('../models/user.model')
passport.use(new GoogleStrategy({
    clientID:    "562328047756-4nltjbr30si94gsk5s8n9avoei75vl1c.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:7000/oauth/signin/callback",
    passReqToCallback   : true
  },
  async function(request, accessToken, refreshToken, profile, done) {
    let user = await User.findOne({email : profile?._json?.email})
    if(!user){
        user = await User.create({email : profile?._json?.email})
    }
    const token = newToken(user)
      return done(null, {status : 1})
  }
));

module.exports = passport