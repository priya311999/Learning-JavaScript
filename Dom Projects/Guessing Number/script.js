let randomNumber= parseInt(Math.random()*100 + 1);

const userInput = document.querySelector('.guessField')

const preGuesses = document.querySelector('.pguesses')

const lastResult = document.querySelector('.lastresult')

const submit = document.querySelector('#subt');

const lowOrHigh = document.querySelector('.lowOrHigh')

const resultParas = document.querySelector('.result')

const p = document.createElement('p');


let prevGuess=[]
let numGuess = 1

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess=parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    //Validates the input of the user
    if(isNaN(guess)){
        alert('Please enter a valid number')
    } else if(guess < 1){
        alert('Please enter a number more than 1')
    }else if(guess > 100){
        alert('Please enter a number less than 100')
    }else{
        prevGuess.push(guess)
        if(numGuess=== 11){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)

        }
    }

}

function checkGuess(guess){
    //checks whether the value given by user is smaller greater or equal to the generated random number
    if(guess=== randomNumber){
        displayMessage(`You guessed it right`)
        endGame()
    }else if(guess < randomNumber){
        displayMessage(`Number is too low`)
    }else if(guess > randomNumber){
        displayMessage(`Number is too high`)
    }
}

function displayGuess(guess){ //cleanupguess
    //will clean the values, update the previous guess and guesses remaining
    userInput.value = ''
    preGuesses.innerHTML += `${ guess}, `
    numGuess++;
    lastResult.innerHTML = `${11-numGuess}`

}

function displayMessage(message){
    //will print the message
    lowOrHigh.innerHTML=`<h2>${message}</h2>`
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id= "newGame">Start New Game</h2>`;
    resultParas.appendChild(p)  
    playGame = false;  
    newGame()
}

function newGame(){
    const newGameButton=document.querySelector('#newGame')
    newGameButton.addEventListener('click', function (e){
        
        randomNumber = parseInt(Math.random()*100 + 1);
        prevGuesses= [];        
        numGuess = 1
        resultParas.innerHTML=''
        lastResult.innerHTML = `${11-numGuess}`
        userInput.removeAttribute('disabled')
        resultParas.removeChild(p)
        playGame = true
    })
}



