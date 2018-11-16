
//Letter Constructor
var Letter = function(letter) {
    
    //A string value to store the underlying character for the letter.
    this.value = letter;

    //A boolean value that stores whether that letter has been guessed yet.
    this.alreadyGuessed = false;

    //A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed.
    this.checkLetter = function () {
        if (this.alreadyGuessed) {
            return " " + this.value;
        }
        else {
            return " _";
        }
    }
    //A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly.
    this.update = function(letter) {
        if (letter === this.value) {
            this.alreadyGuessed = true;
        }
    }

};

module.exports = Letter;