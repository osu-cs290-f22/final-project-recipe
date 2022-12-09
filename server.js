var fs = require('fs')
var express = require('express');
var exphbs = require('express-handlebars')
var recipeData = require("./recipeData.json")
var port = process.env.PORT || 8000;
var app = express();

app.engine('handlebars', exphbs.engine({
    defaultLayout: "main"
}))
app.set('view engine', 'handlebars')
app.use(express.json())
app.use(express.static('public'));

app.get('/', function(req, res, next){
    res.status(200).render('homePage', {
        homePage: true,
        recipeData
    })
})

app.get('*', function (req, res, next) {
    res.status(404).render('404', {
        page: req.url
    })
})

app.listen(port, function () {
    console.log("...listening on port", port)
})