// REQUIREMENTS
var express = require('express'),
app         = express(),
bodyParser  = require('body-parser'),
mongoose    = require('mongoose'),
expressSanitizer = require('express-sanitizer'),
methodOverride = require('method-override');

// MONGOOSE CONFIG
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex',true);
mongoose.connect('mongodb://localhost:27017/restful_blog_app',{useNewUrlParser: true});

// APP CONFIG
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(expressSanitizer())

// MODEL CONFIG
var blogSchema = new mongoose.Schema({
    title: String,
    body: String,
    image: String,
    created: 
        {type: Date, 
        default: Date.now
    }
});

var Blog = mongoose.model("Blog", blogSchema);

// Blog.create({
//     title: 'Test',
//     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg/220px-Ash_Tree_-_geograph.org.uk_-_590710.jpg',
//     body:'Testing index'
// });

// RESTFUL ROUTES
app.get('/',function(req,res){
    res.redirect('/blogs');
});

// INDEX
app.get('/blogs', function(req,res){
    Blog.find({},function(err,blogs){
        if(err)
            console.log(err);
        else{
            res.render("index", {blogs: blogs});
            
        }
    })
});

// CREATE
app.post('/blogs',function(req,res){
    // create blog
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.create(req.body.blog,function(err,newBlog){
        if(err)
            console.log(err);
        else{
        // redirect
            res.redirect('/blogs');
        }
    }
)});

// NEW
app.get('/blogs/new',function(req,res){
    res.render('newForm');
});

// Show route
app.get('/blogs/:id',function(req,res){
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.redirect('/blogs');
            }
        else{
            res.render('show',{blog: foundBlog});
        }

    })
});

// Edit Route
app.get('/blogs/:id/edit', function(req,res){
    Blog.findById(req.params.id, function(err,foundBlog){
        if(err)
            console.log(err);
        else
    res.render("edit", {blog: foundBlog});
    })
});

//Update Route
app.put('/blogs/:id',function(req,res){
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog){
        if(err)
            res.redirect('/');
        else
            res.redirect('/blogs/' + req.params.id);
        });
        
});

// Destroy Route
app.delete('/blogs/:id', function(req,res){
    // Destroy blog
    Blog.findByIdAndDelete(req.params.id, function(err){
        res.redirect('/');
    })
    // redirect
})

app.listen(3000, function () {
    console.log('Restful blog is online at port 3000');
});