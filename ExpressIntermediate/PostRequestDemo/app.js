var express =  require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');
var newFriend;
var friends = ['Karim', 'Anas', 'Nadim', 'Hatem', 'Sir'];

app.get('/', function(req,res){
    res.render('home', {pageName: 'Homepage'});
});

app.get('/friends', function(req,res){
    if(newFriend) friends.push(newFriend);    
    res.render('friends',{pageName: 'Friends', friends: friends});
});

app.post('/addFriend', function(req,res){
    newFriend = req.body.newFriend;
    res.redirect('/friends');
})

app.listen(3000, function(){
    console.log('Server is up on PORT: 3000');
})