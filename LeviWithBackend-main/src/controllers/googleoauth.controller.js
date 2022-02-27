const passport = require('../configs/passport')
const { Router } = require('express')
const router = Router()

passport.serializeUser(function(user, done){
    done(null, user)
  });
  
passport.deserializeUser(function(user, done) {
    done(null, user)
  });


router.get('/signin',
    passport.authenticate('google', { scope:[ 'email', 'profile' ] }));
 
router.get( '/signin/callback',passport.authenticate( 'google', 
            {
                failureRedirect: '/auth/google/failure'
            }),(req,res)=>{
                res.render('ejs/index.ejs')
            }
        )
module.exports = router        