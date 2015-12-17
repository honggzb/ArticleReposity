var express = require('express');
var router = express.Router();

var Category = require('../models/category');

/* GET users listing. */
router.get('/', function(req, res, next) {
    //res.send('respond with a resource');
    Category.getCategorys(function(err, categorys){
        if(err){
            console.log(err);
        }
        res.json(categorys);
    })
});

router.get('/:id', function(req, res, next) {
    //res.send('respond with a resource');
    Category.getCategoryById(req.params.id, function(err,category){
        if(err){
            console.log(err);
        }
        res.json(category);
    })
});

module.exports = router;
