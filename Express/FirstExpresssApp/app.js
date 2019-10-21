var express = require('express');
var app = express();

// Routes
// '/' => 'Hi There'
app.get('/', function(req, res){
    res.send('Hi There!');
});

// '/bye' => 'Goodbye!'
app.get('/bye', function(req, res){
    res.send('Goodbye!');
});

//'/dog' => 'Meow!'
app.get('/dog', function(req,res){
    res.send('Meow!');
});

// any other route (can be used to display error message when route is not defined)
// if you put it at the start, all the routes respond in the same way
app.get('*',function(req,res){
    res.send('you are a star!');
});

// Tell Express to listen for requests (start server)
app.listen(3000, function(){
    console.log('Server listening on port 3000');
});
