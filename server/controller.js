
var yogaApi = require( './yoga_api.json' );

let yogaPose = {};

module.exports = {

    getAllPoses: ( req, res) => {
        res.status(200).send( yogaApi );
    },
    
    getEnglish: ( req, res ) => {
        for( var i = 0; i < yogaApi.length; i++ ) {
            if( yogaApi[i].english_name === req.params.english_name ){
                yogaPose = {
                    id:             yogaApi[i].id,
                    sanskrit_name:  yogaApi[i].sanskrit_name,
                    english_name:   yogaApi[i].english_name,
                    img_url:        yogaApi[i].img_url,
                    description:    yogaApi[i].description,
                    suggestions:    yogaApi[i].suggestions,
                    user_id:        yogaApi[i].user_id,
                }
            }
        }
            res.status( 200 ).send( yogaPose );
    },

    getSanskrit: ( req, res ) => {
        for( var i = 0; i < yogaApi.length; i++ ) {
            if( yogaApi[i].sanskrit_name === req.params.sanskrit_name ){
                yogaPose = {
                    id:             yogaApi[i].id,
                    sanskrit_name:  yogaApi[i].sanskrit_name,
                    english_name:   yogaApi[i].english_name,
                    img_url:        yogaApi[i].img_url,
                    description:    yogaApi[i].description,
                    suggestions:    yogaApi[i].suggestions,
                    user_id:        yogaApi[i].user_id,
                }
            }
        }
            res.status( 200 ).send( yogaPose );
    },

    findUser: ( req, res ) => {
        req.app.get( 'db' ).find_user()
        .then( users => {
            res.status( 200 ).send( users );
        })
        .catch( ( err ) => { console.log( "error message: ", err.message ) } );
    },

    getUsers: ( req, res ) => { 
        req.app.get( 'db' ).get_users()
        .then( users => { 
            res.status( 200 ).send( users );
        })
        .catch( ( err ) => { console.log( "error message: ", err.message ) } );
    },

    addNewUser: ( req, res ) => { 
        const { firstName, last_name, email, password } = req.body;
        console.log(req.body);
        req.app.get( 'db' ).add_new_user( [ first_name, last_name, email, password ] )
        .then( newUser => {
            res.status( 201 ).send( 'New user Added.' )
        } )
        .catch( ( err ) => { console.log( "error message: ", err.message ) } );
    }

    // saveSequence: (req, res) => {
        
    // }

}