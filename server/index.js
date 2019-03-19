require('dotenv').config();
const bodyParser = require( 'body-parser' );
const massive = require( 'massive' );
const express = require( 'express' );
// const session = require('express-session');
// const passport = require('passport');
// const Auth0Strategy = require( 'passport-auth0' );
// const localStrategy = require( 'passport-local' );
// const strategy = require(`${__dirname}/strategy.js`);
const app = express();
const controller = require( './controller.js' );
const cors = require( 'cors' );
app.use( cors() );
app.use( bodyParser.json() );
// app.use( passport.initialize() );
// app.use( passport.session() );
// passport.use( strategy );
massive( process.env.DATABASE_URL )
.then( db => { app.set( db, 'db' ) })
.catch(err => { console.log( err ) });


////////// AUTHENTICATION ///////////////
// passport.use('local', new localStrategy(
//   function(username, password, next){
//     db.users.findOne({username: username},
//       function(err,user){
//         if(err){ return next(err) }
//         if(!user) {return next(null, false); }
//         if(user.password !== password){
//           return next(null, false);}
//           return next(null, user);
//       })}
// ))

// passport.use('auth0', new Auth0Strategy({
//   domain: process.env.DOMAIN,
//   clientId: process.env.CLIENT_ID,
//   clientSecret: process.env.CLIENT_SECRET,
//   callbackUrl: CALLBACKURL
// },
// (accessToken, refershToken, parms, user, done) => {
//   //accessToken = used to make request on behalf of user
//   // refereshToken= GEt a new access token
//   //params = extra info the dev requested
//   // user = user profile who logged in.
//   // if I want to save user info to the database I can do that here
//   //User.save(user)
//   return done(null, user)
// }
// ))
//   /////////  Only for Sessions ////////////
//   // app.use( passport.initialize() );
//   // app.use( passport.session() );
//   // passport.use( strategy );
//   ////////////////////////////////////////

//   passport.serializeUser(function(user, done) {
//     return done(null, user);
//   });
  
//   passport.deserializeUser(function(user, done) {
//    return done(null, user);
//   });

//   app.post( '/api/auth/local', passport.authenticate('auth0'), (req, res) => {
//     res.status(200).redirect('/');
//   } );

//   app.get('api/auth/auth0', passport.authenticate('auth0'), (req, res) => {
//     // going out to Auth0
//     res.redirect('/');
//   });

//   app.get('api/auth/callback', passport.authenticate('auth0'), (req, res) => {
//     // Coming back from Auth0 
//     res.redirect('/');
//   } );

//   app.get('api/me', function(req, res){
//     if(req.user){
//       console.log(req.user);
//       res.status(200).send(req.user);
//     } else {
//       console.log('No user!');
//       res.status(200).send('OK');
//     }
//   });

//   app.get('api/CLIENT_SECRET', (req, res) => {
//     if(req.isAuthenticated) {
//       alert("Your logged in!");
//     } else {
//       alert("Fobidden!!!");
//     }
//   } );

//   app.get('api/auth/logout', (req, res) => {
//     req.logout();
//     res.redirect('/');
//   } )

//////// API HTTP REQUESTS /////////
app.get('/api/yoga_api/', controller.getAllPoses );

app.get( '/api/yoga_api/english/:english_name', controller.getEnglish);

app.get( '/api/yoga_api/sanskrit/:sanskrit_name', controller.getSanskrit );

const port = process.env.PORT;
app.listen( port, () => { console.log(`Listening on port ${port}.`); } );
