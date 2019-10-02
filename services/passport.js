const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');


const User = mongoose.model('user');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) =>{
    User.findById(id)
        .then(user => {
            done(null, user);
        });
});

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    
    User.findOne({googleId: profile.id})
        .then((existingUser) =>{
            if(existingUser){
                // the user already exists and we do not need to creat the user again
                // first argument of done is the error obj which is null here, the second arg is the user
                done(null, existingUser);
            } else{
                // we need to create the user
                new User({googleId: profile.id})
                .save()
                .then(user => done(null, user));
            }
        })
    
    
    console.log(profile);
}));
