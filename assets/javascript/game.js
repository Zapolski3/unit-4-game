
// computer generates random number between 19 and 120

var randomNum = Math.ceil(Math.random()*100)+18;

console.log(randomNum);

$("#computerGuess").append(randomNum);
//-------------------------------------------------------------------------------------



// -------------------Generating random numbers for crystals------------------------

var numbers = [1,2,3,4,5,6,7,8,9,10,11,12];
var crystals = ['blue','red','green','yellow'];


// Creating a random number for each crystal

for(i = 0; i < crystals.length; i++){

}

// Creating a random number for RED crystal
var randomRed = numbers[Math.floor(Math.random()*numbers.length)];
console.log(randomRed);
$("#red").on("click", function(){
    $("#yourScore").append(randomRed);
    
});

// Creating a random number for BLUE crystal
var randomBlue = numbers[Math.floor(Math.random()*numbers.length)];
console.log(randomBlue);
$("#blue").on("click", function(){
    $("#yourScore").append(randomBlue);
});

// Creating a random number for GREEN crystal
var randomGreen = numbers[Math.floor(Math.random()*numbers.length)];
console.log(randomGreen);
$("#green").on("click", function(){
    $("#yourScore").append(randomGreen);
});

// Creating a random number for YELLOW crystal
var randomYellow = numbers[Math.floor(Math.random()*numbers.length)];
console.log(randomYellow);
$("#yellow").on("click", function(){
    $("#yourScore").append(randomYellow);
});

// A function that would sum up numbers in "yourScore"


//--------------------------------------------------------------------------------------
