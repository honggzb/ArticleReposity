var express = require('express');
var router = express.Router();

var Article = require('../models/article');

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
    Article.getArticles(function(err, articles){
        if(err){
            console.log(err);
        }
        res.json(articles);
    })
});

router.get('/details/:id', function(req, res, next) {
    //res.send('respond with a resource');
    Article.getArticlesById(req.params.id, function(err, article){
        if(err){
            console.log(err);
        }
        res.json(article);
    })
});

router.get('/category/:category', function(req, res, next) {
    //res.send('respond with a resource');
    Article.getArticleByCategory(req.params.category, function(err, article){
        if(err){
            console.log(err);
        }
        res.json(article);
    })
});
//
router.post('/',function(req,res,next){
   //get form values
    var title = req.body.title;
    var category = req.body.category;
    var body = req.body.body;

    var newArticle = new Article({
        title:title,
        category:category,
        body:body
    });

    Article.createArticle(newArticle,function(err,article){
        if(err){
            console.log(err);
        }
        res.location('/articles');
        res.redirect('/articles');
    })
});

//update
router.put('/',function(req,res,next){
    //get form values
    var id = req.body.id;
    var data = new Article({
        title:req.body.title,
        category:req.body.category,
        body:req.body.body
    });
    console.log(id+","+data);
    Article.updateArticle(id,data,function(err,article){
        if(err){
            console.log(err);
        }
        res.location('/articles');
        //res.redirect('/articles');
    })
});

router.delete('/:id',function(req,res,next){
    Article.deleteArticle(req.params.id,function(err,article){
        if(err){
            console.log(err);
        }
        res.location('/articles');
        res.redirect('/articles');
    })
});

module.exports = router;
