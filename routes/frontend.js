/**
 * @author	Marcel Thiesies <marcel.thiesies@me.com>
 * @version	0.0.1
 * @copyright	Marcel Thiesies
 */


var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    var db = req.db;
    var brands = db.get('paula_brands');
    
    brands.find({}, {}, function(e, paulaBrands) {
	res.render(
		'frontend/index', {
		    'paulaBrands' : paulaBrands 
		}
	);
    });
});


module.exports = router;