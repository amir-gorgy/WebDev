var express    = require('express'),
    app        = express(),
    bodyParser = require('body-parser'),
    mongoose   = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex',true);    
mongoose.connect('mongodb://localhost:27017/yelp_camp',{useNewUrlParser: true});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    details: String
});

var Campground = mongoose.model('campground', campgroundSchema);


// var campgrounds = [
//     { name: "Campsite1", image: "https://cdn.shopify.com/s/files/1/2468/4011/products/campsite_1_600x.png?v=1524622915" },
//     { name: "Campsite2", image: "https://www.nps.gov/subjects/camping/images/site-number_2.jpg?maxwidth=1200&maxheight=1200&autorotate=false" },
//     { name: "Campsite3", image: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Car_Camping.jpg" },
//     { name: "Campsite4", image: "https://www.rei.com/dam/content_team_081417_16668_campsite_selection_backpackers_lg.jpg" }
// ];

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/campgrounds', function (req, res) {
    Campground.find({},function(err, dbCampgrounds){
        if(err)
            console.log(err);
        else
            res.render('index', { campgrounds: dbCampgrounds });
    })
});

app.post('/campgrounds', function (req, res) {
    var name = req.body.name;
    var image = req.body.image;
    var details = req.body.details;
    Campground.create({
        name: name,
        image: image,
        details: details
    }, function(err, campground){
        if(err)
            console.log(err);
        else{
            console.log(campground);
            res.redirect("/campgrounds");
        }
    })
});

app.get('/campgrounds/new', function (req, res) {
    res.render('newCampground');
});

app.get("/campgrounds/:id", function(req,res){
    Campground.findById(req.params.id,function(err,foundCampground){
        if(err)
            console.log(err);
        else{
            console.log(foundCampground);
            res.render("show",{campground: foundCampground});
        }
    });
});

app.listen(3000, function () {
    console.log('YelpCamp v1 is online at port 3000');
});