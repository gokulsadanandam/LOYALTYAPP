var LocalStrategy = require('passport-local').Strategy;
var User = require('../app/models/user');
var Cart = require('../app/models/cartmodel');
var userloyaltypoints = require('../app/models/userloyaltypoints');
var uniqid = require('uniqid')

module.exports = function(passport) {

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

    passport.use('local-signup', new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        },
        function(req, email, password, done) {
            // console.log(req)
            process.nextTick(function() {

                User.findOne({
                    'email': req.body.email
                }, function(err, user) {

                    if (err)
                        return done(err);

                    if (user) {
                        return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
                    } else {
                        var uid = uniqid('loyalty-')

                        var newUser = new User();
                        newUser.email = email;
                        newUser.password = newUser.generateHash(password);
                        newUser.firstname = req.body.name
                        newUser.lastname = req.body.lastname
                        newUser.loyaltytracker = uid
                        newUser.contact = req.body.number
                        let date = new Date()
                        newUser.registertime = date.toDateString() 
                        var cart = new Cart();
                        cart.loyaltytracker = uid
                        cart.cart = ["0"]

                        cart.save()

                        var  initial_bonus = new userloyaltypoints();
                        initial_bonus.loyaltytracker = uid ;
                        initial_bonus.loyaltypoints = 100

                        initial_bonus.save()

                        newUser.save(function(err) {
                            if (err)
                                throw err;
                            return done(null, newUser);
                        });
                    }

                });

            });

        }));

    passport.use('local-login', new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        },
        function(req, email, password, done) {

            User.findOne({
                'email': email
            }, function(err, user) {
                if (err)
                    return done(err);

                if (!user)
                    return done(null, false, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash

                if (!user.validPassword(password))
                    return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata

                return done(null, user);
            });
        }));

};