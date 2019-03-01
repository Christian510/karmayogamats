var yogaApi = require( './yoga_api.json' );

module.exports = {

    read: (req, res) => {
        res.status(200).send( yogaApi );
    }

}