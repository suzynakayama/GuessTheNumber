let msg = document.getElementById('msg');
let userInput = document.getElementById('answer')
let checkBtn = document.getElementById('submit')
let resetBtn = document.getElementById('reset')
let userNum = document.getElementById('userNum')

const game = {
    biggestNum: 100,
    smallestNum: 1,
    secretNum: Math.floor(Math.random() * 100) + 1,
    prevGuesses: []
}

//console.log(game.secretNum)

checkBtn.addEventListener('click', handleClick)
resetBtn.addEventListener('click', init)

function handleClick(e) {
    let numberInputed = userInput.value;
    let numberInputedNotString = parseInt(numberInputed)
    userInput.value = "";

    game.prevGuesses.push(numberInputedNotString);

    render(numberInputed, numberInputedNotString);
}

function init() {
    userInput.value = "";
    msg.innerHTML = "";
    userNum.innerHTML = "";
    game.prevGuesses = [];
}

function render (numberInputed, numberInputedNotString) {
    userNum.innerHTML = numberInputed
    
    let prevGuessesString = game.prevGuesses.join(', ')

    if (numberInputedNotString < 0 || numberInputedNotString > 100) {
        msg.innerHTML = `This is not a number between ${game.smallestNum} and ${game.biggestNum}.`
        game.prevGuesses = [];
    } else {
        if (numberInputedNotString === game.secretNum) {
            msg.innerHTML = `Congrats! You guessed the number in ${game.prevGuesses.length} guesses!`
        } else if (numberInputedNotString > game.secretNum) {
            msg.innerHTML = `Your guess is too high!
            Previous guesses: ${prevGuessesString}`
        } else {
            msg.innerHTML = `Your guess is too low!
            Previous guesses: ${prevGuessesString}`
        }
    }
}
