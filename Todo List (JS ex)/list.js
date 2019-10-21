var todos = [];
window.setTimeout(function() {
    var i = true;

    while (i) {
        var input = prompt("What will you like to do?")
        if (input.toUpperCase() === 'NEW') {
            todos.push(prompt('What would you like to add to the list?'));
        }

        else if (input.toUpperCase() === 'LIST') {
            console.log(todos);
        }
        else if (input.toUpperCase() === 'QUIT') {
            i = false;
        }

        else if(input.toUpperCase() === 'DELETE'){
            var deleteWord = prompt('Which item would you want to delete?');
            todos.splice(todos.indexOf(deleteWord), 1);
            console.log(todos);
        }

        else {
            alert('Please input a valid instruction.')
        }
    }
}, 500);


