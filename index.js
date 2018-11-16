var inquirer = require("inquirer");
var Word = require("./Word");

//set the number of guesses remaining
var remainingGuesses = 10;

//create an array of stored words
var wordChoices = ["square", "rectangle", "parallelogram", "trapezoid", "concave", "isosceles", "equilateral", "parallel", "perpendicular", "prism", "pentagon", "circumference", "radius", "sphere", "cone", "cylinder", "angle", "diameter", "polygon", "rhombus"];
var word;
var randomNum;

//randomly selects a word and uses the `Word` constructor to store it
//calls displayWord to display what has been guessed on the screen
function newWord() {
    //create a random index to select the word for this game
    randomNum = Math.floor(Math.random() * (20));
    //construct a new word object using the randomly selected word
    word = new Word(wordChoices[randomNum]);
    //display the guessed and unguessed characters on the screen
    displayWord();
}

//displays what has been guessed on the screen
//checks if the user has won or lost
function displayWord() {
    //display the guessed and unguessed characters on the screen 
    console.log(word.wordToString());
    //if the word on the screen is the same as the word guessed, you won
    if (word.wordToString().replace(/\s/g, '') === wordChoices[randomNum]) {
        console.log("You win!");
        //reset the remaining guesses
        remainingGuesses = 10;
        console.log("Next word!");
        //start over by picking a new word
        newWord();
    }
    //if you still have guesses remaining, allow the player to guess again
    else if (remainingGuesses > 0) {
        playerGuesses();
    }
    //otherwise, you lost
    else {
        console.log("You lose!");
        //reset the remaining guesses
        remainingGuesses = 10;
        console.log("Next word!");
        //start over by picking a new word
        newWord();
    }
};

//Prompts the user for each guess and keeps track of the user's remaining guesses
function playerGuesses() {
    // Create a "Prompt" with a series of questions.
    inquirer.prompt([
        // Here we create a basic text prompt, checking to make sure it's exactly letter 
        {
            type: "input",
            message: "Guess a letter!",
            name: "guess",
            validate: function (guess) {
                if ((guess.length === 1) && (guess.match(/[A-Za-z]/i))) {
                    return true;
                }
                else {
                    return false;
                }
            }
        }
    //once you have the user input
    ]).then(function (inquirerResponse) {
        console.log(inquirerResponse.guess);
        //updates the guess status of the character chose by the user
        word.guess(inquirerResponse.guess.toLowerCase());
        var charInWord = false;
        //loop through the word to see if the character guessed by the user is in the word
        for (var i = 0; i < word.letters.length; i++) {
            if (word.letters[i].value === inquirerResponse.guess.toLowerCase()) {
                //if character is in the word, set the boolean and exit the loop
                var charInWord = true;
                console.log("CORRECT!");
                i = word.letters.length;
            }
        }
        if (!charInWord) {
            //if the character guessed is not in the loop, decrement the number of guesses remaining
            remainingGuesses--;
            console.log("INCORRECT!");
            if (remainingGuesses === 1) {
                console.log(remainingGuesses + " guess remaining!");
            }
            else {
                console.log(remainingGuesses + " guesses remaining!");
            }
        }
        //display the guessed and unguessed characters on the screen
        displayWord();
    });
};

//choose a word and start the game 
newWord();