var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Filelist page. */
router.get('/filelist', function(req, res) {
    var db = req.db;
    var collection = db.get('filecollection');
    collection.find({},{},function(e,docs){
        res.render('filelist', {
            "filelist" : docs
        });
    });
});

/* GET Upload File page. */
router.get('/newfile', function(req, res) {
    res.render('newfile', { title: 'Add New File' });
});

/* POST to Upload File Service */
router.post('/addfile', function(req, res) {

    // Set our internal DB variable
    var db = req.db;
	
	//console.dir(req.file);

    // Get our form values. These rely on the "name" attributes
    // var userName = req.body.filename;
    // var userEmail = req.body.useremail;
	//var binaryData = req.files.thumbnail;
	//var userEmail = req.body.useremail;

    // Set our collection
    //var collection = db.get('filecollection');

    // Submit to the DB
    //collection.insert({
    //    "binarydata" : binaryData,
    //    "email" : userEmail
    //}, function (err, doc) {
    //    if (err) {
            // If it failed, return error
    //        res.send("There was a problem adding the information to the database.");
    //    }
    //    else {
            // And forward to success page
    //        res.redirect("newfile");
    //    }
    //});
});

module.exports = router;
