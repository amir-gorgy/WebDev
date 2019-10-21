var express =  require('express');
var app = express();
var pageName;

app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get('/', function(req,res){
    pageName = 'home';
    res.render('home',{pageName: pageName});
});

app.get('/fallinlovewith/:name',function(req,res){
    pageName = 'Loving';
    var name = req.params.name;
    res.render('love',{nameVar: name, pageName:name});
});

app.get('/posts',function(req,res){
    pageName = 'posts';
    var posts = [
        {title: 'Post1', author: 'author1'},
        {title: 'Post2', author: 'author2'},
        {title: 'Post3', author: 'author3'},
        {title: 'Post4', author: 'author4'},
        {title: 'Post5', author: 'author5'}
    ]
    res.render('posts', {posts: posts, pageName: pageName})
});

app.listen(3000, function(){
    console.log('Server Connected at port 3000');
});