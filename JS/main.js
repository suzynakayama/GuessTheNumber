const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    prevGuesses: [],
    play: function() {
        let num = NaN;

        this.secretNum = Math.floor(Math.random() * 
        (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;

        while (num !== this.secretNum) {
            num = this.getGuess()
            if (num === undefined || num === 'undefined') {return}
            this.prevGuesses.push(num);
            this.render(num);
            if (num === this.secretNum) {
                return;
            }
        }
    }
};

game.getGuess = function() {
    let answer = prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}:`)

    let num = parseInt(answer);

    if (num < this.smallestNum || num > this.biggestNum || isNaN(num) === true) {
        let notProperNumber = prompt(`This is not a number between ${this.smallestNum} and ${this.biggestNum}. If you would like to try again write yes.`)
        if (notProperNumber.toLowerCase() === 'yes') {
        game.getGuess()
        } else {
            alert('Bye!')
            return
        }
    }
    return num
}

game.render = function(num) {
    let prevGuessesString = this.prevGuesses.join(', ')

    if (num === this.secretNum) {
        alert(`Congrats! You guessed the number in ${this.prevGuesses.length} guesses!`)
    } else if (num > this.secretNum) {
        alert(`Your guess is too high!
        Previous guesses: ${prevGuessesString}`)
    } else {
        alert(`Your guess is too low!
        Previous guesses: ${prevGuessesString}`)
    }
}

//game.play()