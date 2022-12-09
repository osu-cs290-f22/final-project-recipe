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
app.get('/recipes', function (req, res, next) {
    res.status(200).render('recipePage', {
        recipeData
    })
})
app.get('/recipes/:recipe', function (req, res, next) {
    var recipe = req.params.recipe.toLowerCase()
    if (recipeData[recipe]) {
        res.status(200).render('recipePage', recipeData[recipe])
    } else {
        next()
    }
})
app.post('/recipes/:recipe/addPhoto', function (req, res, next) {
    var recipe = req.params.recipe.toLowerCase()
    if (recipeData[recipe]) {
        if (req.body && req.body.url && req.body.caption) {
            var photo = {
                url: req.body.url,
                caption: req.body.caption
            }
            recipeData[recipe].photos.push(photo)

            fs.writeFile(
                './recipeData.json',
                JSON.stringify(recipeData, null, 2),
                function (err) {
                    if (err) {
                        res.status(500).send("Upload Error!")
                    } else {
                        res.status(200).send("Success!")
                    }
                }
            )
        } else {
            res.status(400).send("Need a URL and Caption!")
        }
    } else {
        next()
    }
})

app.get('*', function (req, res, next) {
    res.status(404).render('404', {
        page: req.url
    })
})

app.listen(port, function () {
    console.log("...listening on port", port)
})