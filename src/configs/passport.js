const passport = require('passport')
const { newToken } = require('../controllers/authentication.controller')
require('dotenv').config()
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
 
const User = require('../models/user.model')
passport.use(new GoogleStrategy({
    clientID:     process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:7000/oauth/signin/callback",
    passReqToCallback   : true
  },
  async function(request, accessToken, refreshToken, profile, done) {
    let user = await User.findOne({email : profile?._json?.email})
    if(!user){
        user = await User.create({email : profile?._json?.email})
    }
    const token = newToken(user)
      return done(null, {user, token , status : 1})
  }
));

module.exports = passport