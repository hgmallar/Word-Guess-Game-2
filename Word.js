var Letter = require("./Letter");

//Word Constructor
var Word = function (wordToGuess) {

    //An array of `new` Letter objects representing the letters of the underlying word.
    this.letters = [];
    for (var i = 0; i < wordToGuess.length; i++) {
        var letter = new Letter(wordToGuess.charAt(i));
        this.letters.push(letter);
    }

    //A function that returns a string representing the word. Calls the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenates those together.
    this.wordToString = function () {
        var wordString = "";
        for (var j = 0; j < this.letters.length; j++) {
            wordString += this.letters[j].checkLetter();
        }
        return wordString;
    };

    //A function that takes a character as an argument and calls the update guess function on each letter object (the second function defined in `Letter.js`).
    this.guess = function (charGuess) {
        for (var k = 0; k < this.letters.length; k++) {
            this.letters[k].update(charGuess);
        }
    }
    
};

module.exports = Word;