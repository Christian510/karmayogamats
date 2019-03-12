require('dotenv').config();
const bodyParser = require( 'body-parser' );
const express = require( 'express' );
const app = express();
const controller = require( './controller.js' );
const cors = require( 'cors' );

//TODO cors is messing with the response.
app.use( cors() );
app.use( bodyParser.json() );

// massive( process.env.DATABASE_URL )
// .then( db => { app.set( db, 'db' ) } )
// .catch(err => { console.log( err ) });

// app.get('/api/yoga_api/', function (req, res, next) {
//     res.json({msg: 'This is CORS-enabled for all origins!'})
//   })
app.get('/api/yoga_api/', controller.getAllPoses );

app.get( '/api/yoga_api/english/:english_name', controller.getEnglish);

app.get( '/api/yoga_api/sanskrit/:sanskrit_name', controller.getSanskrit );

const port = process.env.PORT;
app.listen( port, () => { console.log(`Listening on port ${port}.`); } );
