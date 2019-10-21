var animalDict = {
    pig: 'oink',
    cow: 'moo',
    dog: 'woof woof'
}

var express = require('express');
var app = express();

app.get('/', function(req,res){
    res.send('Hi there! Welcome to my assignment.');
});

app.get('/speak/:animal', function(req,res){
    var animal = req.params.animal.toLowerCase();
    if(animal in animalDict)
        res.send('The ' + animal + " says '"  + animalDict[animal] + "'!");
    else
        res.send('Sorry, page not found ... What are you doing with your life?');
});

app.get('/repeat/:word/:n', function(req,res){
    var word = req.params.word;
    var n = req.params.n;
    for(var i = 0; i < n; i++){
        res.write(word + ' ');
    }
    res.end();
});

app.get('*', function(req,res){
    res.send('Sorry, page not found ... What are you doing with your life?');
})

app.listen(3000, function(){
    console.log('Server listening on port 3000');
});
