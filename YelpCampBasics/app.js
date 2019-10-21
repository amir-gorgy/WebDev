var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var campgrounds = [
    { name: "Campsite1", image: "https://cdn.shopify.com/s/files/1/2468/4011/products/campsite_1_600x.png?v=1524622915" },
    { name: "Campsite2", image: "https://www.nps.gov/subjects/camping/images/site-number_2.jpg?maxwidth=1200&maxheight=1200&autorotate=false" },
    { name: "Campsite3", image: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Car_Camping.jpg" },
    { name: "Campsite4", image: "https://www.rei.com/dam/content_team_081417_16668_campsite_selection_backpackers_lg.jpg" }
];
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/campgrounds', function (req, res) {

    res.render('campgrounds', { campgrounds: campgrounds });
});

app.post('/campgrounds', function (req, res) {
    var name = req.body.name;
    var image = req.body.image;
    campgrounds.push({ name: name, image: image })
    res.redirect("/campgrounds")
});

app.get('/campgrounds/new', function (req, res) {
    res.render('newCampground');
});

app.listen(3000, function () {
    console.log('YelpCamp v1 is online at port 3000');
});