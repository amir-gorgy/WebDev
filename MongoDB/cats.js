var mongoose = require("mongoose");

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex',true);

mongoose.connect('mongodb://localhost:27017/cats_app',{useNewUrlParser: true});

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);
// add new cat to db
// var george = new Cat ({
//     name:'Mrs. Norris',
//     age:7,
//     temperament: 'Evil'
// });

// george.save(function(err,cat){
//     if(err){
//         console.log('Something went wrong!');
//     }
//     else{
//         console.log('New cat has been added');
//         console.log(cat);
//     }
// });

// Cat.create({
//     name:'Z2rda',
//     age: 5,
//     status: 'dead'
// }, function(err,cat){
//     if(err)
//         console.log(err);
//     else
//         console.log(cat);
// });

// retrieve all cats from db and console.log
Cat.find({}, function(err,cats){
    if(err){
        console.log('Error has occurred:')
        console.log(err)
    }
    else{
        console.log('All the cats');
        console.log(cats);
    }
})