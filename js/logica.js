
let numeroaleatorio = Math.floor(Math.random() * 1000) +1;
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
let guessCount = 1;
let resetButton;
guessSubmit.addEventListener('click', checkGuess);

console.log(numeroaleatorio);
function checkGuess(){
    let userGuess = Number(guessField.value);
    if (guessCount === 1){
        guesses.textContent = 'Intentos anterioes: ';
    }

    guesses.textContent += userGuess + ' ';

    if(userGuess === numeroaleatorio){
        lastResult.textContent = 'Felicitaciones! haz adivinado el número mágico ocupando' + guessCount + ' intentos';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameover();
    }else if (guessCount === 10){
        lastResult.textContent = '!!!Se terminó el juego, ususte la mayoría de intentos!!!';
        lowOrHi.textContent = '';
        setGameover();
    }else{
        lastResult.textContent = 'Incorrecto!...';
        lastResult.style.backgroundColor = 'red';

        if (userGuess < numeroaleatorio){
            lowOrHi.textContent = 'por debajo!';
        }else if (userGuess > numeroaleatorio) {
            lowOrHi.textContent = 'Te pasaste!';

        }
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();
}   
    

    function setGameover(){
        guessField.disabled = true;
        guessSubmit.disabled = true;
        resetButton = document.createElement('button');
        resetButton.textContent = 'Nuevo Juego';
        document.body.appendChild(resetButton);
        resetButton.addEventListener('click', resetJuego)
    }

    function resetJuego() {
        guessCount = 1;
        guesses.textContent = ' ';

        resetButton.parentNode.removeChild(resetButton);
        guessField.disabled = false;
        guessSubmit.disabled = false;
        guessField.value = '';
        guessField.focus();
        lastResult.style.backgroundColor = 'white';
        numeroaleatorio = Math.floor(Math.random() * 1000) +1;
    }

