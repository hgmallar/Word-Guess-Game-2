# Word-Guess-Game-2

## Word-Guess-Game-2

![Word Guess Game](demo_video.gif)

### When running index.js:

* A random word is chosen and displayed as a series of underscores.
* You will be asked to input a letter.
     * If you do not guess a letter in the randomly chosen word, the screen will display **INCORRECT** and you will be asked to guess again.  The number of guesses remaining will be displayed.
     * If you guess a letter in the randomly chosen word, the screen will display **CORRECT** and you will be asked to guess again.
* If all of the letters are guessed correctly before the the number of guesses remaining runs out, **YOU WIN** is displayed, a new word is chosen and displayed and the game is started over.
* If all of the letters are NOT guessed correctly before the the number of guesses remaining runs out, **YOU LOST** is displayed, a new word is chosen and displayed and the game is started over.

### Programming Notes
* Uses Node.
* Uses Word and Letter constructors and objects for modularization.
* Uses inquirer package to prompt user.
* Uses random numbers to choose a word.
* Uses recursive functions to make the game continuous.