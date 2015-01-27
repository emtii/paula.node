/**
 * @author	Marcel Thiesies <marcel.thiesies@me.com>
 * @version	0.0.1
 * @copyright	Marcel Thiesies
 */


var express = require('express');
var router = express.Router();


/* GET backend index */
router.get('/', function(req, res, next) {
    res.render('backend/index');
});

/*
 POST to Add a Brand
 
router.post('/backend/brands/save', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var inputBrandName			= req.body.inputBrandName;
    var inputBrandUrl			= req.body.inputBrandUrl;
    var inputBrandDescription		= req.body.inputBrandDescription;
    var BrandInputFileUrl		= req.body.BrandInputFileUrl;

    // Set our collection
    var collection = db.get('paula_brands');

    // Submit to the DB
    collection.insert({
        "name" : inputBrandName,
        "url" : inputBrandUrl,
        "description" : inputBrandDescription,
        "logo" : BrandInputFileUrl
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // If it worked, set the header so the address bar doesn't still say /adduser
            res.location("backend");
            // And forward to success page
            res.redirect("backend");
        }
    });
});
*/

module.exports = router;
