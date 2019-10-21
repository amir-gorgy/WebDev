var request = require('request');
request('https://jsonplaceholder.typicode.com/users',function(error, response, body){
    if(!error && response.statusCode == 200){
        const parsedData = JSON.parse(body);
        parsedData.forEach(function(item){
            console.log(item.name + ', ' + item.address.street + ' '+ item.address.suite);
        })
    }
});