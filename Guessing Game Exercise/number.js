var number = 10;
var userNum = Number(prompt('Guess a number between 1 and 100:'));

if(userNum<1 || userNum>100)
    alert('The number you have chosen is out of range!\nPlease Try again.');

else if(userNum<number)
    alert('The number you have chosen is lower than the target.');

else if(userNum>number)
    alert('The number you ave enetered is higher than the targert.');
else if(userNum===number)
    alert('Correct!!');
else
    alert('Please enter a valid number!')