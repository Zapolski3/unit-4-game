
// computer generates random number between 19 and 120

var randomNum = Math.ceil(Math.random()*100)+18;

console.log(randomNum);

var computerGuess = $("#computerGuess");

computerGuess.append(randomNum);
//-------------------------------------------------------------------------------------

var yourScore = $("#yourScore");

// Generating random numbers for crystals

var numbers = [1,2,3,4,5,6,7,8,9,10,11,12];

// Creating a random number for RED crystal
var randomRed = numbers[Math.floor(Math.random()*numbers.length)];
console.log(randomRed);
$("#red").on("click", function(){
    $("#yourScore").append(randomRed)
}
);
//--------------------------------------------------------------------------------------

