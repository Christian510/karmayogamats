require('dotenv').config();
const bodyParser = require( 'body-parser' );
const express = require( 'express' );
const app = express();
const controller = require( './controller.js' );

//TODO cors is messing with the response.

app.use( bodyParser.json() );
// massive( process.env.DATABASE_URL )
// .then( db => { app.set( db, 'db' ) } )
// .catch(err => { console.log( err ) });

app.get('/api/yoga_api/', controller.read );

app.get( '/api/yoga_api/:' )

const port = process.env.PORT;
app.listen( port, () => { console.log(`Listening on port ${port}.`); } );
