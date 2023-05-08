function initializeGame(word) {
    const wordLines = document.getElementById("word-lines");
    const guessButton = document.getElementById("guess-button");
    const inputLetter = document.getElementById("input-letter");
    const result = document.getElementById("result");
    const lives = document.getElementById("lives");

    let currentWord = "";
    let remainingLives = 7;

    // initializing the lines of the word to be guessed
    for (let i = 0; i < word.length; i++) {
        if (word[i] === " ") {
            currentWord += " ";
        } else {
            currentWord += "_";
        }
        if (i < word.length - 1) {
            currentWord += " ";
        }
    }
    wordLines.textContent = currentWord;

    guessButton.addEventListener("click", function() {
        let guessedLetter = inputLetter.value.toLowerCase();

        // check if the guessed letter is correct
        let correctGuess = false;
        for (let i = 0; i < word.length; i++) {
            if (word[i] === guessedLetter) {
                currentWord = currentWord.substring(0, 2*i) + guessedLetter + currentWord.substring(2*i + 1);
                correctGuess = true;
            }
        }
        if (!correctGuess) {
            remainingLives--;
            lives.textContent = remainingLives;
        }

        // check if the entire word has been guessed
        if (currentWord.indexOf("_") === -1) {
            result.textContent = "Congratulations, you guessed the word!";
            guessButton.disabled = true;
        } else if (remainingLives === 0) {
            result.textContent = "You lost, the word was: " + word;
            guessButton.disabled = true;
        } else {
            result.textContent = correctGuess ? "Correct guess!" : "Incorrect guess!";
        }

        inputLetter.value = "";
        wordLines.textContent = currentWord;
    });
}

initializeGame("example");
